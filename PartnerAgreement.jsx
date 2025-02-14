import React from "react";
import { useNavigate } from "react-router-dom";
import {
  StoreDocumentPage,
  StoreHeader,
  BrandLogo,
  StoreDocumentContainer,
  FormMain,
  BackButton,
  HeadingSection,
  HeadingTitle,
  HeadingText,
  MainContent,
  StepsSidebar,
  Step,
  StepText1,
  StepText,
  StepDetails,
  StepDetail,
  StepTopics,
  Divider,
  StoreForm,
  EnterPan,
  ContinueButton,
  CheckboxLabel,
  
} from "./PartnerAgreementStyles"; // Update with your actual styled components import

import brandlogo from "./images/brandlogo.png";



const PartnerAgreement = () => {
 
    const navigate = useNavigate();

    const handleContinue = () => {
      navigate("/received-store"); // Navigate to the Store Document page
    };

  return (
    <StoreDocumentPage>
      <StoreHeader>
        <BrandLogo src={brandlogo} alt="Rewardify Logo" />
      </StoreHeader>
      <StoreDocumentContainer>
        <FormMain>
          <BackButton>&lt; Back</BackButton>
          <HeadingSection>
            <HeadingTitle>
              Start your Onboarding <br /> Process with Us
            </HeadingTitle>
            <HeadingText>
              Kindly fill all the information correctly to <br />
              get onboarded quickly with REWARDIFY
            </HeadingText>
          </HeadingSection>

          <MainContent>
            <StepsSidebar>
              <Step>
                <StepText1>
                  <span>Step 1</span>
                </StepText1>
                <StepTopics>
                  <strong>Store Information</strong>
                </StepTopics>
                <StepDetails>
                  <div>Owner name, Store location, Store address</div>
                </StepDetails>
              </Step>
              <Step>
                <StepText1>
                  <span>Step 2</span>
                </StepText1>
                <StepTopics>
                  <strong>Store Document</strong>
                </StepTopics>
                <StepDetails>
                  <div>GSTIN Number, PAN Number, Bank details</div>
                </StepDetails>
              </Step>
              <Step>
                <StepText>
                  <span>Step 3</span>
                </StepText>
                <StepTopics>
                  <strong>Agreement</strong>
                </StepTopics>
                <StepDetail>
                  <div>REWARDIFY Partner Agreement</div>
                </StepDetail>
              </Step>
            </StepsSidebar>
            <Divider />
            <StoreForm>
              <h2>Partner Agreement</h2>
              <p1>Read the document below and agree to the terms <br /> to proceed.</p1>
              <EnterPan>
                <p2>Lorem ipsum dolor sit amet consectetur. Porta eget congue eu condimentum diam. Sed nulla viverra phasellus non enim commodo sed ullamcorper. Amet risus pretium eleifend eget eu vitae. Id cursus velit erat non porttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui sodales neque. Facilisis nisl facilisis erat id convallis arcu. Accumsan adipiscing scelerisque egestas dignissim quam accumsan. Pretium odio sit sit pulvinar. Ac elit ut tincidunt ipsum gravida rhoncus lectus. Id egestas blandit mauris arcu est tellus in sit nisl. Eu consectetur vitae odio ultrices netus pulvinar ultrices congue risus. orttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui sodales neque. Facilisis nisl facilisis erat id convallis arcu. Accumsan adipiscing scelerisque egestas dignissim quam accumsan. Pretiu orttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui. Id egestas blandit mauris arcu est tellus in sit nisl. Eu consectetur vitae odio ultrices netus pulvinar ultrices congue risus. orttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui sodales neque. Facilisis nisl facilisis erat id convallis arcu. Accumsan adipiscing scelerisque egestas dignissim quam accumsan. Pretiu orttitor. Arcu feugiat proin purus platea. Adipiscing donec risus molestie vitae malesuada. Elit in massa tempor vivamus nisi. Vel aliquet proin et lobortis morbi dui. lobortis morbi dui sodales neque. Facilisis nisl facilisis erat id convallis arcu. Accumsan adipiscing scelerisque egestas dignissim quam accumsan. Accumsan adipiscing scelerisque egestas dignissim quam accumsan.</p2>
                
              </EnterPan>
<CheckboxLabel>
                                          <input type="checkbox" /> I have read all the terms & conditions and agree to them.
                                        </CheckboxLabel>
                                   
              
              <ContinueButton className="continue" type="button" onClick={handleContinue}>
                Continue
              </ContinueButton>
            </StoreForm>
          </MainContent>
        </FormMain>
      </StoreDocumentContainer>

      
    </StoreDocumentPage>
  );
};

export default PartnerAgreement;
