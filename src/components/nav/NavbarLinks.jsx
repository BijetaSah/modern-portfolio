function NavbarLinks({ link }) {
  return (
    <a
      href={link.href}
      className="font-label text-[16px] uppercase tracking-[0.2em] text-muted hover:text-primary transition-colors duration-150"
    >
      {link.title}
    </a>
  );
}

export default NavbarLinks;
