import React from "react";
import styled from "styled-components";
import Contact from "./assets/icons/contact.svg";
import Location from "./assets/icons/location.svg";
import Person from "./assets/icons/person.svg";

// Styled components
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 16px;
  justify-content: center; /* Center-align if there's only one item */
  padding: 16px;
`;

const CompletedContainer = styled.div`
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 16px;
  width: 100%; /* Ensures the width respects the grid-template */
  max-width: 400px; /* Ensures it doesn't exceed 400px */
`;

const OrderHeader = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #4caf50;
  margin-bottom: 8px;
`;

const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  div {
    display: flex;
    align-items: center;
    gap: 8px; /* Space between the icon and text */
  }

  p {
    margin: 0;
    color: #333333;
    font-size: 14px;
  }
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .dot {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: #4caf50;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #333333;
  }
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between; /* Aligns items to the left and right */
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin-top: 16px; /* Space above the line */
  padding-top: 8px; /* Space below the line */
  border-top: 1px solid #e6e6e6; 

  .status {
    font-weight: bold;
    font-size: 12px;
    margin-left: 8px;
    background-color: #f2f8df;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 2px;
    padding-bottom: 4px;
    border-radius: 10px;
  }
`;

const CompletedTab = ({ orders }) => {
  if (orders.completed.length === 0) {
    return <p>No completed orders yet.</p>;
  }

  return (
    <GridContainer>
      {orders.completed.map((order) => (
        <CompletedContainer key={order.orderId}>
          <OrderHeader>Delivered Completed:</OrderHeader>
          <OrderDetails>
            <Row>
              <p>Order Id: {order.orderId}</p>
            </Row>
            <Row>
              <div>
                <img src={Person} alt="Person" />
                <p>{order.name}</p>
              </div>
            </Row>
            <Row>
              <div>
                <img src={Contact} alt="Contact" />
                <p>{order.contact}</p>
              </div>
            </Row>
            <Row>
              <div>
                <img src={Location} alt="Location" />
                <p>{order.location}</p>
              </div>
            </Row>
            <Status>
              <div className="dot" />
              <p>Delivery pickup {order.pickupTime}</p>
            </Status>
            <Status>
              <div className="dot" />
              <p>Delivered {order.deliveryTime}</p>
            </Status>
            <TotalAmount>
              <span>Total Bill Amount <span className="status">PAID - {order.paymentMode}</span></span>
              <span>
                 ₹{order.total}
              </span>
            </TotalAmount>
          </OrderDetails>
        </CompletedContainer>
      ))}
    </GridContainer>
  );
};

export default CompletedTab;
