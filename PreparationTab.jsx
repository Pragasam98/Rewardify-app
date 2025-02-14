import React, { useState } from "react";
import styled from "styled-components";
import Contact from "./assets/icons/contact.svg";
import Location from "./assets/icons/location.svg";

const OrderItem = styled.div`
 display: inline-block;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    padding: 15px;
    margin: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 400px;
`;

const OrderDetails = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: #2b2b2b;

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  .row-c {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  .column {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
  }

  .order-id {
    font-weight: bold;
    color: #4caf50;
    margin-bottom: -12px;
    margin-top: 5px;
  }

  .date {
    font-size: 14px;
    color: #000000;
    margin-bottom: -12px;
    margin-top: 5px;
  }

  .ordered-for {
    font-weight: bold;
    margin-bottom: -16px;
    font-size: 17px;
  }

  .ordered-name {}

  .ordered-contact {
    font-size: 13px;
    color: #000000;
    margin-top: -10px;
    img {
      width: 14px;
      height: 14px;
      margin-right: 5px;
      margin-bottom: -2px;
    }
  }

  .ordered-location {
    font-size: 13px;
    margin-top: -10px;
    img {
      width: 14px;
      height: 14px;
      margin-right: 5px;
      margin-bottom: -2px;
    }
  }

  .dash {
    margin-top: -10px;
  }

  .order-item {
    font-weight: 500;
    font-size: 16px;
    color: #000000;
    margin-top: -10px;
  }

  .order-items {
    flex: 1;
    font-size: 13px;
    margin-top: -10px;
  }

  .item-amount {
    font-size: 13px;
    font-weight: bold;
    text-align: right;
    margin-top: -10px;
  }

  .order-total {
    font-weight: bold;
    font-size: 13px;
  }

  .order-status {
    font-weight: bold;
    font-size: 9px;
    padding-right: 10px;
    padding-left: 10px;
  }

  .order-total-line {
    border-top: 1px solid #e0e0e0;
    
  }

  .status {
    background-color: #f2f8df;
    border-radius: 15px;
    margin-left: -164px;
  }

  .order-amount {
    font-weight: bold;
    font-size: 13px;
  }
`;

const ButtonGroup1 =styled.div`
display: flex;
  gap: 20px;
  margin-top: 10px;

  button {
    width: 400px;
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;

    &.Verify {
      background: #e1e1e1;
      color: #868c9a;      
    }
`
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  width: 65%; /* Adjust width as needed */
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PopupTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* Separates left and right sections */
  gap: 20px;
`;

const LeftSection = styled.div`
  flex: 1;
   border: 1px solid #f0f0f0;
    border-radius: 8px;
    padding: 15px;
    

  .order-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px; /* Adds gap below */
    .order-id {
      color: #77a832;
    }
    .date {
      color: #868c9a;
    }
  }

  .order-details {
    margin-bottom: 20px; /* Adds gap below */
    .row-c {
      display: flex;
      align-items: center;
      margin-bottom: 15px; /* Adds gap below contact and location */
      gap: 10px;
    }
    .ordered-contact,
    .ordered-location {
      display: flex;
      align-items: center;
      img {
        margin-right: 5px;
      }
    }

    .status {
      margin-top: 20px; /* Adds gap above the status section */
      .status-item {
        display: flex;
        align-items: center;
        margin-bottom: 10px; /* Adds gap between status items */
        .dot {
          width: 10px;
          height: 10px;
          background-color: #77a832;
          border-radius: 50%;
          margin-right: 10px;
        }
        .text1 {
          font-size: 14px;
          display: flex;
          flex-direction: row; /* Displays Order Placed/Confirmed and time vertically */
          justify-content: space-between;
          gap:155px;
          p {
            margin: 0;
            
            &:not(:last-child) {
              margin-bottom: 5px; /* Adds gap between the two lines */
            }
          }
        }
          .text2 {
          font-size: 14px;
          display: flex;
          flex-direction: row; /* Displays Order Placed/Confirmed and time vertically */
          justify-content: space-between;
          gap:130px;
          p {
            margin: 0;
            
            &:not(:last-child) {
              margin-bottom: 5px; /* Adds gap between the two lines */
            }
          }
        }
      }
    }
  }
`;

const RightSection = styled.div`
  flex: 1;
  border: 1px solid #f0f0f0;
    border-radius: 8px;
    padding: 15px;
  h3 {
    font-size: 14px;
    color: #77a832;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px; /* Adds gap between list items */
      .item {
        display: flex;
        align-items: center;
        input {
          margin-right: 10px;
        }
      }
      .price {
        font-size: 14px;
        color: #868c9a;
      }
    }
  }
`;

const ActionButton = styled.div`
  display: flex;
  flex-direction: column; /* Centers the button and text vertically */
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: #d3d3d3;
    color: #868c9a;
    font-size: 14px;
    cursor: not-allowed;
  }

  p {
    font-size: 12px;
    margin-top: 10px;
    color: #868c9a;
    text-align: center;
  }
`;

const PreparationTab = ({ orders }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
  
    const handleVerifyClick = (order) => {
      setSelectedOrder(order);
      setIsPopupVisible(true);
    };
  
    const closePopup = (e) => {
      if (e.target.id === "popup-overlay") {
        setIsPopupVisible(false);
      }
    };
  
    return (
      <>
        {orders.preparation.map((order) => (
          <OrderItem key={order.orderId}>
            <OrderDetails>
              <div className="row">
                <p className="order-id">Order Id: {order.orderId}</p>
                <p className="date">Date: {order.date}</p>
              </div>
              <div className="column">
                <p className="ordered-for">Order for:</p>
                <p className="ordered-name">{order.name}</p>
              </div>
              <div className="row-c">
                <p className="ordered-contact">
                  <img src={Contact} alt="Contact" /> {order.contact}
                </p>
                <p className="dash">|</p>
                <p className="ordered-location">
                  <img src={Location} alt="Location" /> {order.location}
                </p>
              </div>
              <p className="order-item">Order-Items:</p>
              {order.items.map((item) => (
                <div className="row" key={item.name}>
                  <p className="order-items">
                    {item.quantity} x {item.name}
                  </p>
                  <p className="item-amount">₹{item.price}</p>
                </div>
              ))}
              <div className="order-total-line"></div>
              <div className="row">
                <p className="order-total">Total Bill Amount</p>
                <div className="status">
                  <p className="order-status">{order.status}</p>
                </div>
                <p className="order-amount">₹{order.total}</p>
              </div>
              <div className="order-total-line"></div>
            </OrderDetails>
            
            <ButtonGroup1>
              <button className="verify" onClick={() => handleVerifyClick(order)}>
                Verify & Pack Items
              </button>
            </ButtonGroup1>
          </OrderItem>
        ))}
  
        {isPopupVisible && (
          <PopupOverlay id="popup-overlay" onClick={closePopup}>
            <PopupContent>
              <PopupTitle>Order Confirmation</PopupTitle>
              <ContentWrapper>
                {/* Left Section */}
                <LeftSection>
                  <div className="order-info">
                    <span className="order-id">Order Id: {selectedOrder.orderId}</span>
                    <span className="date">Date: {selectedOrder.date}</span>
                  </div>
                  <div className="customer-info">
              <p><strong>Order for:</strong></p>
              <p>{selectedOrder.name}</p>
            </div>
                  <div className="order-details">
                    <div className="row-c">
                      <p className="ordered-contact">
                        <img src={Contact} alt="Contact" /> {selectedOrder.contact}
                      </p>
                      <p className="dash">|</p>
                      <p className="ordered-location">
                        <img src={Location} alt="Location" /> {selectedOrder.location}
                      </p>
                    </div>
                    <div className="status">
                      <div className="status-item">
                        <div className="dot"></div>
                        <div className="text1">
                          <p>Order Placed</p>
                          <p>{selectedOrder.opdate}</p>
                        </div>
                      </div>
                      <div className="status-item">
                        <div className="dot"></div>
                        <div className="text2">
                          <p>Order Confirmed</p>
                          <p>{selectedOrder.ocdate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </LeftSection>
  
                {/* Right Section */}
                <RightSection>
                  <h3>Verify all the items - {selectedOrder.items.length} Items</h3>
                  <ul>
                    {selectedOrder.items.map((item, index) => (
                      <li key={index}>
                        <div className="item">
                          <input type="checkbox" /> {item.quantity} x {item.name}
                        </div>
                        <div className="price">₹{item.price}</div>
                      </li>
                    ))}
                  </ul>
                </RightSection>
              </ContentWrapper>
  
              {/* Action Button */}
              <ActionButton>
                <button disabled>Ready for Delivery</button>
                <p>*Select all items to proceed to the next step</p>
              </ActionButton>
            </PopupContent>
          </PopupOverlay>
        )}
      </>
    );
  };
  
  export default PreparationTab;
  


