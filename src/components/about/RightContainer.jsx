import { aboutStats } from "../../constants/about";

function RightContainer() {
  return (
    <>
      {/* stats */}
      <div className="lg:col-span-2">
        <div className="space-y-10">
          {aboutStats.map((item) => (
            <div className="shape-cutout border border-border bg-background-card p-5 hover:border-primary transition-colors duration-150">
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
      </div>
    </>
  );
}
export default RightContainer;
