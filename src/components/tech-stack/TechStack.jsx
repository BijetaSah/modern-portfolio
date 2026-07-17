import { FiCpu } from "react-icons/fi";

import SubHeading from "../../ui/SubHeading";
import SectionContainer from "../../ui/SectionContainer";
import Container from "../../ui/Container";
import Skills from "./Skills";

function TechStack() {
  return (
    <SectionContainer sectionId={"skills"}>
      <Container>
        <SubHeading>
          <span className="text-primary text-[16px]">
            {" "}
            <FiCpu />
          </span>
          <span>
            Tech<span className="text-primary ">_</span>stack
          </span>
        </SubHeading>

        <Skills />
      </Container>
    </SectionContainer>
  );
}
export default TechStack;
