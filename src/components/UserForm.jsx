import React from 'react'

const UserForm = () => {
  return (
    <div>

      <div className="form-control">
        <label htmlfor='name'>Nome</label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Digite seu nome'
          required/>
      </div>

      <div className="form-control">
        <label htmlfor='name'>E-mail</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Digite seu e-mail'
          required/>
      </div>

    </div>
  )
}

export default UserForm