import styled from "styled-components";

// General Styling
export const Body = styled.body`
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: "Arial", sans-serif;
  background-color: #fff;
`;

export const StoreDocumentPage = styled.div`
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

export const StoreDocumentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 63%;
  margin-top: 20px;
  gap: 20px;
`;

export const FormMain = styled.section`
  width: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 30px;
`;

export const BackButton = styled.span`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  .arrow-icon {
    font-size: 18px;
  }
`;

export const HeadingSection = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const HeadingTitle = styled.h1`
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 10px;
  word-break: break-word;
  max-width: 600px;
  margin: 0 auto;
`;

export const HeadingText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 600px;
  word-break: break-word;
`;

// Main Content Layout
export const MainContent = styled.div`
  display: flex;
  align-items: stretch;
  gap: 20px; /* Space between components */
  width: 100%;
  position: relative;
`;

// Sidebar
export const StepsSidebar = styled.div`
  width: 40%;
  margin-top: 10px;
  padding: 20px;
`;

export const Step = styled.div`
  position: relative;
  margin-bottom: 20px;

  &:nth-of-type(1)::after,
  &:nth-of-type(2)::after {
    content: "";
    position: absolute;
    left: 58px; /* Align with the text */
    right: 0;
    bottom: -10px; /* Position below the step */
    height: 1px; /* Thickness of the horizontal line */
    background-color: #e0e0e0; /* Color of the line */
    width: 231px; /* Line length */
  }
`;

export const StepText = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  padding-left: 50px;
  position: relative;
  margin-left: 10px;
  font-size: 12px;
  padding-bottom: 5px;
  color: #bebebe;

  &::before {
    content: "";
    position: absolute;
    left: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #bebebe;
    border: 2px solid #fff;
  }
`;

export const StepText1 = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  padding-left: 50px;
  position: relative;
  margin-left: 10px;
  font-size: 12px;
  padding-bottom: 5px;

  &::before {
    content: "";
    position: absolute;
    left: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #bebebe;
    border: 2px solid #fff;
  }

  &:nth-of-type(1)::after {
    content: "";
    position: absolute;
    left: 16px; /* Align with the center of the dot */
    top: 15px; /* Start right below the dot */
    width: 2px;
    height: 80px; /* Length of the dotted line */
    border-left: 2px dotted #bebebe;
  }

  &:nth-of-type(1)::before {
    background-color: #28a745; /* Green for Step 1 */
  }
`;

export const StepDetails = styled.div`
  div {
    font-size: 12px;
    color: #868c9a;
    padding-top: 3px;
    margin-left: 58px;
  }
`;

export const StepTopic = styled.div`
  margin: 0;
  padding-left: 58px;
  color: #bebebe;
`;

export const StepTopics = styled.div`
  margin: 0;
  padding-left: 58px;
`;

export const StepDetail = styled.div`
  font-size: 12px;
  color: #bebebe;
  padding-top: 3px;
  margin-left: 58px;
`;

export const Divider = styled.div`
  width: 1px; /* Thickness of the vertical line */
  background-color: #e0e0e0; /* Line color */
  height: auto; /* Stretch to match content */
  margin: 0 20px; /* Space around the line */
  margin-top: 20px;
`;

export const StoreForm = styled.form`
  flex: 1;
  padding-left: 30px;
`;

export const EnterPan = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  background-color: #fff;
`;

export const StyledInput = styled.input`
  width: 100%; /* Full width */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  padding-top:-10px;
  padding-bottom:10px;
  margin-bottom:10px;
  box-sizing: border-box; /* Ensures padding doesn't overflow */
}

  &:focus {
    border-color: #000; /* Change border color on focus */
  }

  &::placeholder {
    color: #aaa; /* Placeholder text color */
  }
`;

export const InputContainer = styled.div`
  position: relative; /* Needed for absolute positioning of the button */
  width: 111%;
`;

export const VerifyButton = styled.button`
  position: absolute;
  right: 15px;
  top: 40%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: #ea3c3c;
  font-size: 14px;
  cursor: pointer;
  padding: 0;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const OtpBoxWrapper = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

export const OtpInput = styled.input`
  width: 50px;
  height: 40px;
  margin: 5px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
