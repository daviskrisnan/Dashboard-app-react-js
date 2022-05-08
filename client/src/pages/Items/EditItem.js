import React, { useEffect, useState } from 'react'
import { lihatItems, editItems } from '../../axios/itemAxios'
import { useNavigate, useParams } from 'react-router-dom'

const EditItem = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    brandId: "",
    userId: "",
    image: ""
  })

const navigation = useNavigate()
const params = useParams()

const getInfoItem = () => {
  const { id } = params;
  lihatItems(+id, result => {
    setForm({
      name: result.name,
      price: result.price,
      category: result.category,
      brandId: result.brandId,
      userId: result.userId,
      image: result.image
    })
    console.log(result)
  })
}

useEffect( () => {
  getInfoItem()
}, [])

const submitHandler = () => {
    editItems(+params.id, form)
    navigation('/')
}
return (
    <>
        <div className='row my-3'>
            <div className='w-100 text-center'>
                <h5>Edit Item</h5>
            </div>
            <div className='w-50 mx-auto'>
                <hr />
                <div className='mb-3'>
                    <label>Name Item: </label>
                    <input onChange={(e) => setForm({ ...form, name: e.target.value })}
                    type="text" className='form-control' value={form.name}></input>
                </div>
                <div className='mb-3'>
                    <label>Harga: </label>
                    <input onChange={(e) => setForm({ ...form, price: e.target.value })}
                    type="text" className='form-control' value={form.price}></input>
                </div>
                <div className='mb-3'>
                    <label>Kategori: </label>
                    <input onChange={(e) => setForm({ ...form, category: e.target.value })}
                    type="text" className='form-control' value={form.category}></input>
                </div>
                <div className='mb-3'>
                    <label>Image URL: </label>
                    <input onChange={(e) => setForm({ ...form, image: e.target.value })}
                    type="text" className='form-control' value={form.image}></input>
                </div>
                <div className='mb-3'>
                    <label>Brand: </label>
                    <input onChange={(e) => setForm({ ...form, brandId: e.target.value })}
                    type="text" className='form-control'  value={form.brandId}></input>
                </div>
                <div className='mb-3'>
                    <label>User: </label>
                    <input onChange={(e) => setForm({ ...form, userId: e.target.value })}
                    type="text" className='form-control'  value={form.userId}></input>
                </div>
                <div className='mb-3'>
                    <button onClick={() => submitHandler()} className='btn btn-block btn-primary'>Edit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default EditItem