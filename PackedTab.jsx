import React from "react";
import styled from "styled-components";
import Contact from "./assets/icons/contact.svg";
import Location from "./assets/icons/location.svg";

const OrderItemp = styled.div`
   display: inline-block;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    max-width: 400px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(240, 240, 240);
    border-image: initial;
    border-radius: 8px;
    padding: 15px;
    margin: 10px;
`;

const OrderDetail = styled.div`
 .order-details {
    margin-bottom: 20px; /* Adds gap below */
    .contact-info {
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
          gap:120px;
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
          gap:125px;
          p {
            margin: 0;
            
            &:not(:last-child) {
              margin-bottom: 5px; /* Adds gap between the two lines */
            }
          }
         
          }  
        }
            .text3 {
          font-size: 14px;
          display: flex;
          flex-direction: row; /* Displays Order Placed/Confirmed and time vertically */
          justify-content: space-between;
          gap:142px;
          p {
            margin: 0;
            
            &:not(:last-child) {
              margin-bottom: 5px; /* Adds gap between the two lines */
            }
      }

`;



const PackedTab = ({ orders }) => {
  return (
    <>
      {orders.packed.map((order) => (
        <OrderItemp key={order.orderId}>
          <OrderDetail>
            <p>Ready for delivery:</p>
            <div className="order-header">
            <span className="order-id">Order Id: {order.orderId}</span>
            </div>
            <div className="customer-info">
              <p>{order.name}</p>
            </div>
            <div className="order-details">
                    
               <div className="contact-info">
              <p><img src={Contact} alt="Contact" /> {order.contact}</p>
              <p>|</p>
              <p><img src={Location} alt="Location" /> {order.location}</p>
               
               </div>
               <div className="status">
                <div className="status-item">
                <div className="dot"></div>
              <div className="text1">
              <p>Store Confirmation</p>
              <p>{order.scdate}</p>
              </div>
            </div>
            <div className="status-item">
            <div className="dot"></div>
            <div className="text2">
              <p>Delivery Accepted</p>
              <p>{order.dadate}</p>
              </div>
            </div>
            <div className="status-item">
            <div className="dot"></div>
            <div className="text3">
              <p>Delivery Pickup</p>
              <p>{order.dpdate}</p>
            </div>
            </div>
            </div>
            </div>
          </OrderDetail>
        </OrderItemp>
      ))}
    </>
  );
};

export default PackedTab;
