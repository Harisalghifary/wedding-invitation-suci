export const SectionWrapper = ({ children, id, background = 'cream', className = '' }) => {
  const bgClasses = {
    cream: 'bg-cream',
    primary: 'bg-primary',
    transparent: 'bg-transparent',
  };

  return (
    <section
      id={id}
      className={`py-16 px-4 sm:px-6 md:px-8 ${bgClasses[background]} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};
