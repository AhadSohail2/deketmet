import React, { useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';
import Image from 'next/image';

function Contact() {

    const [success, setSuccess] = useState();
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSuccess(null);
            setSubmit(false);
        }, 5000)
    }, [submit])

    const formRef = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();

        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

        const name = e.target.name.value;
        const email = e.target.email.value;
        const wNo = e.target.wNo.value;
        const service = e.target.service.value;
        const message = e.target.message.value;

        try {
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    to_name: name,
                    from_name: email,
                    message: message,
                    email: email,
                    name: name,
                    wNo: wNo,
                    service: service,
                    reply_to: "ahadsohail4@gmail.com",
                }
            );

            console.log('Email sent successfully:', response);
            setSubmit(true);
            setSuccess(true);

            e.target.name.value = "";
            e.target.email.value = "";
            e.target.wNo.value = "";
            e.target.service.value = "both";
            e.target.message.value = "";


        } catch (error) {
            setSubmit(true)
            setSuccess(false)
            console.error('Error sending email:', error);
        }

    }

    return (
        <>
            {submit &&
                <div className={`${styles.message} ${success ? styles.success : styles.error}`}>
                    {!success && <p>Something Went Wrong. Try Again</p>}
                    {success && <p>We Will Contact You Shortly</p>}
                </div>
            }
            <div id='contact' ref={formRef} className={`container ${styles.container}`}>
                <h3 className={styles.heading}>Contact Us</h3>
                <p className={styles.subHead}>Start Making Your Product</p>
                <div className={styles.formDiv} data-aos="zoom-in-down" data-aos-duration="1000">
                    <form onSubmit={submitHandler}>
                        <div>
                            <input type='text' name='name' placeholder='Name' required />
                            <input type='email' name='email' placeholder='Email' required />
                        </div>
                        <div>
                            <input type='tel' name='wNo' placeholder='Whatsapp Number' required />
                            <select name='service'>
                                <option value="null">Select Service</option>
                                <option value="both">Both</option>
                                <option value="web">Web Development</option>
                                <option value="android">Android App Development</option>
                            </select>
                        </div>
                        <div>
                            <textarea name='message' placeholder='Message' required ></textarea>
                        </div>
                        <button className={styles.submitButton}>Submit</button>
                    </form>
                    <div className={styles.illus} data-aos="zoom-in-up" data-aos-duration="1000">
                        <Image src="/homeIllus.svg" alt='' width={600} height={400} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact