import React, { useState } from 'react'
import { addbrands } from '../../axios/brandAxios'
import { useNavigate } from 'react-router-dom'

const AddBrand = () => {
const [form, setForm] = useState({
    name: "",
    image: "http://via.placeholder.com/150"
})

const navigation = useNavigate()

const submitHandler = () => {
    addbrands(form)
    navigation('/brands')
}
return (
    <>
        <div className='row my-3'>
            <div className='w-100 text-center'>
                <h5>Create New Brand</h5>
            </div>
            <div className='w-50 mx-auto'>
                <hr />
                <div className='mb-3'>
                    <label>Nama Brand: </label>
                    <input onChange={(e) => setForm({ ...form, name: e.target.value })}
                    type="text" className='form-control' placeholder='Masukkan Merk'></input>
                </div>
                
                <div className='mb-3'>
                    <button onClick={() => submitHandler()} className='btn btn-block btn-primary'>Add</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddBrand