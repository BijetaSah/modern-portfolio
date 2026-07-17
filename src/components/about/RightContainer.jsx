import { aboutStats } from "../../constants/about";
import { motion } from "motion/react";
function RightContainer() {
  return (
    <>
      {/* stats */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="lg:col-span-2"
      >
        <div className="space-y-5">
          {aboutStats.map((item) => (
            <div
              className="shape-cutout border border-border bg-background-card p-5 hover:border-primary transition-colors duration-150"
              key={item.id}
            >
              <span className="font-label text-sm uppercase tracking-[0.2em] text-muted mb-1">
                {item.title}
              </span>
              <p className="font-orbitron text-xl font-bold text-primary">
                {item.value}
              </p>
              <p className="font-mono text-sm text-muted mt-1 tracking-wider">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
export default RightContainer;
