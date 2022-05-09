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
        <div className='row g-2'>

                <div className='my-3 text-center'>
                    <Link to="/add" className='btn btn-sm btn-primary my-2'>
                        <span className='me-2'>
                            <FaPlus />
                        </span>
                        Add Items
                    </Link>
                </div>
                {
                    items.length > 0 ?
                    items.map(item => {
                        const { id, name, price, category, brand, user, image } = item;
                        return (
                            <div key={id} className='card col-sm-11 col-md-5 col-lg-3 mx-5'>
                                <img className='card-img-top' src={image} alt='Card cap'></img>
                                <div className='card-body'>
                                    <h5 className='card-title text-center'>{name}</h5>
                                    <p className='card-title'>Rp. {price}</p>
                                    <p className='card-title'><strong>{category}</strong></p>
                                    <p className='card-title'>{brand.name}</p>
                                    <p className='card-title'>{user.name}</p>

                                    <div className='row col-12 mx-auto'>
                                        <div className='col-2 text-center'>
                                            <Link to={`/edit/${id}`} className='btn btn-sm btn-info'>Edit</Link>
                                        </div>
                                        <div className='col-2 text-center'>
                                            <button onClick={ () => deleteHandler(+id) } className='btn btn-sm btn-danger'>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <LoadingBar/>
                }

        </div>
    </>
  )
}

export default ListItem