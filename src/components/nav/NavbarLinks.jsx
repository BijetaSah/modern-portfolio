function NavbarLinks({ link, style, onClick, showTitle = true }) {
  if (link.ariaLabel)
    return (
      <a
        href={link.href}
        className={`font-label uppercase text-[16px] flex gap-1 items-center tracking-[0.2em] text-muted hover:text-primary transition-colors duration-150 ${style || ""}`}
        aria-label={link.ariaLabel || link.title}
        onClick={onClick}
      >
        {link.icon && <link.icon />} {showTitle && link.title}{" "}
        {showTitle && "|"}
      </a>
    );
  return (
    <a
      href={link.href}
      className={`font-label uppercase text-[16px] flex gap-1 items-center tracking-[0.2em] text-muted hover:text-primary transition-colors duration-150 ${style}`}
      onClick={onClick}
    >
      {link.icon && <link.icon />} {link.title}
    </a>
  );
}

export default NavbarLinks;
