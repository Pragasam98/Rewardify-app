import React, { useState } from "react";
import styled from "styled-components";

// Import your arrow icons
import ArrowDown from "./assets/icons/arrow-down.svg"; // Path to your down arrow icon
import ArrowUp from "./assets/icons/up-down.svg"; // Path to your up arrow icon

const AboutContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
`;

const Header = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 20px;
    color: #030401;
  }

  p {
    font-size: 14px;
    color: #868c9a;
    margin-top: -10px;
  }
`;

const Section = styled.div``;

const Accordion = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 10px;

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    cursor: pointer;

    h4 {
      font-size: 16px;
      color: #030401;
      margin: 0;
    }

    img {
      width: 20px; // Adjust size as needed
      height: 20px; // Adjust size as needed
    }
  }

  .accordion-content {
    padding: 10px;
    font-size: 14px;
    color: #868c9a;
    display: none;

    &.active {
      display: block;
    }
  }
`;

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AboutContainer>
      <Header>
        <h3>About REWARDIFY</h3>
        <p>Here you can view our T&C, Privacy Policy, etc.</p>
      </Header>

      <Section>
        {[
          { title: "About Us", content: "Lorem ipsum dolor sit amet consectetur. Nulla duis ornare arcu enim. Placerat donec ipsum in vitae ante at orci. Lorem ipsum semper aliquam mauris ut eu id pellentesque libero. Ut massa ut amet et arcu non bibendum velit odio. Sed eu facilisi facilisis a suspendisse. Eu in amet gravida placerat sed volutpat. Massa elementum risus elit bibendum a amet hac. Integer nunc dignissim ultrices quam venenatis. At etiam sem accumsan et elit. Velit mus felis quam donec faucibus nec nibh auctor dictum. Enim consequat a quisque facilisis. Scelerisque turpis risus purus nisl ultricies faucibus odio tempus. Pellentesque amet enim enim volutpat vulputate. Nibh egestas in facilisi est volutpat magna porta. Semper facilisis nunc tortor scelerisque. Sem augue purus augue est tempor. Nunc tortor faucibus ullamcorper purus aliquam lectus. Mi integer a vulputate diam commodo cursus arcu. Lectus dignissim senectus sem mollis augue. arcu. Lectus dignissim senectus sem mollis augue. arcu. Lectus dignissim senectus sem mollis augue. rcu. Lectus dignissim senectus sem mollis augue. vulputate. Nibh egestas in vulputate. Nibh egestas in vulputate. Nibh egestas in vulputate. Nibh egestas in ." },
          { title: "Terms & Condition", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
          { title: "Privacy Policy", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
        ].map((item, index) => (
          <Accordion key={index}>
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <h4>{item.title}</h4>
              <img
                src={activeIndex === index ? ArrowUp : ArrowDown} // Toggle between up and down arrows
                alt={activeIndex === index ? "Up Arrow" : "Down Arrow"}
              />
            </div>
            <div className={`accordion-content ${activeIndex === index ? "active" : ""}`}>
              {item.content}
            </div>
          </Accordion>
        ))}
      </Section>
    </AboutContainer>
  );
};

export default About;