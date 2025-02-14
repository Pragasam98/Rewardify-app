import React from "react";
import { useNavigate } from "react-router-dom";
import {
  
  LoginContainer,
  LoginCard,
  Logo,
  Heading,
  Description,
  CarouselDots,
  Dot,
  Button,
  Terms,
} from "./LoginStyles";
import logo from "./images/logo.png";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/enter-mobile-number");
  };

  const handleContactUs = () => {
    navigate("/contact");
  };

  return (
    <>
      
      <LoginContainer>
        <LoginCard>
          <Logo>
            <img src={logo} alt="Logo" />
          </Logo>
          <Heading>Grow your Business Exponentially!</Heading>
          <Description>
              Pay less on each transaction you <br /> make with our App.
          </Description>
          <CarouselDots>
            <Dot className="active" />
            <Dot />
            <Dot />
          </CarouselDots>
          <Button className="login" onClick={handleLogin}>
            Login
          </Button>
          <Button className="contact" onClick={handleContactUs}>
            Contact Us
          </Button>
          <Terms>
            By clicking, you agree to our{" "}
            <a href="/terms">Terms & Conditions</a> and{" "}
            <a href="/privacy">Privacy Policy</a>.
          </Terms>
        </LoginCard>
      </LoginContainer>
    </>
  );
};

export default Login;
