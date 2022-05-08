import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { 
    HomePage, 
    Item, ListItem, AddItem, EditItem,
    Brand, ListBrand, AddBrand, EditBrand, 
    User, ListUser, AddUser, EditUser, 
} from '../pages'

const MainContent = () => {
  return (
    <div className='container p-3'>
        <h3>dashboard</h3>

        <Routes>
            {/* <Route path='/' element={
                <HomePage />
            }></Route> */}
            <Route path='/' element={ <Item/> }>
                <Route path='/' element={ <ListItem/> }></Route>
                <Route path='add' element={ <AddItem/> }></Route>
                <Route path='edit'>
                    <Route path=':id' element={ <EditItem/> }></Route>
                </Route>
            </Route>
            <Route path='/brands' element={ <Brand/>}>
                <Route path='/brands' element={ <ListBrand/> }></Route>
                <Route path='/brands/add' element={ <AddBrand/> }></Route>
                <Route path='/brands/edit'>
                    <Route path=':id' element={ <EditBrand/> }></Route>
                </Route>
            </Route>
            <Route path='/users' element={ <User />}>
                <Route path='/users' element={ <ListUser/> }></Route>
                <Route path='/users/add' element={ <AddUser/> }></Route>
                <Route path='/users/edit'>
                    <Route path=':id' element={ <EditUser/> }></Route>
                </Route>
            </Route>
        </Routes>
    </div>
  )
}

export default MainContent