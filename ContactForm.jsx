import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ContactFormStyles";
import contactbanner from "./images/contactbanner.png";
import brandlogo from "./images/brandlogo.png";
import handshakeIcon from "./images/handshake-icon.svg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    shopName: "",
    location: "",
    phoneNumber: "",
  });

  const [currentErrorField, setCurrentErrorField] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === currentErrorField) {
      setCurrentErrorField("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.ownerName.trim()) {
      setCurrentErrorField("ownerName");
      return;
    }
    if (!formData.shopName.trim()) {
      setCurrentErrorField("shopName");
      return;
    }
    if (!formData.location.trim()) {
      setCurrentErrorField("location");
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setCurrentErrorField("phoneNumber");
      return;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setCurrentErrorField("phoneNumber");
      return;
    }

    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    navigate("/received-contact");
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const getStarted = () => {
    setPopupVisible(false);
    navigate("/store-information");
  };

  return (
    <S.Container>
      <S.Header>
        <S.BrandLogo src={brandlogo} alt="Rewardify Logo" />
      </S.Header>
      <S.BannerContainer>
        <S.ContactBanner src={contactbanner} alt="Contact" />
        <S.BackLink onClick={handleBackClick}>← Back</S.BackLink>
      </S.BannerContainer>
      <S.FormSection>
        <S.FormTitle>Contact Form</S.FormTitle>
        <S.FormSubtitle>
          Fill the contact form, One of our <br /> executives will reach out to you
          shortly.
        </S.FormSubtitle>
        <S.Form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label>Owner Name</S.Label>
            <S.Input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
              placeholder="Enter Your Full Name"
            />
            {currentErrorField === "ownerName" && (
              <S.ErrorMessage>Owner Name is required.</S.ErrorMessage>
            )}
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>Shop Name</S.Label>
            <S.Input
              type="text"
              name="shopName"
              value={formData.shopName}
              onChange={handleInputChange}
              placeholder="Enter the Shop Name"
            />
            {currentErrorField === "shopName" && (
              <S.ErrorMessage>Shop Name is required.</S.ErrorMessage>
            )}
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>Location</S.Label>
            <S.Input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter your Location (e.g., Indiranagar, Bangalore)"
            />
            {currentErrorField === "location" && (
              <S.ErrorMessage>Location is required.</S.ErrorMessage>
            )}
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>Phone Number</S.Label>
            <S.Input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your Phone Number"
            />
            {currentErrorField === "phoneNumber" && (
              <S.ErrorMessage>
                {formData.phoneNumber
                  ? "Phone Number must be 10 digits."
                  : "Phone Number is required."}
              </S.ErrorMessage>
            )}
          </S.FormGroup>
          <S.SubmitButton type="submit">Submit</S.SubmitButton>
        </S.Form>
      </S.FormSection>
      <S.StoreDetails>
        <S.StoreTitle>Enter Store Details</S.StoreTitle>
        <S.StoreSubtitle>
          Enter details manually to get started into REWARDIFY
        </S.StoreSubtitle>
        <S.GetStartedButton onClick={getStarted}>Get Started →</S.GetStartedButton>
      </S.StoreDetails>
      {isPopupVisible && (
        <S.PopupOverlay>
          <S.Popup>
            <S.PopupIconContainer>
              <S.PopupIcon src={handshakeIcon} alt="Handshake Icon" />
            </S.PopupIconContainer>
            <S.PopupTitle>
              Thanks For Submitting <br /> the Contact Form
            </S.PopupTitle>
            <S.PopupSubtitle>We will get back to you shortly</S.PopupSubtitle>
            <S.PopupButton onClick={closePopup}>Continue</S.PopupButton>
          </S.Popup>
        </S.PopupOverlay>
      )}
    </S.Container>
  );
};

export default ContactForm;
