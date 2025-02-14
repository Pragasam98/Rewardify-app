import React from "react";
import { useNavigate } from "react-router-dom";
import brandlogo from "./images/brandlogo.png";
import contactbanner from "./images/contactbanner.png";
import callIcon from "./assets/icons/call.svg"; // Replace with your call icon path
import whatsappIcon from "./assets/icons/whatsapp_line.svg"; // Replace with your WhatsApp icon path
import {
  Container,
  Header,
  BrandLogo,
  BannerContainer,
  ContactBanner,
  BackLink,
  FormSection,
  SectionTitle,
  SectionSubtitle,
  FormGroup,
  FormTitle,
  FormSubtitle,
  ContactUsSection,
  ContactViaButton,
  ContactViaImage,
  StoreDetails,
  StoreTitle,
  StoreSubtitle,
  GetStartedButton,
} from "./ReceivedContactStyles";

const ReceivedContact = () => {
  const navigate = useNavigate();
  

  const handleBackClick = () => {
    navigate("/contact");
  };

  const getStarted = () => {
    navigate("/store-information");
  };

  return (
    <Container>
      {/* Header */}
      <Header>
        <BrandLogo src={brandlogo} alt="Rewardify Logo" />
      </Header>

      {/* Banner */}
      <BannerContainer>
        <ContactBanner src={contactbanner} alt="Contact Banner" />
        <BackLink onClick={handleBackClick}>← Back</BackLink>
      </BannerContainer>

      {/* Form Section */}
      <FormSection>
        {/* Title and Subtitle */}
        <SectionTitle>Contact Form</SectionTitle>
        <SectionSubtitle>
          Fill the contact form, one of our <br /> executives will reach out to you
          shortly.
        </SectionSubtitle>

        {/* Form Group */}
        <FormGroup>
          <FormTitle>We have Received Your <br />Contact Form</FormTitle>
          <FormSubtitle>
            We will get back to you shortly. If you have any queries, contact us
            below.
          </FormSubtitle>
        </FormGroup>

        {/* Contact Us Section */}
        <ContactUsSection>
          <h3>Contact Us</h3>
          <p>For any inquiries, contact us</p>
          <ContactViaButton>
            <ContactViaImage src={callIcon} alt="Call Icon" /> Contact via Call
          </ContactViaButton>
          <ContactViaButton>
            <ContactViaImage src={whatsappIcon} alt="WhatsApp Icon" /> Contact
            via WhatsApp
          </ContactViaButton>
        </ContactUsSection>

        {/* Store Details Section */}
        <StoreDetails>
          <StoreTitle>Enter Store Details</StoreTitle>
          <StoreSubtitle>
            Enter details manually to <br /> get started into REWARDIFY
          </StoreSubtitle>
          <GetStartedButton onClick={getStarted}>Get Started →</GetStartedButton>
        </StoreDetails>
      </FormSection>
    </Container>
  );
};

export default ReceivedContact;
