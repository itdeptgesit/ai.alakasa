import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || '1D';

  let interval = '15m';
  let range = '1d';

  switch (period) {
    case '1D': interval = '15m'; range = '1d'; break;
    case '1W': interval = '1h'; range = '5d'; break;
    case '1M': interval = '1d'; range = '1mo'; break;
    case '3M': interval = '1d'; range = '3mo'; break;
    case '1Y': interval = '1d'; range = '1y'; break;
    case '5Y': interval = '1wk'; range = '5y'; break;
    default: interval = '15m'; range = '1d';
  }

  try {
    const res = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/ALKA.JK?interval=${interval}&range=${range}`, {
      next: { revalidate: 60 } // Cache API responses for 1 minute
    });
    
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch data' }, { status: res.status });
    }

    const data = await res.json();
    const result = data.chart.result[0];
    
    const timestamps = result.timestamp || [];
    const closes = result.indicators.quote[0].close || [];
    
    const history = [];
    for (let i = 0; i < closes.length; i++) {
      if (closes[i] !== null && timestamps[i]) {
        history.push({ time: timestamps[i], price: closes[i] });
      }
    }

    return NextResponse.json({
      meta: result.meta,
      history
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
