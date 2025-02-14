import React from "react";
import styled from "styled-components";
import StorePreview from "./images/storepreview.png";

const Section = styled.div`
  margin-top: 20px;
  padding: 20px;
  max-width: 600px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;

  p1{
  font-size: 13px;
    margin-top: -14px;
    color: #868c9a;
  }
`;



const Input = styled.input`
  width: 90%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 15px;

address{
width:80%;
height:30px;
}
`;

const Button = styled.button`
  background-color: #80b918;
  color: #ffffff;
  padding: 12px 20px;
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
  margin-top: 15px;
`;

const AddLocationContainer = styled.div`
  display: flex;
  width: 89%;
  align-items: center;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 15px;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const AddLocationText = styled.span`
  font-size: 14px;
  color: #030401;
`;

const ArrowIcon = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-left: auto;
`;

const WorkingDays = styled.div`
  padding: 15px;
  width: 88%;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 20px;
`;

const DaysColumns = styled.div`
  display: flex;
  gap: 70px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ColumnLabel = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;

  input {
    accent-color: #668d12;
    transform: scale(1.2);
    margin-right: 10px;
  }
`;

const WorkingDaysHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SelectAll = styled.span`
    font-size: 15px;
    color: #868c9a;
    cursor: pointer;
    margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const TimeContainer = styled.div`
  
  border: 1px solid #ccc;
  border-radius: 8px;
  padding-left: 20px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  margin-top: 20px;
  width: 90%;

  p2{
  font-size: 13px;
    margin-top: -14px;
    color: #868c9a;
  }
`;

const TimeInputContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 15px;
`

const TimeInput = styled.input`
  width: 80px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 13px;
`;

const FileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding-left: 20px;
  padding-bottom: 10px;
  width: 90%;

  .store-preview {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
`;

const FileImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  
`

const Or = styled.div`
  font-size: 14px;
  margin-left:10px;
  color: #868c9a;

`

const FileInputActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
`;

const FileInputLabel = styled.span`
  font-size: 14px;
  color: #868c9a;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ShopDetails = () => {
  return (
    <Section>
      <h3>Shop Details</h3>
      <p1>Here you can view and edit your details.</p1>

      
      <Input type="text" value="Kannan Departmental" />

      
      <Input
        type="text"
        className="address"
        value="2nd Flr, 274/25, Mohan Mansion, Sbs Rd, Fort, Coimbatore"
      />

      
      <Input type="text" value="9856232145" />

      
      <AddLocationContainer>
        <AddLocationText>Map Location</AddLocationText>
        <ArrowIcon>&#8594;</ArrowIcon>
      </AddLocationContainer>

      
      <WorkingDays>
        <WorkingDaysHeader>
          <h3>Working Days</h3>
          <SelectAll>Select All</SelectAll>
        </WorkingDaysHeader>
        <DaysColumns>
          <Column>
            <ColumnLabel>
              <input type="checkbox" /> Monday
            </ColumnLabel>
            <ColumnLabel>
              <input type="checkbox" /> Tuesday
            </ColumnLabel>
            <ColumnLabel>
              <input type="checkbox" /> Wednesday
            </ColumnLabel>
            <ColumnLabel>
              <input type="checkbox" /> Thursday
            </ColumnLabel>
          </Column>
          <Column>
            <ColumnLabel>
              <input type="checkbox" /> Friday
            </ColumnLabel>
            <ColumnLabel>
              <input type="checkbox" /> Saturday
            </ColumnLabel>
            <ColumnLabel>
              <input type="checkbox" /> Sunday
            </ColumnLabel>
          </Column>
        </DaysColumns>
      </WorkingDays>

      
      <TimeContainer>
        
      <h3>Working Time</h3>
      <p2>Select the Opening & Closing Time</p2>
      <TimeInputContainer>
        <TimeInput type="time" value="09:00" />
        <TimeInput type="time" value="18:00" />
        </TimeInputContainer>
      </TimeContainer>

      
      <FileInputContainer>
      <h3>Edit Store Image</h3>
      <p2>Select the Opening & Closing Time</p2>
      <FileImageContainer>
        <img
          src={StorePreview}
          alt="Store Preview"
          className="store-preview"
        />
        <FileInputActions>
          <FileInputLabel>Change Image</FileInputLabel>
          <Or>OR</Or>
          <FileInputLabel>Remove Image</FileInputLabel>
        </FileInputActions>
        </FileImageContainer>
      </FileInputContainer>

      <Button>Save Changes</Button>
      <Note>
        *Note: After changing the details, the REWARDIFY admin team will verify
        and approve the changes. Once approved, the updated details will be
        reflected here.
      </Note>
    </Section>
  );
};

export default ShopDetails;
