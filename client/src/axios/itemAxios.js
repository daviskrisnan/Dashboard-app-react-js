import axios from 'axios';
import Swal from 'sweetalert2';

const URL = 'http://localhost:3000/api/items'

const getItems = async (cb) => {
    try {
        let items = await axios({
            method: 'GET',
            url: URL
        })
        cb(items.data)
    } catch (e) {
        console.log(e)
    }
}

const additems = async (item) => {
    try {
        await axios({
            method: 'POST',
            url: URL + "/add",
            data: item
        }).then( res => {
            Swal.fire(
                'Add Item',
                'Item has been added',
                'success'
            )
        }).catch( err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        })
        
    } catch(e) {
        console.log(e)
    }
}

const editItems = async (id, item) => {
    try{
        let result = await axios({
            method: 'PUT',
            url: URL + '/edit/' + id,
            data: item
        })
        Swal.fire(
            'Edit Item ' +id,
            'Item ' + id + ' has been updated',
            'success'
        )
        console.log(result.data)
    } catch(e){
        console.log(e)
    }
}

const deleteItems = async (id, cb) => {
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
const lihatItems = async (id, cb) => {
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

export { getItems, additems, editItems, deleteItems, lihatItems }