import React, { useState, useEffect } from 'react'
import { getusers, deleteusers } from '../../axios/userAxios'
import LoadingBar from '../../helpers/LoadingBar'
import { Link, useNavigate } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa';

const ListUser = () => {
    const [users, setusers] = useState([])

    const navigation = useNavigate()

    useEffect( () => {
        getusers(result => setusers(result))
    }, [])

    const deleteHandler = (id) => {
        deleteusers(id, () => {
            window.location.reload(); 
        })
        navigation('/users')
 
    }

  return (
    <>
        <div className='row my-3 text-center'>
            <div className='col-9 mx-auto'>
                <div className='w-100'>
                    <Link to="/users/add" className='btn btn-sm btn-primary my-2'>
                        <span className='me-2'>
                            <FaPlus />
                        </span>
                        Add users
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
                                users.length > 0 ?
                                users.map(user => {
                                    const { id, name } = user;
                                    return (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td>
                                                <Link to={`/users/edit/${id}`} className='btn btn-sm btn-info'>Edit</Link>
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

export default ListUser