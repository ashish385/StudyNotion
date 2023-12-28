import React from 'react'
import ContactUsForm from '../ContactPage/ContactUsForm';

const ContactFormSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-5 ">
        <h1 className="text-3xl text-center font-bold">Get in Touch</h1>
        <p className='text-sm text-center text-richblack-300'>We’d love to here for you, Please fill out this form.</p>
        <div>
          <ContactUsForm />
        </div>
      </div>
    </>
  );
}

export default ContactFormSection
