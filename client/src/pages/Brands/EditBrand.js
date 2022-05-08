import React, { useEffect, useState } from 'react'
import { lihatbrands, editbrands } from '../../axios/brandAxios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBrand = () => {
  const [form, setForm] = useState({
    name: "",
    image: ""
  })
  
  const navigation = useNavigate()
  const params = useParams()
  
  const getInfobrand = () => {
    const { id } = params;
    lihatbrands(+id, result => {
      setForm({
        name: result.name,
        image: result.image
      })
    })
  }
  
  useEffect( () => {
    getInfobrand()
  }, [])
  
  const submitHandler = () => {
      editbrands(+params.id, form)
      navigation('/brands')
  }

  return (
      <>
          <div className='row my-3'>
              <div className='w-100 text-center'>
                  <h5>Edit brand</h5>
              </div>
              <div className='w-50 mx-auto'>
                  <hr />
                  <div className='mb-3'>
                      <label>Nama brand: </label>
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

export default EditBrand