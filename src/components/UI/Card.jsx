const Card = ({
    icon,
    title,
    description,
    bgColor = "bg-none",
    fontWeight="font-extrabold",
    textColor = "text-Dark_Black",
    morePadding,
    className = "",
    children,
    ...props
  }) => {
    return (
      <div
        className={`${morePadding?"p-8 md:p-12":"p-5 sm:p-8"} flex flex-col items-center text-center space-y-4 ${bgColor} ${className}`}
        {...props}
      >
        {icon && <img className="w-12 object-cover" src={icon} alt={title} />}
        {title && <h3 className={`text-xl ${fontWeight} ${textColor}`}>{title}</h3>}
        {description && (
          <p className={`text-sm sm:text-base ${textColor} mt-4 max-w-60`}>{description}</p>
        )}
        {children}
      </div>
    );
  };
  
  export default Card;
  
  