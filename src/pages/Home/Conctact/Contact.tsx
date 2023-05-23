import React, { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);

    emailjs.sendForm('service_jqde9r4','template_q3sk3g9', form.current, 'dZ96iffI1Ryvowb67');

    document.getElementById('form')?.classList.add('refresh');

    setTimeout(function() {
      e.target.reset();
      document.getElementById('form')?.classList.remove('refresh');
    }, 2500);
  };


  return (
    <div className='contact__containter'>
      <h5 className='subtitle'>Ha szeretne írni valamit</h5>
      <h2 className='title'>Kapcsolat</h2>
      <div className='postcard__container'>
        <form id='form' ref={form} onSubmit={sendEmail} autoComplete="off" className='postcard__form'>
          <div className='postcard__frame'>
            <div className='postcard__body'>
              <div className='stamp'></div>
              <h2 className='postcard__title'>Írjon üzenetet!</h2>
              <div className='postcard__content'>
                <div className='message__container'>
                  <textarea className='message' placeholder='Ide írja az üzenetét...' name="message" required/>
                </div>
                <div className='postcard__attributes'>
                  <input type='text' placeholder='Név' name='name' className='input__name' required></input>
                  <input type='email' placeholder='E-mail cím' name='email' className='input__email' required></input>
                  <input type='text' placeholder='Tárgy' name='subject' className='input__subject' required></input>
                  <div className='send__button__container'>
                    <input type='submit' className='send__button' value="Küldés"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact