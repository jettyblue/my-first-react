import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
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
      memberName: formValues.memberName.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if(!newMember.memberName || !newMember.email || !newMember.role) {
      setError('All fields are required');
    }else {
      axios.post('https://fakeapi.com', newMember)
        .then(res => {
          // console.log(res)
          const memberFromServer = res.data;
          setMembers([ memberFromServer, ...members ]); // get friendFromServer as well as all the initial friends
          setFormValues(initialFormValues);
        }).catch(err => console.error(err))
        .finally(() => setError(''))
    }
  }

  useEffect(() => {
    axios.get('https://fakeapi.com').then(res => setMembers(res.data))
  }, [])


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
