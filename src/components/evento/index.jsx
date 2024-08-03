import react from "react";
import { Container } from "./style";
import Button from "../button";

const Evento = ({ user, ...props }) => {
  return (
    <Container>
      <p className="user">{user}</p>
      <p className="description">{props.children}</p>
      <div className="curtidas">
        {/* curtidas vindas do banco*/}
        <div>0</div>
        <Button text={"Curtir   "} />
      </div>
    </Container>
  );
};

export default Evento;
