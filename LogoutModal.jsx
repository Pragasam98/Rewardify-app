import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import LogoutIcon from "./assets/icons/log-out.svg"; // Replace with your icon path

const Modal = styled.div`
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

const ModalContent = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  background: #e0e9c2;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }
`;

const ModalHeader = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #030401;
  margin-bottom: 10px;
`;

const ModalText = styled.p`
  font-size: 14px;
  color: #7d7d7d;
  margin-bottom: 30px;
`;

const ModalActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  button {
    flex: 1;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;

    &.logout {
      background-color: #6dbf44;
      color: #ffffff;

      &:hover {
        background-color: #5aa93a;
      }
    }

    &.cancel {
      background-color: #f5f5f5;
      color: #030401;

      &:hover {
        background-color: #eaeaea;
      }
    }
  }
`;

const LogoutModal = ({ isOpen, onCancel }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear tokens, session storage, etc.)
    localStorage.clear(); // Example: Clear localStorage
    navigate("/"); // Redirect to the login or home page
  };

  if (!isOpen) return null;

  return (
    <Modal>
      <ModalContent>
        <IconWrapper>
          <img src={LogoutIcon} alt="Logout Icon" />
        </IconWrapper>
        <ModalHeader>Please Confirm</ModalHeader>
        <ModalText>Do you really want to logout from REWARDIFY?</ModalText>
        <ModalActions>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
          <button className="cancel" onClick={onCancel}>
            Cancel
          </button>
        </ModalActions>
      </ModalContent>
    </Modal>
  );
};

export default LogoutModal;
