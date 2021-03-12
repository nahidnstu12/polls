import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';

function PollModal({
  modal,
  toggle,
  submit,
  btnValue,
  header,
  poll,
  isUpdate,
  handleChange
}) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} unmountOnClose={true}>
        <ModalHeader toggle={toggle}>{header}</ModalHeader>
        <ModalBody>
          <Form onSubmit={submit}>
            <FormGroup>
              <Input
                type='text'
                placeholder='Give a poll title'
                className='my-2'
                value={poll.title}
                onChange = {handleChange}
                name='title'
              />

              <Input
                type='textarea'
                placeholder='Give a poll description'
                name='description'
                onChange = {handleChange}
                value={poll.description}
              />
             
            </FormGroup>             
            <Button color='primary'>{btnValue}</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default PollModal;
