import React, { useState } from 'react'
import { addusers } from '../../axios/userAxios'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
const [form, setForm] = useState({
    name: "",
    image: "http://via.placeholder.com/150"
})

const navigation = useNavigate()

const submitHandler = () => {
    addusers(form)
    navigation('/users')
}
return (
    <>
        <div className='row my-3'>
            <div className='w-100 text-center'>
                <h5>Create New User</h5>
            </div>
            <div className='w-50 mx-auto'>
                <hr />
                <div className='mb-3'>
                    <label>Nama User: </label>
                    <input onChange={(e) => setForm({ ...form, name: e.target.value })}
                    type="text" className='form-control' placeholder='Masukkan nama user'></input>
                </div>
                
                <div className='mb-3'>
                    <button onClick={() => submitHandler()} className='btn btn-block btn-primary'>Add</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddUser