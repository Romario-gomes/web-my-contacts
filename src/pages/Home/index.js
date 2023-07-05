import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';
import arrow from '../../assets/images/icons/arrow.svg';

export default function Home() {
  return (
    <>
      <Container>
        <InputSearchContainer>
          <input type="text" placeholder="Pesquisar pelo nome..." />
        </InputSearchContainer>
        <Header>
          <strong>3 contatos</strong>
          <a href="/">Novo contato</a>
        </Header>
      </Container>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Romário Alves</strong>
              <small>instagram</small>
            </div>
            <span>romario.dev@gmail.com</span>
            <span>(11) 99999-9999</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Romário Alves</strong>
              <small>instagram</small>
            </div>
            <span>romario.dev@gmail.com</span>
            <span>(11) 99999-9999</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Romário Alves</strong>
              <small>instagram</small>
            </div>
            <span>romario.dev@gmail.com</span>
            <span>(11) 99999-9999</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </>
  );
}
