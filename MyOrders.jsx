import React, { useState } from "react";
import ConfirmationTab from "./ConfirmationTab";
import PreparationTab from "./PreparationTab";
import PackedTab from "./PackedTab";
import CompletedTab from "./CompletedTab";
import styled from "styled-components";
import Refresh from "./images/refresh.png";
import SearchIcon from "./assets/icons/search.svg";



const MyOrdersContainer = styled.div`
   background-color: #ffffff;
   border-radius: 10px;
   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
   padding: 20px;
   width: 100%;
   max-width: 950px;
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
     width: 16px;
     height: 16px;
     cursor: pointer;
   }
 `;

const SearchWrapper = styled.div`
     display: flex;
     align-items: center;
     border: 1px solid #e0e0e0;
     border-radius: 5px;
     padding: 5px 10px;
     width: 300px;
     margin-bottom: 30px;

   input {
     border: none;
     outline: none;
     font-size: 14px;
     width: 100%;
     padding: 5px;
   }

   img {
     width: 14px;
     height: 14px;
     margin-right: 5px;
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

     .count {
       font-size: 12px;
       color: #868c9a;
       margin-left: 5px;
     }
   }
 `;

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState("confirmation");
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const orders = {
        confirmation: [
          {
            orderId: 12345,
            date: "Apr 09, 2024",
            name: "Rajesh Kannan",
            contact: "9876543210",
            location: "Chennai, Tamil Nadu",
            items: [
              { name: "Ooty Apple", quantity: 1, price: 100 },
              { name: "White Egg", quantity: 5, price: 50 }
            ],
            total: 150,
            status: "PAID - UPI"
          },
          {
            orderId: 12346,
            date: "Apr 10, 2024",
            name: "Amit Sharma",
            contact: "8765432109",
            location: "Coimbatore, Tamil Nadu",
            items: [
              { name: "Ooty Apple", quantity: 1, price: 100 },
              { name: "White Egg", quantity: 5, price: 50 }
            ],
            total: 150,
            status: "PAID - UPI"
          }
        ],
        preparation: [
          {
            orderId: 12347,
            date: "Apr 12, 2024",
            name: "Sundar Raj",
            contact: "7654321098",
            location: "Bengaluru, Karnataka",
            items: [
              { name: "Banana", quantity: 3, price: 120 },
              { name: "Onion", quantity: 2, price: 40 }
            ],
            total: 160,
            status: "PREPARING",
            opdate:"Apr 09, 2024 | 02:00 PM",
            ocdate:"Apr 09, 2024 | 05:00 PM"
    
          },
          {
            orderId: 12348,
            date: "Apr 13, 2024",
            name: "Ravi Kumar",
            contact: "6543210987",
            location: "Hyderabad, Telangana",
            items: [
              { name: "Carrot", quantity: 2, price: 80 },
              { name: "Spinach", quantity: 1, price: 50 }
            ],
            total: 130,
            status: "PREPARING",
            opdate:"Apr 09, 2024 | 03:00 PM",
            ocdate:"Apr 09, 2024 | 06:00 PM"
          }
        ],
        packed: [
          {
            orderId: 12349,
            date: "Apr 15, 2024",
            name: "Kiran Reddy",
            contact: "5432109876",
            location: "Vijayawada, Andhra Pradesh",
            items: [
              { name: "Tomato", quantity: 2, price: 60 },
              { name: "Potato", quantity: 3, price: 45 }
            ],
            total: 105,
            status: "PACKED",
            scdate:"Apr 09, 2024 | 01:00PM",
            dadate:"Apr 09, 2024 | 02:00PM",
            dpdate:"Apr 09, 2024 | 03:00PM"
          },
          {
            orderId: 12350,
            date: "Apr 16, 2024",
            name: "Priya Nair",
            contact: "4321098765",
            location: "Kochi, Kerala",
            items: [
              { name: "Mango", quantity: 4, price: 200 },
              { name: "Cucumber", quantity: 2, price: 40 }
            ],
            total: 240,
            status: "PACKED",
            scdate:"Apr 09, 2024 | 02:00PM",
            dadate:"Apr 09, 2024 | 03:00PM",
            dpdate:"Apr 09, 2024 | 04:00PM"
          }
        ],
        completed: [
          {
            orderId: "12345",
            name: "Rajesh Kannan",
            contact: "+919856235847",
            location: "27, Goragandhi Apartments, S V P Road, Near Rlye Nagar Station, Borivali (west), Coimbatore",
            pickupTime: "Apr 10, 2024 | 03:30PM",
            deliveryTime: "Apr 10, 2024 | 06:00PM",
            total: 150,
            paymentMode: "UPI",
          }
        ]
      };

  return (
    <MyOrdersContainer>
             <Header>
       <div>
           <h2>My Orders <img src={Refresh} alt="Refresh" /></h2>
           <p className="last-update">Last Update: Jan 20, 2025 | 11:25 AM</p>
         </div>

         <SearchWrapper>
           <img src={SearchIcon} alt="Search" />
          <input
            type="text"
             placeholder="Search for order id or Customer Name"
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
           />
         </SearchWrapper>
       </Header>


       <div>
        <Tabs>
          <div
            className={activeTab === "confirmation" ? "active" : ""}
            onClick={() => handleTabClick("confirmation")}
          >
            Confirmation
            <span className="count">{orders.confirmation.length}</span>
          </div>
          <div
            className={activeTab === "preparation" ? "active" : ""}
            onClick={() => handleTabClick("preparation")}
          >
            Preparation
            <span className="count">{orders.preparation.length}</span>
          </div>
          <div
            className={activeTab === "packed" ? "active" : ""}
            onClick={() => handleTabClick("packed")}
          >
            Packed Order
            <span className="count">{orders.packed.length}</span>
          </div>
          <div
            className={activeTab === "completed" ? "active" : ""}
            onClick={() => handleTabClick("completed")}
          >
            Completed
            <span className="count">{orders.completed.length}</span>
          </div>
        </Tabs>
      </div>

      <div>
        {activeTab === "confirmation" && (
          <ConfirmationTab orders={orders} handleVerifyClick={() => setPopupVisible(true)} isPopupVisible={isPopupVisible} />
        )}
        {activeTab === "preparation" && <PreparationTab orders={orders} handleVerifyClick={() => setPopupVisible(true)} isPopupVisible={isPopupVisible} />}
        {activeTab === "packed" && <PackedTab orders={orders} />}
        {activeTab === "completed" && <CompletedTab orders={orders} />}
      </div>
    </MyOrdersContainer>
  );
};

export default MyOrders;
