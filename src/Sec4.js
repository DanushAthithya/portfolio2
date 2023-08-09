import React, { useState,useRef } from 'react';
import emailjs from 'emailjs-com';
import './Sec4.css';


const Sec4 = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function validate() {
    if (name === "") {
      alert("Name is Empty");
      return false;
    } else if (!/^[A-Za-z -]{3,25}$/.test(name)) {
      alert("Invalid Name");
      return false;
    }


    if (email === "") {
      alert("Email is Empty");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email address");
      return false;
    }
    return true;
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sof9c2v','template_8gz3rod', form.current,'I9mb3AFvM28OHgAq1')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setName("");
      setEmail("");
      setMessage("");
      sendEmail(e);
      alert("Message Sent Successfully")
    }
  };
  
  return (
    <div className="Sec4 bg-blue-500">
        <div className="in-sec">
            <h1 className="project-heading myfont text-orange-400 text-center pb-2">Contact Me</h1>
            <form onSubmit={handleSubmit} ref={form} className='bgcolor '>
                <input
                name="from_name"
                    type="text"
                    id="from_name"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                
                />
                <input
                type="email"
                name="email"
                    id="email"
                value={email}
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                
                />
                <textarea
                id="message"
                name="message"
                value={message}
                placeholder="Feel free to ask anything"
                onChange={(e) => setMessage(e.target.value)}
                
                ></textarea><br/>
                <button type="submit" className='rounded'>Submit</button>
            </form>
        </div>
    </div>
  );
};

export default Sec4;
