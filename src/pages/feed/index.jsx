import react from "react";
import { Container, Feed, Post } from "./style";
import Textarea from "../../components/textarea";
import Evento from "../../components/evento";
import Button from "../../components/button";
import Aside from "../../components/aside";

const Main = ({ ...props }) => {
  return (
    <>
      <Container>
        {/* usuario logado */}
        <div>Usuário</div>

        <div className="wrapper-content">
          <div className="aside">
            <Aside title={"Grupos"} />
            <Aside title={"Eventos"} />
          </div>

          <div className="feed">
            <Feed>
              <Post>
                <Textarea rows={5} placeholder={"Faça seu post"} />
                <div className="button-post">
                  <Button text={"Postar"} />
                </div>
              </Post>
              {/* terá um array de eventos abaixo */}
              <Evento user={"João"}>
                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
                ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
                dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
                ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
                dolor Lorem ipsum dolor Lorem ipsum dolor
              </Evento>
            </Feed>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Main;
