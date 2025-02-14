import React, { useState } from "react";
import styled from "styled-components";
import Profile from "./images/profile.png"
import Prologo from "./images/prologo.png"
import Refresh from "./images/refresh.png"

const RecentTransactionsContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h2 {
    font-size: 18px;
    font-weight: bold;
    color: #2b2b2b;
    margin: 0;
  }

  .last-update {
    font-size: 12px;
    color: #868c9a;
  }

  img {
    width: 16px; /* Adjusted size */
    height: 16px; /* Adjusted size */
    cursor: pointer; /* Optional: cursor pointer for better UX */
    margin-bottom: 40px
  }
`;



const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 14px;

  div {
    flex: 1;
    text-align: center;
    padding: 8px 0;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    color: #868c9a;

    &.active {
      color: #2b2b2b;
      font-weight: bold;
      border-bottom: 2px solid #88b72b;
    }
  }
`;

const TransactionList = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

const TransactionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const ProfilePicture = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-top: 15px;
  background-color: #f2f8df;
  padding:10px;
  margin-right: -40px;
`;

const TransactionInfo = styled.div`
  font-size: 14px;
  color: #2b2b2b;

  .phone {
    font-weight: bold;
  }

  .date {
    font-size: 12px;
    color: #868c9a;
    margin: 5px 0;
  }

  .method {
    font-size: 12px;
    color: #000000;
  }

 
`;

const SettlementItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const SettlementInfo = styled.div`
  font-size: 14px;
  color: #000000;
  margin-left: 30px;

  .title {
    font-weight: bold;
  }

  .date {
    font-size: 12px;
    color: #000000;
    margin: -7px 0;
  }

  .settledvia {
    font-size: 12px;
    color: #000000;
  }
  
  .time{
    font-size:12px;
    color:#868c9a;
  }

`;

const BelowAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align text to the left */
  margin-top: -9px; /* Add some spacing from the amount */
  margin-left: 40px;

  .paid {
    font-size: 12px;
    color: #198754;
    margin-bottom: 3px; /* Space between "paid" and "view" */
  }

  .view {
    font-size: 12px;
    color: #f44336;
    cursor: pointer;
    text-decoration: none;
    margin-top:0px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SettlementRight = styled.div`
margin-top:14px;
`

const SettlementAmount = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #f44336; /* Red for deductions */
`;


const TransactionAmount = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #4caf50;
  padding-top: 15px;
`;

const RecentTransactions = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <RecentTransactionsContainer>
      {/* Header */}
      <Header>
        <div>
          <h2>Recent Transactions</h2>
          <p className="last-update">Last Update: June 02, 2024 | 11:25 PM</p>
        </div>
        <img src={Refresh} alt="Refresh"/>
      </Header>

      {/* Tabs */}
      <Tabs>
        <div
          className={activeTab === "all" ? "active" : ""}
          onClick={() => handleTabClick("all")}
        >
          All Transactions
        </div>
        <div
          className={activeTab === "settlements" ? "active" : ""}
          onClick={() => handleTabClick("settlements")}
        >
          Settlements
        </div>
      </Tabs>

      {/* Transaction List */}
      <TransactionList>
        {activeTab === "all" ? (
          <>
            <TransactionItem>
            <ProfilePicture src={Profile} alt="Profile" />
              <TransactionInfo>
              
                <p className="phone">+918956598562 Send a Payment</p>
                <p className="date">Paid on Apr 11, 2024, at 4:30 PM</p>
               
                <p className="method">Paid via QR Scan</p>
                
              </TransactionInfo>
              <TransactionAmount>+₹500.00</TransactionAmount>
            </TransactionItem>
            <TransactionItem>
            <ProfilePicture src={Profile} alt="Profile" />
              <TransactionInfo>
                <p className="phone">+918956598562 Send a Payment</p>
                <p className="date">Paid on Apr 11, 2024, at 4:30 PM</p>
               
                <p className="method">Paid via Online Payment (UPI)</p>
                
              </TransactionInfo>
              <TransactionAmount>+₹800.00</TransactionAmount>
            </TransactionItem>
          </>
        ) : (
          <>
          <SettlementItem>
  <ProfilePicture src={Prologo} alt="Profile" />
  <SettlementInfo>
    <p className="title">Weekly Settlements (10 Apr - 17 Apr)</p>
    <p className="date">Paid on Apr 11, 2024, at 4:30 PM</p>
    <p className="settledvia">REWARDIFY (weekly settlement)</p>
    <p className="time">1 week ago</p>
  </SettlementInfo>
  <SettlementRight>
    <SettlementAmount>-₹3326.00</SettlementAmount>
    <BelowAmountContainer>
      <p className="paid">Paid</p>
      <p className="view">View</p>
    </BelowAmountContainer>
    </SettlementRight>
</SettlementItem>

<SettlementItem>
  <ProfilePicture src={Prologo} alt="Profile" />
  <SettlementInfo>
    <p className="title">Weekly Settlements (03 Apr - 10 Apr)</p>
    <p className="date">Paid on Apr 03, 2024, at 4:30 PM</p>
    <p className="settledvia">REWARDIFY (weekly settlement)</p>
    <p className="time">1 week ago</p>
  </SettlementInfo>
  <SettlementRight>
    <SettlementAmount>-₹3326.00</SettlementAmount>
    <BelowAmountContainer>
      <p className="paid">Paid</p>
      <p className="view">View</p>
    </BelowAmountContainer>
  </SettlementRight>
</SettlementItem>




          </>
        )}
      </TransactionList>
    </RecentTransactionsContainer>
  );
};

export default RecentTransactions;
