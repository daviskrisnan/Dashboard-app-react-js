import React, { useState, useEffect } from 'react'
import { additems } from '../../axios/itemAxios'
import { useNavigate } from 'react-router-dom'
import { getbrands } from '../../axios/brandAxios'
import { getusers } from '../../axios/userAxios'
import LoadingBar from '../../helpers/LoadingBar'


const AddItem = () => {

    const [brands, setBrands] = useState([])
    const [users, setUsers] = useState([])

    useEffect( () => {
        getbrands(result => setBrands(result))
        getusers(result => setUsers(result))
    }, [])


const [form, setForm] = useState({
    name: "",
    price: 0,
    category: "",
    brandId: 0,
    userId: 0,
    image: "http://via.placeholder.com/150"
})

const navigation = useNavigate()

function handleSelectCategoryChange(event) {
    setForm({ ...form, category: event.target.value })
}

function handleSelectBrandsChange(event) {
    setForm({ ...form, brandId: event.target.value })
}

function handleSelectUserChange(event) {
    setForm({ ...form, userId: event.target.value })
}

const submitHandler = () => {
    additems(form)
    navigation('/')
}
return (
    <>
        <div className='row my-3'>
            <div className='w-100 text-center'>
                <h5>Create New Item</h5>
            </div>
            <div className='w-50 mx-auto'>
                <hr />
                <div className='mb-3'>
                    <label>Name Item: </label>
                    <input onChange={(e) => setForm({ ...form, name: e.target.value })}
                    type="text" className='form-control' placeholder='Masukkan Nama Item'></input>
                </div>
                <div className='mb-3'>
                    <label>Harga: </label>
                    <input onChange={(e) => setForm({ ...form, price: e.target.value })}
                    type="text" className='form-control' placeholder='Jumlah Harga'></input>
                </div>
                <div className='mb-3'>
                    <label>Kategori: </label>
                    <select className='form-select' id='category' name='category'
                        onChange={handleSelectCategoryChange} >
                        <option value='Sepatu'>Sepatu</option>
                        <option value='Jersey'>Jersey</option>
                        <option value='Sandal'>Sandal</option>
                        <option value='T-Shirt'>T-Shirt</option>
                        <option value='Polo'>Polo</option>
                        <option value='Jacket'>Jacket</option>
                        <option value='Socks'>Socks</option>
                        <option value='Bags'>Bags</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label>Image URL: </label>
                    <input onChange={(e) => setForm({ ...form, image: e.target.value })}
                    type="text" className='form-control' placeholder='Masukkan URL gambar item'></input>
                </div>

                <div className='mb-3'>

                    <label>Brand: </label>
                    <select class="form-select" id="brandId" name="brandId" 
                         onChange={handleSelectBrandsChange} >
                    <option value={0} selected>Select Brand</option>
                    {
                        brands.length > 0 ?
                        brands.map(brand => {
                            const { id, name } = brand;
                            return (
                                <option value={id}>{name}</option>
                            )
                        }) : <LoadingBar />
                    }
                    </select>
                </div>

                <div className='mb-3'>
                    <label>User: </label>
                    <select class="form-select" aria-label="Default select example"  id="userId" name="userId"
                        onChange={handleSelectUserChange}
                    >
                    <option value={0} selected>Select User</option>
                    {
                        users.length > 0 ?
                        users.map(user => {
                            const { id, name } = user;
                            return (
                                <option value={id}>{name}</option>
                            )
                        }) : <LoadingBar />
                    }
                    </select>
                </div>
                <div className='mb-3'>
                    <button onClick={() => submitHandler()} className='btn btn-block btn-primary'>Add</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddItem