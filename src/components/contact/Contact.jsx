import { IoMailOutline } from "react-icons/io5";
import { PiSuitcaseLight } from "react-icons/pi";
import { FaGreaterThan } from "react-icons/fa6";

import { motion } from "motion/react";

import SectionContainer from "../../ui/SectionContainer";
import SubHeading from "../../ui/SubHeading";
import Container from "../../ui/Container";
import Caret from "../../ui/Caret";
import ContactLinks from "./ContactLinks";

function Contact() {
  return (
    <SectionContainer sectionId={"contact"}>
      <Container>
        <SubHeading>
          <span className="text-primary text-[16px]">
            {" "}
            <IoMailOutline />
          </span>
          <span>
            Contact<span className="text-primary ">_</span>
          </span>
        </SubHeading>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="shape-cutout border border-primary/40 bg-primary/5 p-4 sm:p-6 md:p-8 mb-12 max-w-4xl mt-10"
        >
          <div className="flex gap-5 items-start ">
            <PiSuitcaseLight className="text-primary mt-2 text-xl" />
            <div className="space-y-3">
              <p className="font-orbitron text-sm md:text-xl uppercase tracking-wide text-primary text-shadow-sm">
                Open to Frontend Developer / SDE 1 opportunities
              </p>
              <p className="flex items-center text-muted gap-2 md:text-[15px] text-sm">
                <FaGreaterThan className="text-primary text-xs" />
                Available for Frontend Developer full-time oppurtunity
              </p>
              <p className="flex gap-2 items-center text-xs sm:text-sm ">
                <span className="text-accent">$</span>
                Let's build something impactfull.
                <Caret />
              </p>
            </div>
          </div>
        </motion.div>

        <ContactLinks />
      </Container>
    </SectionContainer>
  );
}
export default Contact;
