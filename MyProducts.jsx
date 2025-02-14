import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Styled Components
const MyProductsContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 950px;
  margin: 20px auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 18px;
    font-weight: bold;
    color: #2b2b2b;
    margin: 0;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 5px 10px;
  width: 300px;

  input {
    border: none;
    outline: none;
    font-size: 14px;
    width: 100%;
    padding: 5px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  background: linear-gradient(to right, #668d12, #99cc33);
  color: white;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

const AccordionHeader = styled.div`
  background: white;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;

  h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }
`;

const AccordionContent = styled.div`
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-top: none;
  border-radius: 0 0 5px 5px;
  background: #ffffff;
  margin-bottom: 10px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th,
  td {
    text-align: left;
    padding: 10px;
    border: none;
  }

  th {
    background-color: #f9f9f9;
    font-weight: bold;
    color: #333;
  }

  td {
    font-size: 14px;
  }

  .toggle-switch {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 44px;
    margin-left: -30px;
  }
`;

const ToggleButton = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  background: ${(props) => (props.isOn ? "#4caf50" : "#ccc")};
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: ${(props) => (props.isOn ? "20px" : "2px")};
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    transition: left 0.3s;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 150px;
`;

const DropdownButton = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OptionsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  z-index: 1000;
`;

const Option = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #99cc33;
    color: white;
  }
`;

const CustomDropdown = ({ options, onSelect, product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option, product); // Pass the selected product data
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption} <span>{isOpen ? "▲" : "▼"}</span>
      </DropdownButton>
      {isOpen && (
        <OptionsList>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </OptionsList>
      )}
    </DropdownWrapper>
  );
};

const Accordion = ({ title, products, isOpen, toggleAccordion, toggleAvailability, onDropdownSelect }) => (
  <div>
    <AccordionHeader onClick={toggleAccordion}>
      <h3>{title}</h3>
      <span>{isOpen ? "-" : "+"}</span>
    </AccordionHeader>
    {isOpen && (
      <AccordionContent>
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>₹{product.price}</td>
                  <td>{product.quantity}</td>
                  <td className="toggle-switch">
                    <ToggleButton
                      isOn={product.available}
                      onClick={() => toggleAvailability(product)}
                    />
                  </td>
                  <td className="action">
                    <CustomDropdown
                      options={["Edit price", "Add Stock", "Minus Stock", "Delete product"]}
                      onSelect={(selected) => onDropdownSelect(selected, product)} // Pass the product data
                      product={product} // Pass the product data
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableContainer>
      </AccordionContent>
    )}
  </div>
);

const MyProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [accordionData, setAccordionData] = useState([]);

  const navigate = useNavigate();

  // Provided data
  const providedData = {
    totalCount: 8,
    data: [
      {
        _id: "66a9cbd40d9fa47451a7cf74",
        name: "Dettol",
        productCategory: {
          _id: "66a9c9ae0d9fa47451a7ce7c",
          name: "Skin Care",
          isDeleted: false,
          createdAt: "2024-07-31T05:20:46.762Z",
          updatedAt: "2024-08-02T06:14:02.187Z",
          __v: 0,
        },
        productInformation: {
          description: "Dettol",
          countryOfOrgin: "India",
          manufacturerName: "Dettol",
          _id: "66a9cbd40d9fa47451a7cf75",
        },
        images: [
          "https://rewardify-hw-academy.s3.ap-south-1.amazonaws.com/Rectangle%2047.png",
        ],
        isPrescriptionRequired: false,
        isDeleted: false,
        createdAt: "2024-07-31T05:29:56.529Z",
        updatedAt: "2024-07-31T05:29:56.529Z",
        __v: 0,
      },
      {
        _id: "66a9cba00d9fa47451a7cf5c",
        name: "Vicks Inhaler",
        productCategory: {
          _id: "66a9c9ae0d9fa47451a7ce7c",
          name: "Skin Care",
          isDeleted: false,
          createdAt: "2024-07-31T05:20:46.762Z",
          updatedAt: "2024-08-02T06:14:02.187Z",
          __v: 0,
        },
        productInformation: {
          description: "Vicks Inhaler gives relief.",
          countryOfOrgin: "India",
          manufacturerName: "Vicks",
          _id: "66a9cba00d9fa47451a7cf5d",
        },
        images: [
          "https://rewardify-hw-academy.s3.ap-south-1.amazonaws.com/Group%201000002518.png",
        ],
        isPrescriptionRequired: false,
        isDeleted: false,
        createdAt: "2024-07-31T05:29:04.849Z",
        updatedAt: "2024-07-31T05:29:04.849Z",
        __v: 0,
      },
      {
        _id: "66a9cacf0d9fa47451a7ceb5",
        name: "Dove Shampoo",
        productCategory: {
          _id: "66a9c9ae0d9fa47451a7ce7c",
          name: "Skin Care",
          isDeleted: false,
          createdAt: "2024-07-31T05:20:46.762Z",
          updatedAt: "2024-08-02T06:14:02.187Z",
          __v: 0,
        },
        productInformation: {
          description: "Dove Intense Repair Shampoo 650ml & Dove 10 in 1 Deep Repair Treatment Hair Mask 120 ml, for damaged hair (Combo Pack)",
          countryOfOrgin: "India",
          manufacturerName: "Dove",
          _id: "66a9cacf0d9fa47451a7ceb6",
        },
        images: [
          "https://rewardify-hw-academy.s3.ap-south-1.amazonaws.com/image%2081.png",
        ],
        isPrescriptionRequired: false,
        isDeleted: false,
        createdAt: "2024-07-31T05:25:35.170Z",
        updatedAt: "2024-07-31T05:25:35.170Z",
        __v: 0,
      },
      {
        _id: "66a9ca690d9fa47451a7ce9d",
        name: "Cetaphil Gentle Skin Cleanser 125ml for all",
        productCategory: {
          _id: "66a9c9ae0d9fa47451a7ce7c",
          name: "Skin Care",
          isDeleted: false,
          createdAt: "2024-07-31T05:20:46.762Z",
          updatedAt: "2024-08-02T06:14:02.187Z",
          __v: 0,
        },
        productInformation: {
          description: "Cetaphil Gentle Skin Cleanser 125ml for all",
          countryOfOrgin: "USA",
          manufacturerName: "Cetaphil",
          _id: "66a9ca690d9fa47451a7ce9e",
        },
        images: [
          "https://rewardify-hw-academy.s3.ap-south-1.amazonaws.com/image%2081.png",
        ],
        isPrescriptionRequired: false,
        isDeleted: false,
        createdAt: "2024-07-31T05:23:53.626Z",
        updatedAt: "2024-07-31T05:23:53.626Z",
        __v: 0,
      },
      {
        _id: "669e47360d9fa47451a78d43",
        name: "HP 15s Laptop (AMD Ryzen 5 5500U Processor/8GB/512GB SSD/AMD Radeon Graphics/Windows 11/MSO/FHD) 39.6 cm (15.6 inch)",
        productCategory: {
          _id: "6694b23aabbc52ba729ce602",
          name: "Laptop",
          isDeleted: false,
          createdAt: "2024-07-15T05:23:06.888Z",
          updatedAt: "2024-08-02T06:15:23.542Z",
          __v: 0,
        },
        productInformation: {
          description: "AMD Ryzen 5 5500U (6-Cores) Memory & Storage. Windows 11 Home Display. 15.6-inch FHD IPS | Anti-Glare Design. 1.69 kg, 17.9 mm thick Battery. 41 Whr (Lasts up to 9 Hrs) TECHNICAL SPECIFICATIONS General Information Model 15S-EQ2144AU Dimension (W x H x D) 358.",
          countryOfOrgin: "Japan",
          manufacturerName: "HP",
          _id: "669e47360d9fa47451a78d44",
        },
        images: [
          "https://rewardify-hw-academy.s3.ap-south-1.amazonaws.com/lap.webp",
        ],
        isPrescriptionRequired: true,
        isDeleted: false,
        createdAt: "2024-07-22T11:49:10.506Z",
        updatedAt: "2024-07-22T11:49:10.506Z",
        __v: 0,
      },
      {
        _id: "669e46b00d9fa47451a78d28",
        name: "Redmi Smart Fire TV 4K 43",
        productCategory: {
          _id: "6694b23aabbc52ba729ce602",
          name: "Laptop",
          isDeleted: false,
          createdAt: "2024-07-15T05:23:06.888Z",
          updatedAt: "2024-08-02T06:15:23.542Z",
          __v: 0,
        },
        productInformation: {
          description: "Enjoy breathtaking clarity and razor-sharp 4K HDR picture quality that makes your entertainment a visual treat.",
          countryOfOrgin: "China",
          manufacturerName: "Redmi",
          _id: "669e46b00d9fa47451a78d29",
        },
        images: [
          "https://rewardify-hw-academy.s3.ap-south-1.amazonaws.com/tv.png",
        ],
        isPrescriptionRequired: true,
        isDeleted: false,
        createdAt: "2024-07-22T11:46:56.443Z",
        updatedAt: "2024-07-22T11:46:56.443Z",
        __v: 0,
      },
      {
        _id: "669e42040d9fa47451a78b87",
        name: "Levi's Pant",
        productCategory: {
          _id: "6694b226abbc52ba729ce5fc",
          name: "Jeans",
          isDeleted: false,
          createdAt: "2024-07-15T05:22:46.534Z",
          updatedAt: "2024-08-02T06:14:17.619Z",
          __v: 0,
        },
        productInformation: {
          description: "When you breathe hard and fast, you pant. It's perfectly normal to pant after you finish running a marathon — or even after chasing your runaway dog",
          countryOfOrgin: "USA",
          manufacturerName: "Levi's",
          _id: "669e42040d9fa47451a78b88",
        },
        images: [
          "https://rewardify-hw-academy.s3.ap-south-1.amazonaws.com/pant.jpeg",
        ],
        isPrescriptionRequired: true,
        isDeleted: false,
        createdAt: "2024-07-22T11:27:00.397Z",
        updatedAt: "2024-07-22T11:27:00.397Z",
        __v: 0,
      },
      {
        _id: "669e41190d9fa47451a78afb",
        name: "Round Neck T-Shirt",
        productCategory: {
          _id: "6694b226abbc52ba729ce5fc",
          name: "Jeans",
          isDeleted: false,
          createdAt: "2024-07-15T05:22:46.534Z",
          updatedAt: "2024-08-02T06:14:17.619Z",
          __v: 0,
        },
        productInformation: {
          description: "a lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
          countryOfOrgin: "India",
          manufacturerName: "RRR",
          _id: "669e41190d9fa47451a78afc",
        },
        images: [
          "https://rewardify-hw-academy.s3.ap-south-1.amazonaws.com/New-Mockups---no-hanger---TShirt-Yellow.webp",
        ],
        isPrescriptionRequired: true,
        isDeleted: false,
        createdAt: "2024-07-22T11:23:05.491Z",
        updatedAt: "2024-07-22T11:23:05.491Z",
        __v: 0,
      },
    ],
    limit: 20,
    pageNo: 1,
  };

  // Transform the provided data into the required format
  useEffect(() => {
    const transformData = (data) => {
      const categories = {};

      data.forEach((product) => {
        const categoryName = product.productCategory.name;
        if (!categories[categoryName]) {
          categories[categoryName] = {
            title: categoryName,
            products: [],
          };
        }

        categories[categoryName].products.push({
          name: product.name,
          price: 100, // Default price
          quantity: "1 unit", // Default quantity
          available: true, // Default availability
        });
      });

      return Object.values(categories);
    };

    setAccordionData(transformData(providedData.data));
  }, []);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const toggleAvailability = (product) => {
    product.available = !product.available;
    setAccordionData([...accordionData]);
  };

  const handleDropdownSelect = (selected, product) => {
    if (selected === "Edit price") {
      navigate("/products/edit-prices", { state: { product } }); // Navigate to EditPrice with product data
    }
  };

  const filteredData = accordionData.map((category) => ({
    ...category,
    products: category.products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <MyProductsContainer>
      <Header>
        <div>
          <h2>My Product Listing</h2>
          <Button onClick={() => navigate("/products/add-products")}>
            + Add a Product
          </Button>
        </div>
        <SearchWrapper>
          <input
            type="text"
            placeholder="Search for products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchWrapper>
      </Header>
      {filteredData.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          products={item.products}
          isOpen={openAccordion === index}
          toggleAccordion={() => toggleAccordion(index)}
          toggleAvailability={toggleAvailability}
          onDropdownSelect={handleDropdownSelect}
        />
      ))}
    </MyProductsContainer>
  );
};

export default MyProducts;