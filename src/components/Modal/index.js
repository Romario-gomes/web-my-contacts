import PropTypes from 'prop-types';
import { Overlay, Container, Footer } from './styles';
import Button from '../Button';
import ReactDOM from 'react-dom';

export default function Modal({ danger, title, children, cancelLabel, confirmLabel, onCancel, onConfirm }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>

        <div className="modal-body">
        a

        </div>

        {children}
        <Footer>
          <button type="button" className="cancel-button" onClick={onCancel}>{cancelLabel}</button>
          <Button type="button" onClick={onConfirm} danger={danger}>{confirmLabel}</Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );

}

Modal.propTypes = {
  danger: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,

};

Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar'
};
