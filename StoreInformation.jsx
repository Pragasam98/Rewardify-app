import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  StoreInformationPage,
  StoreHeader,
  BrandLogo,
  StoreInformationContainer,
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
  OwnerInfo,
  StyledInput,
  InputContainer,
  VerifyButton,
  OtpInput,
  OtpBoxWrapper,
  ResendText,
  SubmitOtpButton,
  StoreInfo,
  AddLocationContainer,
  ArrowIcon,
  AddLocationText,
  WorkingDays,
  WorkingDaysHeader,
  SelectAll,
  DaysColumns,
  Column,
  ColumnLabel,
  WorkingTime,
  TimeInput,
  UploadImage,
  UploadInfo,
  UploadWrapper,
  UploadContainer,
  UploadLabel,
  UploadIcon,
  UploadText,
  UploadTextSpan,
  UploadTextP,
  InputFile,
  ContinueButton,
  MobileInput,
  WhatsAppOptionsWrapper,
  DottedLine,
  WhatsAppOptions,
  WhatsAppInfo,
  CheckboxLabel,
} from "./StoreInformationStyles"; // Adjusted imports

import brandlogo from "./images/brandlogo.png";
import upload from "./assets/icons/iconamoon_cloud-upload-light.svg";

const StoreInformation = () => {
    const [showOtpBox, setShowOtpBox] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false); // Track OTP verification
    const [timer, setTimer] = useState(55);
    const navigate = useNavigate();

    const handleContinue = () => {
      navigate("/store-document"); // Navigate to the Store Document page
    };
  
    // Timer Logic
    useEffect(() => {
      if (showOtpBox && timer > 0) {
        const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
        return () => clearInterval(countdown);
      }
    }, [showOtpBox, timer]);
  
    const handleVerifyClick = () => {
      setShowOtpBox(true);
      setTimer(55); // Reset timer when OTP box is displayed
    };
  
    const handleOtpSubmit = () => {
      // Add your OTP verification logic here
      const isOtpValid = true; // Replace with actual verification logic
      if (isOtpValid) {
        setIsOtpVerified(true);
        setShowOtpBox(false); // Hide OTP box after verification
      } else {
        alert("Invalid OTP. Please try again.");
      }
    };
  
    const handleResendOtp = () => {
      setTimer(55); // Reset the timer on resend
    };
    
    
  return (
    <StoreInformationPage>
      <StoreHeader>
        <BrandLogo src={brandlogo} alt="Rewardify Logo" />
      </StoreHeader>
      <StoreInformationContainer>
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
                <StepText>
                  <span>Step 2</span>
                </StepText>
                <StepTopic>
                  <strong>Store Document</strong>
                </StepTopic>
                <StepDetail>
                  <div>GSTIN Number, PAN Number, Bank details</div>
                </StepDetail>
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
              <h2>Store Information</h2>
              <OwnerInfo>
                <h3>Owner Information</h3>
                <StyledInput type="text" placeholder="Owner's Name" />
                <StyledInput type="email" placeholder="Email Address" />
                <MobileInput>
                  
                </MobileInput>
                <div>
      <MobileInput>
      <InputContainer>
                    <StyledInput
                      type="text"
                      id="mobile-number"
                      placeholder="Enter your mobile number"
                    />
                    <VerifyButton onClick={handleVerifyClick}>Verify</VerifyButton>
                  </InputContainer>
      </MobileInput>

      {showOtpBox && !isOtpVerified && (
        <OtpBoxWrapper>
          <p>Verification code has been sent to your mobile number</p>
          <div>
            <OtpInput type="text" maxLength="1" />
            <OtpInput type="text" maxLength="1" />
            <OtpInput type="text" maxLength="1" />
            <OtpInput type="text" maxLength="1" />
          </div>
          <SubmitOtpButton onClick={handleOtpSubmit}>Submit OTP</SubmitOtpButton>
          <ResendText>
            Didn’t receive OTP?{" "}
            {timer > 0 ? (
              <span>Resend in 0:{timer < 10 ? `0${timer}` : timer}</span>
            ) : (
              <span onClick={handleResendOtp}>Resend</span>
            )}
          </ResendText>
        </OtpBoxWrapper>
      )}

      {isOtpVerified && <p>OTP Verified Successfully!</p>}
    
    </div>
                <DottedLine />
                <WhatsAppOptionsWrapper>
                   <WhatsAppOptions>
                        <WhatsAppInfo>
                          By providing your <span className="whatsapp-number">Whatsapp Number</span>, you can get updates on payments, order confirmations, etc.
                        </WhatsAppInfo>
                        <CheckboxLabel>
                          <input type="checkbox" /> My WhatsApp number is the same as above
                        </CheckboxLabel>
                        <CheckboxLabel>
                          <input type="checkbox" /> I have a different WhatsApp number
                        </CheckboxLabel>
                   </WhatsAppOptions>
                </WhatsAppOptionsWrapper>
              </OwnerInfo>
              <Divider />
              <StoreInfo>
                <h3>Store Information</h3>
                <StyledInput type="text" placeholder="Store Name" />
                <StyledInput type="text" placeholder="Store Full Address" />
                <CheckboxLabel>
                          <input type="checkbox" />Same as my contact number
                        </CheckboxLabel>
                <MobileInput>
                  <InputContainer>
                    <StyledInput
                      type="text"
                      id="contact-number"
                      placeholder="Store Contact number"
                    />
                    <VerifyButton>Verify</VerifyButton>
                  </InputContainer>
                </MobileInput>
                <AddLocationContainer>
                  <AddLocationText>Add Store Location</AddLocationText>
                  <ArrowIcon>&#8594;</ArrowIcon>
                </AddLocationContainer>
              </StoreInfo>

              <WorkingDays>
                <WorkingDaysHeader>
                  <h3>Working Days</h3>
                  <SelectAll>Select All</SelectAll>
                </WorkingDaysHeader>
                <DaysColumns>
                  <Column>
                    <ColumnLabel>
                      <input type="checkbox" /> Monday
                    </ColumnLabel>
                    <ColumnLabel>
                      <input type="checkbox" /> Tuesday
                    </ColumnLabel>
                    <ColumnLabel>
                      <input type="checkbox" /> Wednesday
                    </ColumnLabel>
                    <ColumnLabel>
                      <input type="checkbox" /> Thursday
                    </ColumnLabel>
                  </Column>
                  <Column>
                    <ColumnLabel>
                      <input type="checkbox" /> Friday
                    </ColumnLabel>
                    <ColumnLabel>
                      <input type="checkbox" /> Saturday
                    </ColumnLabel>
                    <ColumnLabel>
                      <input type="checkbox" /> Sunday
                    </ColumnLabel>
                  </Column>
                </DaysColumns>
              </WorkingDays>

              <WorkingTime>
                <h3>Working Time</h3>
                <p>Select the Opening & Closing Time</p>
                <TimeInput>
                  <input type="time" />
                  <input type="time" />
                </TimeInput>
              </WorkingTime>

              <UploadImage>
                <h3>Upload Store Image</h3>
                <UploadInfo>
                  Uploading image will help customers to easily recognize your store
                </UploadInfo>
                <UploadWrapper>
                  <UploadContainer>
                    <UploadLabel htmlFor="store-image">
                      <UploadIcon>
                        <img src={upload} alt="Upload Icon" />
                      </UploadIcon>
                    </UploadLabel>
                    <InputFile type="file" id="store-image" />
                  </UploadContainer>
                  <UploadText>
                    <UploadTextSpan>Add Profile Image</UploadTextSpan>
                    <UploadTextP>
                      Browse your Gallery or take a Picture from the phone Camera to upload
                    </UploadTextP>
                  </UploadText>
                </UploadWrapper>
              </UploadImage>

              <ContinueButton type="submit" onClick={handleContinue}>Continue</ContinueButton>
            </StoreForm>
          </MainContent>
        </FormMain>
      </StoreInformationContainer>
    </StoreInformationPage>
  );
};

export default StoreInformation;
