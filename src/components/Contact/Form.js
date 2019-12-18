import React, { useReducer, useState } from 'react';

const initialFormState = {
  name: '',
  email: '',
  message: '',
};
function formReducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}
function Form() {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const [status, setStatus] = useState({
    error: false,
    errorList: [],
    success: null,
    isSending: 'false',
  });
  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const {
    name, email, message,
  } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://markocar.myqnapcloud.com:3000/email', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        message: state.message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setStatus({
            error: true,
            errorList: data.errors,
          });
        } else {
          setStatus({
            error: false,
            errorList: [],
            success: true,
          });
        }
      }).catch((error) => {
        throw (error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {status.errorList.map((item, index) => <li key={index}>{item.msg}</li>)}
      {status.success ? <li>sent</li> : null}
      <label htmlFor="name">
        Name
        <input type="text" name="name" id="name" placeholder="name" value={name} onChange={onChange} />
      </label>
      <label htmlFor="name">
        E-Mail
        <input type="text" name="email" id="email" placeholder="email" value={email} onChange={onChange} />
      </label>
      <label htmlFor="name">
        Message
        <textarea type="text" name="message" id="message" placeholder="message" value={message} onChange={onChange} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

export default Form;
