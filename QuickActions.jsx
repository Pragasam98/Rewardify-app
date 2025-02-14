import React, { useState } from "react";
import styled from "styled-components";
import MakePayment from "./assets/icons/makepayment.svg";
import Settlements from "./assets/icons/settlements.svg";
import TransactionHistory from "./assets/icons/transactionhistory.svg";
import GiftCards from "./assets/icons/giftcards.svg";
import Rewards from "./assets/icons/rewards.svg";
import Offers from "./assets/icons/offers.svg";
import Support from "./assets/icons/support.svg";
import Settings from "./assets/icons/settings.svg";

const QuickActionsContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  position: relative;
  overflow: hidden;
  width: 400px;
`;

const SliderWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const SliderContent = styled.div`
  display: flex;
  transform: translateX(${(props) => props.translate}%);
  transition: transform 0.3s ease-in-out;

  > div1 {
    flex: 0 0 41%;
    display: flex;
    margin-right:245px;
    gap:14px;
    
  }

  > div2 {
    flex: 0 0 41%;
    display: flex;
    margin-left:328px;
    margin-right:-266px;
    gap:10px;
  }
`;

const ActionCard = styled.div`
  flex: 0 0 20%;
  text-align: center;
  padding: 5px;
  cursor: pointer;

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 32px;
    height: 32px;
    margin-bottom: 10px;
    
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
  }
`;

const IconContiner =styled.div`
background-color: #f2f8df;
padding-top:10px;
margin-right:5px;
margin-left:5px;
margin-bottom:5px;
border-radius: 8px;
`

const Controls = styled.div`
  button {
    position: absolute;
    top: 51%;
    transform: translateY(-50%);
    background-color:rgb(255, 255, 255);
    color: #000;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;

    &:disabled {
      background-color:rgb(255, 255, 255);
      color: #bebebe;
      cursor: not-allowed;
    }
  }

  .prev {
    left: 0px;
  }

  .next {
    right: 0px;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;

  .dot {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background-color: #cccccc;
    border-radius: 50%;
    cursor: pointer;

    &.active {
      background-color: #000;
    }
  }
`;

const QuickActions = () => {
  const actions = [
    { id: 1, label: "Make Payment", icon: <img src={MakePayment} alt="Make Payment" />, link: "#" },
    { id: 2, label: "Settlements", icon: <img src={Settlements} alt="Settlements" />, link: "#" },
    { id: 3, label: "Transaction History", icon: <img src={TransactionHistory} alt="Transaction History" />, link: "#" },
    { id: 4, label: "Gift Cards", icon: <img src={GiftCards} alt="Gift Cards" />, link: "#" },
    { id: 5, label: "Request to REWARDIFY", icon: <img src={Rewards} alt="Rewards" />, link: "#" },
    { id: 6, label: "Refer & Earn", icon: <img src={Offers} alt="Offers" />, link: "#" },
    { id: 7, label: "Support", icon: <img src={Support} alt="Support" />, link: "#" },
    { id: 8, label: "Refund Transaction", icon: <img src={Settings} alt="Settings" />, link: "#" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 2;

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < totalSlides - 1) setCurrentIndex(currentIndex + 1);
  };

  const translate = -(currentIndex * 100);

  return (
    <QuickActionsContainer>
      <h2>Quick Actions</h2>
      <SliderWrapper>
        <SliderContent translate={translate}>
          {/* First slide (IDs 1–4) */}
          <div1>
            {actions
              .slice(0, 4)
              .map((action) => (
                <ActionCard key={action.id}>
                  <IconContiner>{action.icon} </IconContiner> 
                  <a href={action.link}>
                    
                    <span>{action.label}</span>
                  </a>
                </ActionCard>
              ))}
          </div1>
          {/* Second slide (IDs 5–8) */}
          <div2>
            {actions
              .slice(4, 8)
              .map((action) => (
                <ActionCard key={action.id}>
                  <IconContiner>{action.icon} </IconContiner> 
                  <a href={action.link}>
                    
                    <span>{action.label}</span>
                  </a>
                </ActionCard>
              ))}
          </div2>
        </SliderContent>
      </SliderWrapper>
      <Controls>
        <button className="prev" onClick={handlePrev} disabled={currentIndex === 0}>
          &lt;
        </button>
        <button className="next" onClick={handleNext} disabled={currentIndex === totalSlides - 1}>
          &gt;
        </button>
      </Controls>
      <Pagination>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Pagination>
    </QuickActionsContainer>
  );
};

export default QuickActions;
