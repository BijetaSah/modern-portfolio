import { PiSuitcase } from "react-icons/pi";

import { motion } from "motion/react";

import Container from "../../ui/Container";
import SectionContainer from "../../ui/SectionContainer";
import SubHeading from "../../ui/SubHeading";
import { experiences } from "../../constants/experience";
import ExperienceItem from "./ExperienceItem";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Experience() {
  return (
    <SectionContainer sectionId={"experience"}>
      <Container>
        <SubHeading>
          <span className="text-primary text-[16px]">
            {" "}
            <PiSuitcase />
          </span>
          <span>
            work<span className="text-primary ">_</span>exp
          </span>
        </SubHeading>
        <div className="pl-10 border-l border-border">
          <motion.div
            className="grid grid-cols-1 mt-10 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {experiences.map((experience, i) => (
              <ExperienceItem
                item={experience}
                key={i}
                variant={itemVariants}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </SectionContainer>
  );
}
export default Experience;
