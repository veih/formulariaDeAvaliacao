import React from 'react'

const UserForm = ({data, upDataFieldHandler }) => {
  return (
    <div>

      <div className="form-control">
        <label htmlfor='name'>Nome</label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Digite seu nome'
          required
          value={data.name || ''}
          onChange={(e) => upDataFieldHandler('name', e.target.value)}
          />
      </div>

      <div className="form-control">
        <label htmlfor='name'>E-mail</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Digite seu e-mail'
          required
          value={data.email || ''}
          onChange={(e) => upDataFieldHandler('email', e.target.value)}
          />
      </div>

    </div>
  )
}

export default UserForm