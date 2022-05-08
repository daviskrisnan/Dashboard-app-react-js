import React, { useEffect, useState } from 'react'
import { lihatusers, editusers } from '../../axios/userAxios'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
  const [form, setForm] = useState({
    name: "",
    image: ""
  })
    
  const navigation = useNavigate()
  const params = useParams()
    
  const getInfouser = () => {
    const { id } = params;
    lihatusers(+id, result => {
      setForm({
        name: result.name,
        image: result.image
      })
    })
  }
  
  useEffect( () => {
    getInfouser()
  }, [])
  
  const submitHandler = () => {
      editusers(+params.id, form)
      navigation('/users')
  }

  return (
      <>
          <div className='row my-3'>
              <div className='w-100 text-center'>
                  <h5>Edit user</h5>
              </div>
              <div className='w-50 mx-auto'>
                  <hr />
                  <div className='mb-3'>
                      <label>Nama user: </label>
                      <input onChange={(e) => setForm({ ...form, name: e.target.value })}
                      type="text" className='form-control' value={form.name}></input>
                  </div>
                  
                  <div className='mb-3'>
                      <button onClick={() => submitHandler()} className='btn btn-block btn-primary'>Edit</button>
                  </div>
              </div>
          </div>
      </>
    )
  }

export default EditUser