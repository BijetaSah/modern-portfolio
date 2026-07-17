import { LuUserRound } from "react-icons/lu";
import SectionContainer from "../../ui/SectionContainer";
import Container from "../../ui/Container";
import LeftContianer from "./LeftContianer";
import RightContainer from "./RightContainer";
import SubHeading from "../../ui/SubHeading";

function About() {
  return (
    <SectionContainer sectionId={"about"}>
      <Container>
        <SubHeading>
          <span className="text-primary text-[16px]">
            {" "}
            <LuUserRound />
          </span>
          <span>
            about<span className="text-primary ">_</span>me
          </span>
        </SubHeading>

        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-16 mt-10 gap-y-10">
          <LeftContianer />
          <RightContainer />
        </div>
      </Container>
    </SectionContainer>
  );
}
export default About;
