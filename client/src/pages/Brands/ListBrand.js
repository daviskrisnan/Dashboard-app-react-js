import React, { useState, useEffect } from 'react'
import { getbrands, deletebrands } from '../../axios/brandAxios'
import LoadingBar from '../../helpers/LoadingBar'
import { Link, useNavigate } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa';

const ListBrand = () => {
    const [brands, setbrands] = useState([])

    const navigation = useNavigate()

    useEffect( () => {
        getbrands(result => setbrands(result))
    }, [])

    const deleteHandler = (id) => {
        deletebrands(id, () => {
            window.location.reload(); 
        })
        navigation('/brands')
 
    }

  return (
    <>
        <div className='row my-3 text-center'>
            <div className='col-9 mx-auto'>
                <div className='w-100'>
                    <Link to="/brands/add" className='btn btn-sm btn-primary my-2'>
                        <span className='me-2'>
                            <FaPlus />
                        </span>
                        Add brands
                    </Link>
                </div>
                <div className='w-100'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                brands.length > 0 ?
                                brands.map(brand => {
                                    const { id, name } = brand;
                                    return (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td>
                                                <Link to={`/brands/edit/${id}`} className='btn btn-sm btn-info'>Edit</Link>
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

export default ListBrand