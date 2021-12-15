import React, { useState } from 'react';
import './App.css';
import MemberForm from './Components/MemberForm';
import Member from './Components/Member';
import { Route, Link } from 'react-router-dom';


// the shape of the state that drives the form
const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [members, setMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.memberName,
      email: formValues.email,
      role: formValues.role
    }

    if(!newMember.memberName || !newMember.email || !newMember.role) {
      setError('All fields are required');
    }
  }


  return (
    <div className="App">
      <h2>{error}</h2>

      <MemberForm 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
