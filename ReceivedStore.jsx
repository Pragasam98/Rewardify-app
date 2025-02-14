import React from "react";
import brandlogo from "./images/brandlogo.png";
import callIcon from "./assets/icons/call.svg"; // Replace with your call icon path
import whatsappIcon from "./assets/icons/whatsapp_line.svg"; // Replace with your WhatsApp icon path
import {
  ReceivedStorePage,
  StoreHeader,
  BrandLogo,
  FormSection,
  SectionTitle,
  SectionSubtitle,
  ContactUsSection,
  ContactViaButton,
  ContactViaImage,
  CenteredImage, // Import the styled component for the centered image
} from "./ReceivedStoreStyles";

import ReceivedImage from  "./images/receivedimage.png"; // Replace with your image path

const ReceivedStore = () => {
  return (
    <ReceivedStorePage>
      {/* Header */}
      <StoreHeader>
        <BrandLogo src={brandlogo} alt="Rewardify Logo" />
      </StoreHeader>

      {/* Form Section */}
      <FormSection>
        {/* Centered Image */}
        <CenteredImage src={ReceivedImage} alt="Sample Image" />

        {/* Title and Subtitle */}
        <SectionTitle>Thanks for the details</SectionTitle>
        <SectionSubtitle>
          We're working to launch your store live in the market <br /> very
          soon. Once we have completed our verification, we will send <br /> you
          the credentials.
        </SectionSubtitle>

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
      </FormSection>
    </ReceivedStorePage>
  );
};

export default ReceivedStore;
