export const Button = ({ children, onClick, variant = 'primary', icon: Icon, className = '', ...props }) => {
  const variants = {
    primary: 'bg-primary text-cream hover:bg-primary/90',
    secondary: 'bg-cream text-primary hover:bg-lightBrown hover:text-cream',
  };

  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-full font-dmSans font-medium
        transition-all duration-300 flex items-center justify-center gap-2
        shadow-lg hover:shadow-xl ${variants[variant]} ${className}
      `}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

