import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding-top: 20px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
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
  color: #000;
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
`;

export const SectionTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const SectionSubtitle = styled.p`
  font-size: 16px;
  color: #868c9a;
  margin-bottom: 20px;
  text-align: center;
`;

export const FormGroup = styled.div`
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #fff;
  margin-bottom: 20px;
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const FormSubtitle = styled.p`
  color: #868c9a;
  margin-bottom: 20px;
`;

export const ContactUsSection = styled.div`
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  padding-top: 10px;
  background: #fff;
  margin-bottom: 20px;

  h3 {
    font-size: 24px; /* Adjust this value for a larger font size */
    font-weight: bold; /* Optional: to make it stand out more */
    margin-bottom: 10px; /* Add spacing below the title */
  }

  p {
    color: #868c9a;
  }
`;

export const ContactViaButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  background: rgb(255, 255, 255);
  color: #668d12;
  border: 1px solid #668d12;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
`;

export const ContactViaImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  padding-bottom: 1.5px;
`;

export const StoreDetails = styled.div`
  margin-top: 20px;
  max-width: 440px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 30px;
  padding-bottom: 10px;
`;

export const StoreTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const StoreSubtitle = styled.p`
  color: #868c9a;
`;

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
