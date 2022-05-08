import React, { useState, useEffect } from 'react'
import { getItems, deleteItems } from '../../axios/itemAxios'
import LoadingBar from '../../helpers/LoadingBar'
import { Link, useNavigate } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa';

const ListItem = () => {
    const [items, setItems] = useState([])

    const navigation = useNavigate()

    useEffect( () => {
        getItems(result => setItems(result))
    }, [])

    const deleteHandler = (id) => {
        deleteItems(id, () => {
            window.location.reload(); 
        })
        navigation('/')
 
    }

  return (
    <>
        <div className='row my-3 text-center'>
            <div className='col-9 mx-auto'>
                <div className='w-100'>
                    <Link to="/add" className='btn btn-sm btn-primary my-2'>
                        <span className='me-2'>
                            <FaPlus />
                        </span>
                        Add Items
                    </Link>
                </div>
                <div className='w-100'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Harga</th>
                                <th>Kategori</th>
                                <th>Brand</th>
                                <th>User</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.length > 0 ?
                                items.map(item => {
                                    const { id, name, price, category, brand, user, image } = item;
                                    return (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>
                                                <div className='w-10 mb-3 text-center' >
                                                    <img src={image} className='img-flud rounded-circle'></img>
                                                </div>
                                                {name}
                                            </td>
                                            <td>Rp. {price}</td>
                                            <td>{category}</td>
                                            <td>{brand.name}</td>
                                            <td>{user.name}</td>
                                            <td>
                                                <Link to={`/edit/${id}`} className='btn btn-sm btn-info'>Edit</Link>
                                                <button onClick={ () => deleteHandler(+id) } className='btn btn-sm btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }) : <LoadingBar />
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default ListItem