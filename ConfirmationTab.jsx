import React from "react";
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
    margin: 10px 0; /* Adjust spacing as needed */
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;

  button {
    width: 280px;
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;

    &.confirm {
      background: linear-gradient(to right, #668d12, #99cc33);
      color: white;

      &:hover {
        background-color: #45a049;
      }
    }

    &.reject {
      background: white;
      color: #668d12;
      border: 1px solid #668d12;

      &:hover {
        background-color: #45a049;
      }
    }
  }
`;


const ConfirmationTab = ({ orders, handleVerifyClick, isPopupVisible }) => {

    
  return (
    <>
      {orders.confirmation.map((order) => (
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
          </OrderDetails>
          <ButtonGroup>
            <button className="reject">Reject Order</button>
            <button className="confirm">Confirm Order</button>
          </ButtonGroup>
        </OrderItem>
      ))}
    </>
  );
};

export default ConfirmationTab;
