import { Link } from 'react-router-dom';
import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';
import arrow from '../../assets/images/icons/arrow.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar pelo nome..." />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

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
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

fetch('http://localhost:3001/contacts')
  .then(async (response) => {
    const json = await response.json();
    console.log('response: ', json)
  })
  .catch((error) => {
    console.log('erro: ', error);
  })
