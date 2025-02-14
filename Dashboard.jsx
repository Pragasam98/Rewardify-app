import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import QuickActions from "./QuickActions";
import RecentTransactions from "./RecentTransactions";
import MyOrders from "./MyOrders";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #f9f9f9;
  height: 100vh;
`;

const NavbarContainer = styled.div`
  flex-shrink: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const SidebarContainer = styled.div`
  flex-shrink: 0;
  width: 250px;
  background-color: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const MainContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const LeftSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left:20px;
  
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right:30px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      {/* Navbar */}
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>

      {/* Content Wrapper */}
      <ContentWrapper>
        {/* Sidebar */}
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>

        {/* Main Content */}
        <MainContainer>
          {/* Left Section */}
          <LeftSection>
            <QuickActions />
            <RecentTransactions />
          </LeftSection>

          {/* Right Section */}
          <RightSection>
            <MyOrders />
          </RightSection>
        </MainContainer>
      </ContentWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
