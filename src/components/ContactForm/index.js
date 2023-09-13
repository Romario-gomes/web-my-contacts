import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import isEmailValid from '../../utils/isEmailValid';

import { Form, ButtonContainer } from './styles';

import CategoriesService from '../../services/CategoriesServices';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import useErrors from '../../hooks/useErrors';
import formatPhone from '../../utils/FormatPhone';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const { setError, removeError, getErrorsMessageByFieldName, errors } = useErrors();


  const isFormValid = (name && errors.length === 0);


  useEffect(() => {
    async function loadCategories() {
      const categoriesList = await CategoriesService.listCategories();

      setCategories(categoriesList);
    }

    loadCategories();
 }, []);


  function handleNameChange(event) {
    setName(event.target.value);

    if(!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else{
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if(event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' })
    } else {
      removeError('email');
    }
  }


  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));

    formatPhone()

    if(event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' })
    } else {
      removeError('email');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      name, email, phone, category,
    });
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorsMessageByFieldName('name')}>
        <Input
          error={getErrorsMessageByFieldName('name')}
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup error={getErrorsMessageByFieldName('email')}>
        <Input
          error={getErrorsMessageByFieldName('email')}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => { setCategory(event.target.value); }}
        >
          <option value="">Sem categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          { buttonLabel }
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
