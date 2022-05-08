import React from 'react';
import { Outlet } from 'react-router-dom';

const User = () => {
  return (
    <div className='my-3'>
        <div className='w-100 my-3 text-center'>
            <div className='flex'>
                <h3>List User</h3>
            </div>
        </div>
        <Outlet/>
      </div>
  )
}

export default User