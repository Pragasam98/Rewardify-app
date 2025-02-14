import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import store from "./images/store.png";
import dashboardIcon from "./assets/icons/dashboard.svg";
import ordersIcon from "./assets/icons/orders.svg";
import productsIcon from "./assets/icons/products.svg";
import profileIcon from "./assets/icons/profile.svg";
import downArrowIcon from "./assets/icons/down-arrow.svg";

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  height: 100vh;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileImage = styled.img`
  width: 101px;
  height: 82px;
  border-radius: 8%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  margin-top: 10px;
`;

const ProfileName = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const DownArrow = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 5px;
`;

const ShopId = styled.div`
  font-size: 14px;
  color: #7d7d7d;
  margin-top: 5px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;
  color: ${(props) => (props.active ? "#030401" : "#7d7d7d")};
  background-color: ${(props) => (props.active ? "#f2f8df" : "transparent")};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 5px;
    background-color: ${(props) => (props.active ? "#80b918" : "transparent")};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    transition: background-color 0.2s;
  }

  &:hover {
    background-color: #f5ffe1;
    color: #000000;
  }
`;

const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 15px;
  margin-left: 25px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: ${(props) =>
      props.active
        ? "invert(0%) sepia(0%) saturate(0%) hue-rotate(55deg) brightness(-72%) contrast(48%)" /* Highlighted green color */
        : "invert(67%) sepia(7%) saturate(0%) hue-rotate(172deg) brightness(94%) contrast(82%)"}; /* Default gray color */
    transition: filter 0.2s;
  }
`;

const MenuText = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: "Dashboard", icon: dashboardIcon, route: "/dashboard" },
    { text: "Orders", icon: ordersIcon, route: "/order" },
    { text: "My Products", icon: productsIcon, route: "/products" },
    { text: "Profile", icon: profileIcon, route: "/profile" },
  ];

  return (
    <SidebarContainer>
      <ProfileSection>
        <ProfileImage src={store} alt="Shop Profile" />
        <ProfileInfo>
          <ProfileName>
            Kannan Departmental
            <DownArrow src={downArrowIcon} alt="Down Arrow" />
          </ProfileName>
          <ShopId>Shop ID: 123456789</ShopId>
        </ProfileInfo>
      </ProfileSection>
      <Menu>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            active={location.pathname.startsWith(item.route)}
            onClick={() => navigate(item.route)}
          >
            <MenuIcon active={location.pathname.startsWith(item.route)}>
              <img src={item.icon} alt={`${item.text} Icon`} />
            </MenuIcon>
            <MenuText>{item.text}</MenuText>
          </MenuItem>
        ))}
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
