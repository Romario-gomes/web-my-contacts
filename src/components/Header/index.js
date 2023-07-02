import { Container, InputSearchContainer } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} width="201" alt="MyContacts" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar Pelo nome..." />
      </InputSearchContainer>
    </Container>
  );
}
