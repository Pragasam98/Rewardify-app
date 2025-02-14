import React, { useState } from "react";
import styled from "styled-components";
import LogoutModal from "./LogoutModal";
import Profile from "./assets/icons/propic.svg";
import ProfileActive from "./assets/icons/propic-active.svg";
import ShopDetailsIcon from "./assets/icons/shop.svg";
import ShopDetailsActive from "./assets/icons/shop-active.svg";
import MyWalleticon from "./assets/icons/wallet.svg";
import MyWalletActive from "./assets/icons/wallet-active.svg";
import Abouticon from "./assets/icons/about.svg";
import AboutActive from "./assets/icons/about-active.svg";
import Logout from "./assets/icons/logout.svg";
import LogoutActive from "./assets/icons/logout-active.svg";
import ProfileDetails from "./ProfileDetails";
import ShopDetails from "./ShopDetails";
import MyWallet from "./MyWallet";
import About from "./About";

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #030401;
  margin-bottom: 20px;
  margin-left: 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-right: 1px solid #e5e5e5;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#030401" : "#7d7d7d")};
  background-color: ${(props) => (props.active ? "#f2f8df" : "transparent")};
  border-radius: 8px;

  &:hover {
    background-color: #f2f8df;
  }

  img {
    margin-right: 10px;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  width: 100%;
  max-width: 488px;
  margin-left: 32px;
  border-radius: 10px;
`;

const MyProfileDetails = () => {
  const [activeSection, setActiveSection] = useState("Profile");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const icons = {
    Profile: activeSection === "Profile" ? ProfileActive : Profile,
    ShopDetails: activeSection === "ShopDetails" ? ShopDetailsActive : ShopDetailsIcon,
    MyWallet: activeSection === "MyWallet" ? MyWalletActive : MyWalleticon,
    About: activeSection === "About" ? AboutActive : Abouticon,
    Logout: activeSection === "Logout" ? LogoutActive : Logout,
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Profile":
        return <ProfileDetails />;
      case "ShopDetails":
        return <ShopDetails />;
      case "MyWallet":
        return <MyWallet />;
      case "About":
        return <About />;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    console.log("Logged out successfully");
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Header>My Profile</Header>
      <ContentWrapper>
        <Sidebar>
          <SidebarItem
            active={activeSection === "Profile"}
            onClick={() => setActiveSection("Profile")}
          >
            <img src={icons.Profile} alt="Profile" />
            Profile Details
          </SidebarItem>
          <SidebarItem
            active={activeSection === "ShopDetails"}
            onClick={() => setActiveSection("ShopDetails")}
          >
            <img src={icons.ShopDetails} alt="Shop Details" />
            Shop Details
          </SidebarItem>
          <SidebarItem
            active={activeSection === "MyWallet"}
            onClick={() => setActiveSection("MyWallet")}
          >
            <img src={icons.MyWallet} alt="My Wallet" />
            My Wallet
          </SidebarItem>
          <SidebarItem
            active={activeSection === "About"}
            onClick={() => setActiveSection("About")}
          >
            <img src={icons.About} alt="About REWARDIFY" />
            About REWARDIFY
          </SidebarItem>
          <SidebarItem
            active={activeSection === "Logout"}
            onClick={() => setIsModalOpen(true)}
          >
            <img src={icons.Logout} alt="Logout" />
            Logout
          </SidebarItem>
        </Sidebar>
        <MainContent>{renderContent()}</MainContent>
      </ContentWrapper>

      <LogoutModal
        isOpen={isModalOpen}
        onConfirm={handleLogout}
        onCancel={() => setIsModalOpen(false)}
      />
    </Container>
  );
};

export default MyProfileDetails;
