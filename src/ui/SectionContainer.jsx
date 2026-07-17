import { motion } from "motion/react";

function SectionContainer({ sectionId, children }) {
  return (
    <motion.section
      className="py-10 md:py-20 lg:py-32 relative"
      id={sectionId}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}

export default SectionContainer;
