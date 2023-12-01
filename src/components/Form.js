import React, { useState } from 'react'
import styles from './Form.module.css'

export default function Form() {

  const [name, setName] = useState("Montu");
  const [email, setEmail] = useState("montujind1609@gmail.com");
  const [text, setText] = useState("Montu jind is the best coder");


  const SubmitForm = (event) => {
    setName(event.target.value);
    setEmail(event.target.value);
    setText(event.target.value);

    // console.log(setName("name",e.target.value));
    // console.log(setEmail("email",e.target.value));
    // console.log(setText("text",e.target.value));
  }
  // console.log({
  // });

  return (
    <div className={styles.container}>
      <div className="form">
        <label htmlFor='name'>Name</label>
        <input type='text' id='name'></input>

        <label htmlFor='email'>Email</label>
        <input type='email'id='email'></input>

        <label htmlFor='text'>Text</label>
        <textarea type='text' id='text'></textarea>


        <button className="subbtn" onClick={(e)=>SubmitForm(e)}>Submit</button>
        <div>
          {name + " " + email + " " + text}
        </div>

      </div>
    </div>
  )
}
