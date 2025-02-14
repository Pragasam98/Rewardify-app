import React from "react";
import styled from "styled-components";
import GPayIcon from "./assets/icons/gpay.svg"; // Replace with your actual image path
import PhonePeIcon from "./assets/icons/phonepe.svg"; // Replace with your actual image path
import PaytmIcon from "./assets/icons/paytm.svg"; // Replace with your actual image path

const WalletContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
`;

const Header = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 20px;
    color: #030401;
  }

  p {
    font-size: 14px;
    color: #868c9a;
    margin-top: -10px;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f8f8f8;
  border: 1px solid #e0e0e0;
  border-radius: 10px;

  h4 {
    font-size: 16px;
    color: #030401;
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;

const UPIItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid #e0e0e0;

  &:first-child {
    border-top: none;
  }

  .upi-icon {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .link {
    color: #80b918;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    width: 60px;
    height: 40px;
    object-fit: contain;
  }
`;

const IconText = styled.span`
  font-size: 14px;
  color: #030401;
`;

const MyWallet = () => {
  return (
    <WalletContainer>
      <Header>
        <h3>My Wallet</h3>
        <p>Here you can view your wallet details</p>
      </Header>

      <Section>
        <h4>Bank Details</h4>
        <Input type="text" placeholder="Federal Bank" />
        <Input type="text" placeholder="865231245784512" />
        <Input type="text" placeholder="FED12345678R" />
      </Section>

      <Section>
        <h4>Link UPI</h4>
        <UPIItem>
          <div className="upi-icon">
            <img src={GPayIcon} alt="GPay" />
            <IconText>GPay</IconText>
          </div>
          <span className="link">Link UPI</span>
        </UPIItem>
        <UPIItem>
          <div className="upi-icon">
            <img src={PhonePeIcon} alt="PhonePe" />
            <IconText>PhonePe</IconText>
          </div>
          <span className="link">Link UPI</span>
        </UPIItem>
        <UPIItem>
          <div className="upi-icon">
            <img src={PaytmIcon} alt="Paytm" />
            <IconText>Paytm</IconText>
          </div>
          <span className="link">Link UPI</span>
        </UPIItem>
      </Section>
    </WalletContainer>
  );
};

export default MyWallet;
