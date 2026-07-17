import { useState } from "react";
import { navbarLinks } from "../../constants/navbar";
import Button from "../../ui/Button";
import NavbarLinks from "./NavbarLinks";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMobileNavButtonClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <a
          href="#"
          className=" text-primary font-orbitron font-bold text-[20px] tracking-widest uppercase neon-text"
        >
          Bijeta_Sah
        </a>

        <Button
          onClick={handleMobileNavButtonClick}
          ariaLabel={"Toggle Menu Button"}
          style={`lg:hidden text-primary hover:shadow-(--neon-glow-sm) cursor-pointer text-3xl! p-0!`}
        >
          <IoMenu />
        </Button>

        {isOpen && (
          <MobileNavBar open={isOpen} onClose={() => setIsOpen(false)} />
        )}

        <div className={` hidden lg:flex  items-center gap-8 }`}>
          {navbarLinks.map((link) => (
            <NavbarLinks link={link} key={link.id} />
          ))}
          <Button
            to={"#contact"}
            style={
              "shape-cutout border-2 border-primary hover:bg-primary hover:text-background shadow-(--neon-glow-sm)"
            }
          >
            hire me
          </Button>
        </div>
      </div>
    </nav>
  );
}

function MobileNavBar({ open, onClose }) {
  return (
    <div
      className={`flex flex-col fixed top-15 left-0 items-center justify-start pt-10 gap-8 lg:hidden h-[calc(100vh-5rem)] w-full bg-background border-r border-primary/10
        transition-transform duration-300 ease-in-out z-40
        ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      {navbarLinks.map((link) => (
        <NavbarLinks link={link} key={link.id} onClick={onClose} />
      ))}
      <Button
        to={"#contact"}
        style={
          "shape-cutout border-2 border-primary hover:bg-primary hover:text-background shadow-(--neon-glow-sm)"
        }
      >
        hire me
      </Button>
    </div>
  );
}

export default Navbar;
