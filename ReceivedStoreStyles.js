import styled from "styled-components";

export const Body = styled.body`
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: "Arial", sans-serif;
  background-color: #fff;
`;

export const ReceivedStorePage = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StoreHeader = styled.header`
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BrandLogo = styled.img`
  height: 20px;
  width: auto;
  object-fit: contain;
  margin-left: 90px;
`;

export const FormSection = styled.div`
  padding: 20px;
`;

export const CenteredImage = styled.img`
  display: block;
  margin: 0 auto; /* Center horizontally */
  max-width: 100%; /* Ensure the image scales within the container */
  max-height: 200px; /* Adjust the maximum height as needed */
  margin-bottom: 20px; /* Add spacing below the image */
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
  justify-items: center;
  padding: 20px;
  padding-top: 10px;
  background: #fff;
  margin-bottom: 20px;

  h3 {
    font-size: 24px; /* Adjust this value for a larger font size */
    font-weight: bold; /* Optional: to make it stand out more */
    margin-bottom: 5px; /* Add spacing below the title */
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
