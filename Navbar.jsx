import React from "react";
import styled from "styled-components";
import brandlogo from "./images/brandlogo.png";
import qrCodeIcon from "./assets/icons/c100.svg"; // Replace with your SVG file path
import bellIcon from "./assets/icons/bell.svg"; // Replace with your SVG file path
import userIcon from "./assets/icons/user.svg"; // Replace with your SVG file path
import coinrIcon from "./assets/icons/coinr.svg";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 81px;
  background-color: #ffffff;
  padding: 0 20px;
  border-bottom: 1px solid #e0e0e0;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 10px;
    height: 60px;
  }
`;

export const BrandLogo = styled.img`
  height: 20px;
  width: auto;
  object-fit: contain;
  margin-left: 15px;

  @media (max-width: 768px) {
    height: 16px;
    margin-left: 10px;
  }
`;

const UserGreeting = styled.div`
  font-size: 20px;
  display: flex;
  font-weight: bold;
  align-items: center;
  margin-right: 450px;

  span {
    margin-left: 5px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-right: 0;

    span {
      font-size: 16px;
    }
  }
`;

const ActionItems = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-right: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    margin-right: 10px;
  }
`;

const ActionButton = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5ffe1;
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: bold;
  margin-right: 5px;

  img {
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;

    img {
      width: 16px;
      height: 16px;
    }
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5ffe1;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #e0f3cc;
  }

  img {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;

    img {
      width: 16px;
      height: 16px;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <BrandLogo src={brandlogo} alt="Rewardify Logo" />
      <UserGreeting>
        Welcome, Rajesh<span>👋</span>
      </UserGreeting>
      <ActionItems>
        <ActionButton>
          XCoins: 300<img src={coinrIcon} alt="Coin Rupee Icon" />
        </ActionButton>
        <IconWrapper>
          <img src={qrCodeIcon} alt="QR Code Icon" />
        </IconWrapper>
        <IconWrapper>
          <img src={bellIcon} alt="Bell Icon" />
        </IconWrapper>
        <IconWrapper>
          <img src={userIcon} alt="User Icon" />
        </IconWrapper>
      </ActionItems>
    </NavbarContainer>
  );
};

export default Navbar;