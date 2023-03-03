import React, { useRef, useState } from 'react'
import styles from './contactForm.module.css';

function ContactFrom() {

  const [emailSent, setEmailSent] = useState(false);

  const nameRef = useRef();
  const WhatsappRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const whatsapp = WhatsappRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        whatsapp: whatsapp,
        subject: subject,
        message: message
      })
    };

    fetch('../../api/sendMail', requestOptions)
      .then(response => {
        if (!response.ok) {
          return console.log(response)
        }
       return response.json()
      }
      )

      .then((data) => {
        setEmailSent(true)
      })
      .catch(err => { console.log(err) })
  }


  return (
    <form data-aos="flip-up" onSubmit={submitHandler} className={styles.form}>
      {emailSent && <h3>We will contact you soon</h3>}
      <input type="text" ref={nameRef} placeholder='Your Name' required={true}></input>
      <input type="text" ref={WhatsappRef} placeholder='Whatsapp Number(Optional)'></input>
      <input type="text" ref={emailRef} placeholder='Your Email' required={true}></input>
      <input type="text" ref={subjectRef} placeholder='Subject' required={true}></input>
      <textarea rows="6" ref={messageRef} placeholder='Write your message Here' required={true}></textarea>
      <input type="submit" value="Submit Now"></input>
    </form>

  )
}

export default ContactFrom