import styled from 'styled-components';
import backgroundImg from "./../Assets/wallpepers/1.jpg";
export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${backgroundImg}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: backgroundAnimation 20s linear infinite;
  
  @keyframes backgroundAnimation {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  transform: scale(1);
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.1); 
  }
`;

export const EnterButton = styled.button`
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    background-color: #fff;
    color: #000;
    transform: scale(1.1);
  }
`;
