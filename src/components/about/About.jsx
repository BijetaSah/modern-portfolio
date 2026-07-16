import { LuUserRound } from "react-icons/lu";
import SectionContainer from "../../ui/SectionContainer";
import Container from "../../ui/Container";
import LeftContianer from "./LeftContianer";
import RightContainer from "./RightContainer";

function About() {
  return (
    <SectionContainer sectionId={"#about"}>
      <Container>
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold uppercase tracking-wide text-foreground flex items-center gap-2">
          <span className="text-primary text-[16px]">
            {" "}
            <LuUserRound />
          </span>
          <span>
            about<span className="text-primary ">_</span>me
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-16 mt-10">
          <LeftContianer />
          <RightContainer />
        </div>
      </Container>
    </SectionContainer>
  );
}
export default About;
