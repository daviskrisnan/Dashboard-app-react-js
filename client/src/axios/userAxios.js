import axios from 'axios';
import Swal from 'sweetalert2';

const URL = 'http://localhost:3000/api/users'

const getusers = async (cb) => {
    try {
        let users = await axios({
            method: 'GET',
            url: URL
        })
        cb(users.data)
    } catch (e) {
        console.log(e)
    }
}

const addusers = async (user) => {
    try {
        await axios({
            method: 'POST',
            url: URL + "/add",
            data: user
        })
        Swal.fire(
            'Add user',
            'user has been added',
            'success'
        )
    } catch(e) {
        console.log(e)
    }
}

const editusers = async (id, user) => {
    try{
        let result = await axios({
            method: 'PUT',
            url: URL + '/edit/' + id,
            data: user
        })
        Swal.fire(
            'Edit user ' +id,
            'user ' + id + ' has been updated',
            'success'
        )
        console.log(result.data)
    } catch(e){
        console.log(e)
    }
}

const deleteusers = async (id, cb) => {
    try{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }) .then (async (result) => {
            if (result.isConfirmed) {
                let result = await axios({
                    method: 'DELETE',
                    url: URL + '/delete/' + id
                })

                Swal.fire(
                    'Deleted',
                    'Your file has been deleted',
                    'success'
                )
                cb()
            }
        })

    }catch(e){
        console.log(e)
    }
}
const lihatusers = async (id, cb) => {
    try{
        let result = await axios({
            method: 'GET',
            url: URL + '/info/' + id
        })
        cb(result.data)
    }catch(e){
        console.log(e)
    }
}

export { getusers, addusers, editusers, deleteusers, lihatusers }