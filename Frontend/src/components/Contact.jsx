import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  

  const handleSendMessage = async () => {
    // console.log(name, email, subject)
    
    await axios.post("http://localhost:4000/api/v1/message/send", {name,email,subject,number,message})
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setNumber("");
        setSubject("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Bajaj Road, Sikar (Raj.), 332001</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +91 759-754-3250</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>triosevents1727@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4488.160345247047!2d75.13786637684164!3d27.616329787170162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca4cf5f67a9cf%3A0x853a7c23cbd3288f!2sDoliyan%20Ka%20Bass%2C%20Behind%20Jain%20School%2C%20Bajaj%20Road%2C%20Sikar!5e0!3m2!1sen!2sin!4v1721199337701!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <div>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input className="sub1"
                type="text"
                placeholder="Name of Event"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
    
              <input className="sub2"
                  type="number"
                  placeholder="Mobile Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
              />
              <textarea
                rows={8}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Contact;
