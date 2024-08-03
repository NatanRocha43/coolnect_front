import react from "react";
import { AsideWrapper, Container, Title } from "./style";

const Aside = ({ title, ...props }) => {
  return (
    <AsideWrapper>
      <Title>{title}</Title>
      {/* array de eventos */}
      <Container>afadfas</Container>
      <Container>afadfas</Container>
    </AsideWrapper>
   
  );
};

export default Aside;
