import React from 'react';
import useFormFields from '../../helpers/useFormFields';
import useModal from '../../helpers/useModal';
import Modal from '../../helpers/Modal';

import emailjs from 'emailjs-com';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const { fields, setFields, resetFields } = useFormFields(initialState);
  const { isShowing, toggle } = useModal();
  const submitForm = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     'contact_form',
    //     'portfolio_email',
    //     e.target,
    //     'user_3kTZWLWPDMYKracgq5h6D'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    
    toggle();
    resetFields();

    
  };

  const { name, email, message } = fields;
 
  return (
    <section className="contact">
      <h2 className="contact__title">Contact</h2>

      <div className="contact__bg"></div>
      <form onSubmit={submitForm} className="contact__form">
        <div className="contact__form--input">
          <input
            id="name"
            aria-label="name"
            type="text"
            className="contact__form--input-field"
            placeholder="Name"
            value={name}
            name="name"
            onChange={setFields}
            required
          />
        </div>
        <div className="contact__form--input">
          <input
            id="email"
            aria-label="email"
            type="email"
            placeholder="Email"
            value={email}
            name="email"
            onChange={setFields}
            required
          />
        </div>
        <div className="contact__form--input">
          <textarea
            id="message"
            autoComplete="off"
            aria-label="message"
            rows="5"
            placeholder="Message"
            value={message}
            name="message"
            onChange={setFields}
            required
          />
        </div>
        <div className="contact__form--input">
          <button className="contact__button" type="submit">
            <span>Submit</span>
          </button>
        </div>
      </form>
      <Modal isShowing={isShowing} hide={toggle} />
    </section>
  );
};

export default Contact;
