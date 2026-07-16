import { FaGreaterThan } from "react-icons/fa6";
import { aboutHighlights } from "../../constants/about";
import Dots from "../../ui/Dots";

function LeftContianer() {
  return (
    <>
      <div className="bg-background border border-border relative shape-cutout lg:col-span-3">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <Dots />
          <span className="ml-3 font-label text-xs uppercase tracking-[0.2em] text-muted">
            about
          </span>
        </div>
        <div className="p-6 font-mono text-[16px] leading-relaxed space-y-4">
          {aboutHighlights.map((item) => (
            <span className="flex gap-2 items-start text-muted">
              <span className="text-primary text-xs mt-2">
                <FaGreaterThan />
              </span>
              {item.description}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
export default LeftContianer;
