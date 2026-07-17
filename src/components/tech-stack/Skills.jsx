import { skills } from "../../constants/skills";
import { motion } from "motion/react";

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

function Skills() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 md:gap-10 mt-14"
    >
      {skills.map((item, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className={`shape-cutout bg-background-card border border-border p-6
             hover:border-${item.color} transition-all duration-150`}
        >
          <h3 className="font-label text-xs uppercase tracking-[0.2em] text-muted mb-4">
            // {item.title}
          </h3>
          <div className="flex flex-wrap gap-5 items-center">
            {item.skills.map((skill, i) => (
              <span
                key={i}
                className={`shape-cutout inline-flex items-center gap-1.5 border-2 border-${item.color} bg-primary/10 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-${item.color} font-semibold`}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
export default Skills;
