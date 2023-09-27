import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import { useParams, useHistory} from 'react-router-dom';
import { useEffect, useState, useRef  } from 'react';
import ContactsService from '../../services/ContactsService';
import Loader from '../../components/Loader';
import toast from '../../utils/toast';

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const contactFormeRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(
          id
        );

        setIsLoading(false);
      } catch {
        history.push('/')
        toast({
          type: 'danger',
          text: 'Contato não encontrado!'
        })
      }
    }


    loadContact()
  }, [id, history]);

  function handleSubmit() {
    console.log("função");
  }


  return (
    <>
      <Loader isLoading={isLoading}/>

      <PageHeader title="Editar Romário Alves" />
      <ContactForm
        buttonLabel="Salvar alterações"
        ref={contactFormeRef}
        onSubmit={handleSubmit}
      />
    </>

  );
}
