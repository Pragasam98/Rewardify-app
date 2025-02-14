import React from "react";
import styled from "styled-components";

const Section = styled.div`
  margin-top: 20px;
  padding: 20px;
`;

const Label = styled.div`
  font-size: 14px;
  color: #7d7d7d;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #80b918;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 95%;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Note = styled.p`
  font-size: 12px;
  color: #ff4d4f;
  margin-top: 10px;
`;

const ProfileDetails = () => {
  return (
    <Section>
      <h3>Profile Details</h3>
      <p>Here you can view and edit your details.</p>
      <Label>Full Name</Label>
      <Input type="text" value="Rajesh Kannan" />

      <Label>Phone Number</Label>
      <Input type="text" value="7986541239" />

      <Label>Email</Label>
      <Input type="text" value="xyz@gmail.com" />

      <Button>Save Changes</Button>
      <Note>
        *Note: After changing the details, the REWARDIFY admin team will
        verify and approve the changes. Once approved, the updated details
        will be reflected here.
      </Note>
    </Section>
  );
};

export default ProfileDetails;