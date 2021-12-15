import React from 'react';

export default function MemberForm(props) {

    const { values, update, submit } = props
  
    const onChange = evt => {      
      // console.log(evt.target.name)
      const name = evt.target.name;
      const { value } = evt.target;
      // const { name, value } = evt.target;  -- same as above consts
  
      update(name, value);
    }
  
    const onSubmit = evt => {
      evt.preventDefault();
      submit();
    }
  
    return (
      <form className='form container' onSubmit={onSubmit}>
        <div className='form-group inputs'>

          <label>Member Name
                <input
                  name='name'  // this name has to be exactly the same as label name
                  type='text'
                  placeholder='Type your name here'
                  maxLength='50'
                  value={values.memberName}
                  onChange={onChange}
                />
          </label>
  
          <label>Email
                <input
                  name='email'  // this name has to be exactly the same as label name
                  type='email'
                  placeholder='Type your email here'
                  value={values.email}
                  onChange={onChange}
                />
          </label>

          <label>Role
                <select value={values.role} name='role' onChange={onChange}>
                  <option value=''>-- Select a Role --</option>
                  <option value='Newbie'>New Member</option>
                  <option value='Current'>Current Member</option>
                  <option value='Past'>Previous Member</option>
                </select>
          </label>
  
          <div className='submit'>
            <button>submit</button>
          </div>
        </div>
      </form>
    )
  }
