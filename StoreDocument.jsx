import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QrReader from "react-qr-scanner"; // QR scanner library import
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
  StepTopic,
  Divider,
  StoreForm,
  EnterPan,
  StyledInput,
  BankDetails,
  ScanQr,
  ScanQrInfo,
  ScanQrWrapper,
  ScanQrContainer,
  ScanQrLabel,
  ScanQrText,
  ScanQrTextSpan,
  ScanQrTextP,
  ScanQrIcon,
  ContinueButton,
  ModalBackground,
  ModalContainer,
  CloseButton,
  CameraArea,
  CheckboxLabel,
} from "./StoreDocumentStyles"; // Ensure styles are correctly imported

import brandlogo from "./images/brandlogo.png";
import ScanQrCode from "./assets/icons/scanqrcode.svg";

const StoreDocument = () => {
  const [showModal, setShowModal] = useState(false); // Manage modal visibility
  const [upiId, setUpiId] = useState(""); // Store UPI ID or error message
  const [delay] = useState(300); // QR scanner delay

  const navigate = useNavigate();

  const handleOpenModal = () => setShowModal(true); // Open modal
  const handleCloseModal = () => setShowModal(false); // Close modal

  const handleContinue = () => {
    navigate("/partner-agreement"); // Navigate to partner agreement
  };

  const handleScan = (data) => {
    if (data && data.text) {
      const qrText = data.text;

      console.log("Scanned QR Text:", qrText);

      if (qrText.startsWith("HTTP")) {
        console.log("Redirect URL detected. Please process further:", qrText);
        setUpiId("Redirect URL detected");
        setShowModal(false);
        return;
      }

      if (!qrText.includes("pa=")) {
        console.error("Invalid QR Code");
        setUpiId("Invalid QR Code");
        return;
      }

      try {
        const urlParams = new URLSearchParams(qrText.split("?")[1]);
        const extractedUpiId = urlParams.get("pa") || "No UPI ID found";

        console.log("UPI ID:", extractedUpiId);
        setUpiId(extractedUpiId);
        setShowModal(false);
      } catch (err) {
        console.error("Error parsing QR Code:", err);
        setUpiId("Error parsing QR Code");
      }
    } else {
      console.warn("No valid QR data detected.");
      setUpiId("No valid QR data detected");
    }
  };

  const handleError = (err) => {
    console.error("QR Reader Error:", err);
    setUpiId("Error reading QR Code");
    setShowModal(false);
  };

  const previewStyle = {
    height: 240,
    width: 320,
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
                <StepTopic>
                  <strong>Agreement</strong>
                </StepTopic>
                <StepDetail>
                  <div>REWARDIFY Partner Agreement</div>
                </StepDetail>
              </Step>
            </StepsSidebar>
            <Divider />
            <StoreForm>
              <h2>Store Document</h2>
              <EnterPan>
                <h3>Enter PAN & GSTIN details</h3>
                <StyledInput type="text" placeholder="Store/Owner PAN" />
                <StyledInput type="text" placeholder="GSTIN" />
                <CheckboxLabel>
                  <input type="checkbox" /> I don’t have a GSTIN
                </CheckboxLabel>
              </EnterPan>
              <BankDetails>
                <h3>Bank Details</h3>
                <StyledInput type="text" placeholder="Bank Name" />
                <StyledInput type="text" placeholder="Bank Account Number" />
                <StyledInput type="text" placeholder="Bank IFSC Code" />
              </BankDetails>
              <ScanQr>
                <h3>Scan Store QR Code</h3>
                <ScanQrInfo>
                  Scan the store’s QR Code. It will help the customer to make
                  payments easy and faster.
                </ScanQrInfo>
                <ScanQrWrapper>
                  <ScanQrContainer>
                    <ScanQrLabel onClick={handleOpenModal}>
                      <ScanQrIcon>
                        <img src={ScanQrCode} alt="Upload Icon" />
                      </ScanQrIcon>
                    </ScanQrLabel>
                  </ScanQrContainer>
                  <ScanQrText>
                    <ScanQrTextSpan>Scan QR Code</ScanQrTextSpan>
                    <ScanQrTextP>
                      Take a picture from the camera to upload the QR Code
                    </ScanQrTextP>
                  </ScanQrText>
                </ScanQrWrapper>
              </ScanQr>
              <ContinueButton type="button" onClick={handleContinue}>
                Continue
              </ContinueButton>
            </StoreForm>
          </MainContent>
        </FormMain>
      </StoreDocumentContainer>

      {showModal && (
        <ModalBackground>
          <ModalContainer>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <CameraArea>
              <QrReader
                delay={delay}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
              />
              {upiId && (
                <p style={{ marginTop: "20px" }}>
                  <strong>Scan Result:</strong> {upiId}
                </p>
              )}
            </CameraArea>
          </ModalContainer>
        </ModalBackground>
      )}
    </StoreDocumentPage>
  );
};

export default StoreDocument;
