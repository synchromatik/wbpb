import React, { useReducer } from 'react';

const initialFormState = {
  name: '',
  email: '',
  message: '',
  error: false,
  sending: false,
  statusMessage: null,
  success: null,

};

function formReducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

// function formValidationReducer(state) {
//   return {
//     ...state,

//   }
// }

function Form() {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };
  const { name, email, message } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmit}>
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
        <input type="text" name="message" id="message" placeholder="message" value={message} onChange={onChange} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

export default Form;
