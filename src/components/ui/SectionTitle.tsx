import React from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center flex flex-col items-center' : ''} ${className}`}>
      <h2 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wide mb-4 font-heading">{title}</h2>
      {subtitle && (
        <p className="text-steel max-w-2xl text-sm leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
