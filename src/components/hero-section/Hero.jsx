import { FaChevronDown, FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

import { heroHighlights, heroSkills, socialLinks } from "../../constants/hero";

import Button from "../../ui/Button";
import { AiOutlineDownload } from "react-icons/ai";
import NavbarLinks from "../nav/NavbarLinks";
import { GoDotFill } from "react-icons/go";
import Container from "../../ui/Container";
import Caret from "../../ui/Caret";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-grid">
      <Container style={"py-32!"}>
        <p className="text-muted text-sm uppercase tracking-widest flex flex-wrap items-center gap-5">
          <span className="text-primary">$</span>whoami
        </p>
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:items-center lg:gap-16">
          {/* left side */}
          <div className="w-full lg:w-3/5 space-y-10">
            <h1 className="font-orbitron text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest leading-none mb-6">
              <span className="text-text mr-5">Bijeta</span>
              <span className="text-accent animate-rgb-glitch">sah</span>
            </h1>
            <div>
              <p className="font-orbitron text-xl md:text-2xl uppercase tracking-wide text-secondary">
                Frontend Developer
              </p>
              {/* skills section in hero */}
              <div className="flex flex-wrap items-center font-mono text-sm text-muted gap-x-2 gap-y-2 lg:gap-6 mt-4">
                <span className="lg:-mr-4 text-primary ">
                  <FaGreaterThan />
                </span>
                {heroSkills.map((item) => (
                  <span key={item.id} className="flex items-center gap-1">
                    {item.name} <LuDot />
                  </span>
                ))}
                <Caret />
              </div>
            </div>
            <p className="text-muted">
              Building modern and scalable web applications with
              performance-first architecture.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {heroHighlights.map((item) => (
                <span
                  key={item.id}
                  className="text-primary border border-primary/30 bg-primary/5 shape-cutout px-3 py-2 uppercase text-xs"
                >
                  {item.icon} {item.label}
                </span>
              ))}
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                to={"#projects"}
                style={
                  "border border-primary text-text-primary bg-primary shape-cutout py-3.5"
                }
              >
                view projects
              </Button>
              <Button
                style={
                  "border border-accent text-accent shape-cutout py-3.5 hover:bg-accent hover:text-text-primary"
                }
              >
                <span className="flex gap-1 items-center">
                  <AiOutlineDownload className="text-xl" />
                  Download resume
                </span>
              </Button>
            </div>
            <div className="flex gap-2 lg:gap-8 items-center">
              {socialLinks.map((link) => (
                <NavbarLinks
                  link={link}
                  key={link.id}
                  style={"text-xs! flex items-center gap-2"}
                />
              ))}
            </div>
          </div>
          {/* right side */}
          <div className="hidden lg:block lg:w-2/5 text-sm text-muted relative ">
            <div className="absolute top-0.5 left-0.5 text-transparent border-t border-l w-4 border-primary ">
              .
            </div>

            <div className="absolute top-0.5 right-0.5 text-transparent border-t border-r w-4 border-primary ">
              .
            </div>
            <div className="absolute bottom-0.5 left-0.5 text-transparent border-b border-l w-4 border-primary ">
              .
            </div>
            <div className="absolute bottom-0.5 right-0.5 text-transparent border-b border-r w-4 border-primary ">
              .
            </div>
            <div className="border border-primary/30 shadow-(--neon-glow-sm) p-4 text-sm bg-muted/10 ">
              <p className="uppercase tracking-widest text-primary font-orbitron text-xs flex gap-3">
                <span className="font-bold"> //</span>
                system_status
              </p>
              <div className="space-y-5 mt-4 border-b border-muted/30 pb-4 ">
                <p className="flex justify-between items-center ">
                  <span>role</span>{" "}
                  <span className="text-primary text-shadow-sm">
                    UI Developer
                  </span>{" "}
                </p>
                <p className="flex justify-between items-center ">
                  <span>company</span>{" "}
                  <span className="text-secondary">Hypersonix.AI</span>{" "}
                </p>
                <p className="flex justify-between items-center ">
                  <span>stack</span>{" "}
                  <span className="text-secondary">
                    React.js / Next.js / Typescript
                  </span>{" "}
                </p>
                <p className="flex justify-between items-center ">
                  <span>experience</span>{" "}
                  <span className="flex gap-2 items-center text-secondary">
                    {" "}
                    <FaLessThan /> 1 year
                  </span>{" "}
                </p>
                <p className="flex justify-between items-center ">
                  <span>status</span>{" "}
                  <span className="flex gap-2 items-center text-primary animate-flicker">
                    {" "}
                    <GoDotFill className="text-primary" />
                    open to roles
                  </span>{" "}
                </p>
              </div>
              <p className="text-[14px] mt-3">
                <span className="text-primary">$</span>
                <span className="">
                  {" "}
                  building _products & shipping_at_scale
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute animate-bounce text-primary bottom-0 left-[50%] translate-x-[-50%]">
        <FaChevronDown />
      </div>
    </section>
  );
}
export default Hero;
