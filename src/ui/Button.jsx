function Button({ children, style, onClick, to, ariaLabel }) {
  const baseStyles =
    "text-sm uppercase cursor-pointer tracking-[0.2em] hover:brightness-110 transition-all duration-150 px-4 py-2";

  if (to)
    return (
      <a href={to} className={` ${baseStyles} ${style} `}>
        {children}
      </a>
    );

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${style}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
