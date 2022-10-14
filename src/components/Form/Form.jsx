import { useState } from 'react';
import { addUser } from 'components/redux/users/userActions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';

function MyForm() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const options = {
    name: setName,
    mail: setMail,
  };
  const funcToConnectActionToReducer = useDispatch();
  const state = useSelector(state => state);

  const onInpurChange = e => {
    const { name, value } = e.target;
    options[name](value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const isDublicate = state.users.find(el => {
      return el.mail === mail;
    });
    if (isDublicate) {
      return alert(`this ${isDublicate.name} is already exist`);
    }

    funcToConnectActionToReducer(addUser({ name, mail }));
    setName('');
    setMail('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={mail}
          name="mail"
          onChange={onInpurChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your Name"
          value={name}
          name="name"
          onChange={onInpurChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

// export default BasicExample;

export default MyForm;
