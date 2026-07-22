import { motion } from "motion/react";

function SectionContainer({ sectionId, children, style }) {
  return (
    <motion.section
      className={`py-10 md:py-20 lg:py-28 relative ${style ? style : ""}`}
      id={sectionId}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.05 }}
    >
      {children}
    </motion.section>
  );
}

export default SectionContainer;
