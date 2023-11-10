import React from "react";
import { useNavigate } from "react-router-dom";
import { EnterButton, PageContainer, Title } from "../../Styles/Pages/LandingPage";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Title>Welcome to the World of Videogames</Title>
      <EnterButton onClick={() => navigate("/home")}>Enter</EnterButton>
    </PageContainer>
  );
};

export default LandingPage;
