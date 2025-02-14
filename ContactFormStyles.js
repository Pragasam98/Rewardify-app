import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding-top: 20px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 10px;
  }
`;

export const BrandLogo = styled.img`
  height: 20px;
  width: auto;
  object-fit: contain;
  margin-left: 90px;
  @media (max-width: 768px) {
    margin-left: 20px;
    height: 16px;
  }
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const ContactBanner = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const BackLink = styled.p`
  position: absolute;
  top: 30px;
  left: 110px;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  @media (max-width: 768px) {
    left: 10px;
    top: 20px;
    font-size: 12px;
  }
`;

export const FormSection = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const FormSubtitle = styled.p`
  color: #666;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

export const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background: #fff;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 15px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 95%; /* Reduced width */
    padding: 8px;
  }
`;

// Submit Button Styles
export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(to right, #668d12, #99cc33);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(to right, #5a7f0f, #88b72b);
  }

  &:disabled {
    background-color: #b0b0b0;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`;

// Get Started Button Styles
export const GetStartedButton = styled.button`
  width: 90%;
  padding: 10px 20px;
  background: linear-gradient(to right, #668d12, #99cc33);
  margin-bottom: 10px;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(to right, #5a7f0f, #88b72b);
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 12px;
    padding: 8px 15px;
  }
`;

export const StoreDetails = styled.div`
  margin-top: 20px;
  max-width: 440px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
  }
`;

export const StoreTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StoreSubtitle = styled.p`
  color: #666;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
  min-height: 1.2em;
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Popup = styled.div`
  position: relative;
  background: white;
  padding: 30px 20px 20px;
  border-radius: 12px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 80%; /* Reduce the width */
    padding: 20px 15px; /* Adjust padding for smaller screen */
  }
`;

export const PopupIconContainer = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: #e0e9c2;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const PopupTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 10px;
`;

export const PopupSubtitle = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 20px;
`;

export const PopupButton = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(to right, #668d12, #99cc33);
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #5a7f0f, #88b72b);
  }

  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 14px;
  }
`;