`;

// Wrapper for the entire WhatsApp section
export const GSTOptionsWrapper = styled.div`
  margin-top: 20px;
`;

// Container for the options
export const WhatsAppOptions = styled.div`
  margin-top: -10px;
`;

// Styling for the WhatsApp info text
export const WhatsAppInfo = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
  margin-bottom: 10px;
  line-height: 1.5;

  .whatsapp-number {
    font-weight: bold;
    color: black;
  }
`;

// Styling for the checkbox labels
export const CheckboxLabel = styled.label`
  font-size: 12px; /* Reduce the font size */
  display: block;
  margin-bottom: 10px;
  color: #868c9a; /* Set text color */

  input {
    accent-color: #668d12; /* Change the checkbox color to green when checked */
    transform: scale(1.2); /* Slightly increase the size of the checkbox */
    margin-right: 10px; /* Add space between checkbox and label text */
  }
`;

export const BankDetails = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  background-color: #fff;
`;

export const AddLocationContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const ArrowIcon = styled.span`
  font-size: 16px;
  font-weight: bolder;
  margin-left: 110px;
`;

export const AddLocationText = styled.span`
  font-size: 14px;
  color: #030401;
`;

export const WorkingDays = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  position: relative;
`;

export const ColumnLabel = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;

  input {
    accent-color: #668d12; /* Change the checkbox color to green when checked */
    transform: scale(1.2); /* Slightly increase the size of the checkbox */
    margin-right: 10px; /* Add space between checkbox and label text */
  }
`;

export const WorkingTime = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  margin-top: 20px;
`;

export const ScanQr = styled.div`
  padding: 4px 20px;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
  max-width: 500px;
  margin: auto;
  text-align: left;
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  padding-bottom: 20px;
  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const ScanQrInfo = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;
`;

export const ScanQrWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ScanQrContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  background-color: #fff;
  margin-right: 20px;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
`;

export const ScanQrLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #fff;
`;

export const ScanQrIcon = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
`;

export const ScanQrText = styled.div`
  font-size: 14px;
  color: #555;
  text-align: left;
  flex-grow: 1;
`;

export const ScanQrTextSpan = styled.span`
  font-weight: 600;
  color: #868c9a;
  display: block;
  margin-bottom: 5px;
`;

export const ScanQrTextP = styled.p`
  margin: 0;
  font-size: 12px;
  color: #bebebe;
`;

export const InputFile = styled.input`
  display: none;
`;

export const ContinueButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &.continue {
    background: #e1e1e1;
    color: #868c9a;
  }
`;

export const MobileInput = styled.div`
  display: flex;
  align-items: center;
`;

export const VerifyButtonMobile = styled.button`
  margin-left: 10px;
`;

export const DaysCheckbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TimeInputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: #fff;
  width: 90%;
  max-width: 400px;
  border-radius: 20px;
  text-align: center;
  padding: 20px;
  position: relative;
`;

export const ScanQrUpiIcon = styled.div`
  width: 17%;
  margin-top: -60px;
  margin-left: 155px;
  background-color: #e0e9c2;
  padding: 13px;
  border-radius: 100%;
  margin-bottom: -33px;
`;

export const CameraIconWrapper = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  background: #d9fdd3;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CameraIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const Title = styled.h2`
  margin-top: 50px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const CameraArea = styled.div`
  margin-top: 20px;
  border: 2px solid #000;
  border-radius: 10px;
  padding: 10px;
  width: 90%;
  max-width: 300px;
  height: 300px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

// Responsive Design
export const ResponsiveStoreDocumentContainer = styled(StoreDocumentContainer)`
  flex-direction: column;
`;

export const ResponsiveStepsSidebar = styled(StepsSidebar)`
  width: 100%;
`;

export const ResponsiveDivider = styled(Divider)`
  display: none;
`;

export const ResponsiveFormMain = styled(FormMain)`
  width: 100%;
  padding-left: 0;
`;

export const ResponsiveMainContent = styled(MainContent)`
  flex-direction: column;
`;
