import React, { useState } from "react";
import styled from "styled-components";
import ProductImages from "./images/productimage.png";

// Styled Components
const EditPriceContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Header = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const ProductDetails = styled.div`
  margin-bottom: 30px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #444;
    margin-bottom: 15px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;

  div {
    flex: 1;
  }
`;

const Select = styled.select`
  width: 50%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

const Input = styled.input`
  width: ${(props) => props.width || "100%"};
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  resize: none;
  margin-bottom: 15px;
  box-sizing: border-box;
`;

const DeliveryProduct = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const DeliveryDetails = styled.div`
  margin-bottom: 30px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  width: 50%;

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #444;
    margin-bottom: 15px;
  }
`;
const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    input {
      margin-right: 10px;
    }
  }
`;


const ProductImage = styled.div`
  margin-bottom: 30px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  width: 50%;

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #444;
    margin-bottom: 15px;
  }
`;

const FileInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  color: #666;
  cursor: pointer;
  width: 80px;
  height: 80px;
  margin-left: 135px;

  input {
    display: none;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;
  }
`;

const SuggestionsList = styled.ul`
  position: absolute;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-height: 150px;
  overflow-y: auto;
  width: calc(14% - 32px);
  z-index: 1000;
  margin-top: -19px;
  margin-left: 12px;

  li {
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

// Main Component
const EditPrice = () => {
  const [productName, setProductName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const productList = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Pineapple"];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setProductName(value);

    if (value.trim() !== "") {
      const filteredSuggestions = productList.filter((product) =>
        product.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setProductName(suggestion);
    setSuggestions([]);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <EditPriceContainer>
      <Header>Edit Product Price</Header>

      <ProductDetails>
        <h3>Product Details</h3>
        <Row>
          <Select>
            <option value="">Select related Category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </Select>
          <div>
            <Input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={handleInputChange}
            />
            {suggestions.length > 0 && (
              <SuggestionsList>
                {suggestions.map((suggestion, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion}
                  </li>
                ))}
              </SuggestionsList>
            )}
          </div>
        </Row>
        <Row>
          <Input width="50%" type="number" placeholder="Product MRP" />
          <Input width="23%" type="text" placeholder="Discount Type" />
          <Input width="24%" type="number" placeholder="Discount Value" />
        </Row>
        <Row>
          <Input width="50%" type="number" placeholder="Product Price" />
          <Select>
            <option value="">UOM (Unit of Measurement)</option>
            <option value="kg">Kilograms</option>
            <option value="ltr">Liters</option>
            <option value="pcs">Pieces</option>
          </Select>
        </Row>
      </ProductDetails>
      <DeliveryProduct>
      <DeliveryDetails>
          <h3>Delivery Details</h3>
          <CheckboxGroup>
            <label>
              <input type="checkbox" /> Instant Delivery
            </label>
            <label>
              <input type="checkbox" /> Scheduled Delivery
            </label>
            <label>
              <input type="checkbox" /> Store Pickup
            </label>
          </CheckboxGroup>
        </DeliveryDetails>

      <ProductImage>
        <h3>Product Image</h3>
        <p>Product images will be fetched from the Rewardify server</p>
        <FileInput onClick={() => document.getElementById("fileInput").click()}>
          {selectedImage ? (
            <img src={selectedImage} alt="Selected Product" />
          ) : (
            <img src={ProductImages} alt="Default Product" />
          )}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </FileInput>
      </ProductImage>
      </DeliveryProduct>

      <SaveButton>Save Changes</SaveButton>
    </EditPriceContainer>
  );
};

export default EditPrice;
