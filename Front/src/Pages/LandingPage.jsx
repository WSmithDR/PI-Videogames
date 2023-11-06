import React from "react";
import { PageContainer, Title, EnterButton } from "../Styles/landingPage";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Title>Welcome to the World of Video Games</Title>
      <EnterButton onClick={() => navigate("/home")}>Enter</EnterButton>
    </PageContainer>
  );
};

export default LandingPage;
