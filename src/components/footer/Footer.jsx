import { socialLinks } from "../../constants/hero";

function Footer() {
  const date = new Date();
  return (
    <footer className="border-t border-border py-8 tracking-wider uppercase text-xs md:text-sm text-muted flex justify-between items-center px-10 md:flex-row flex-col gap-4">
      <div>&copy; {date.getFullYear()} // bijeta sah</div>
      <div className="flex md:gap-4 gap-2 items-center  ">
        {socialLinks.map((item) => (
          <a href={item.href}>{item.title}</a>
        ))}
      </div>
    </footer>
  );
}
export default Footer;
