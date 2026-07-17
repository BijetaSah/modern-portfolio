import { PiDotOutlineFill, PiGreaterThan } from "react-icons/pi";
import { motion } from "motion/react";

function ExperienceItem({ item, variant }) {
  return (
    <motion.div
      variants={variant}
      className={`border border-border shape-cutout bg-background-card p-6 md:p-8 hover:border-${item.color} transition-colors duration-300 shadow-neon-glow-${item.color} `}
    >
      {/* heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h3 className="font-orbitron text-xl md:text-2xl font-semibold uppercase text-foreground">
            {item.role}
          </h3>
          <p
            className={`font-mono text-sm text-${item.color}  flex gap-4 items-center mt-2`}
          >
            {item.company} <PiDotOutlineFill /> {item.location}
          </p>
        </div>
        <span className="font-label text-xs uppercase tracking-[0.2em] text-muted mt-2 md:mt-0 shape-cutout border border-border px-3 py-1 w-fit">
          {item.duration}
        </span>
      </div>

      {/* description */}
      <div className="space-y-5">
        {item.achievements.map((desc, i) => (
          <motion.div
            className="flex gap-3 font-mono text-sm text-muted items-start"
            key={i}
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span>
              <PiGreaterThan
                className={`text-${item.color} text-shadow-${item.color}`}
              />{" "}
            </span>
            <span className="flex-1">{desc}</span>
          </motion.div>
        ))}
      </div>

      {/* tech stack */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border"
      >
        {item.techStack.map((tech, i) => (
          <span
            className={` font-mono text-xs uppercase tracking-wider text-${item.color} border border-${item.color}/30 px-2 py-1`}
            key={i}
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
export default ExperienceItem;
