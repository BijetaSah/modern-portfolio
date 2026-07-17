import { socialLinks } from "../../constants/hero";

function ContactLinks() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 max-w-4xl gap-5">
      {socialLinks.map((item) => (
        <a
          key={item.id}
          className="shape-cutout border border-border bg-background-card p-5 flex items-center gap-4 hover:border-primary transition-all duration-150 group "
          href={item.href}
        >
          <div className="w-10 h-10 flex items-center justify-center border border-primary/30 text-primary group-hover:bg-primary group-hover:text-background transition-all duration-150">
            {<item.icon />}
          </div>
          <div>
            <p className="font-label text-xs uppercase tracking-[0.2em] text-muted">
              {item.title}
            </p>
            <p className="font-mono text-sm text-text">
              {item.label || item.href}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
export default ContactLinks;
