import React from 'react';
import { Outlet } from 'react-router-dom';

const Item = () => {
  
  return (
    <div className='my-3'>
        <div className='w-100 my-3 text-center'>
            <div className='flex'>
                <h3>Halaman Utama</h3>
                <p>Welcome to TokoOlahraga</p>
            </div>
        </div>
        <Outlet/>

        {/* <div className='row text-center my-3'>
            <div className='col-7 mx-auto'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='card'>
                            <img className='img-card-top' src='https://via.placeholder.com/150'/>
                            <div className='card-body'>
                                <div className='home-icons'>
                                    <MdFormatListNumbered />
                                </div>
                                <div className='home-text'>
                                    <h5>Easy to Assign</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

    </div>
  )
}

export default Item