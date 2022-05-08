import axios from 'axios';
import Swal from 'sweetalert2';

const URL = 'http://localhost:3000/api/brands'

const getbrands = async (cb) => {
    try {
        let brands = await axios({
            method: 'GET',
            url: URL
        })
        cb(brands.data)
    } catch (e) {
        console.log(e)
    }
}

const addbrands = async (brand) => {
    try {
        await axios({
            method: 'POST',
            url: URL + "/add",
            data: brand
        })
        Swal.fire(
            'Add brand',
            'brand has been added',
            'success'
        )
    } catch(e) {
        console.log(e)
    }
}

const editbrands = async (id, brand) => {
    try{
        let result = await axios({
            method: 'PUT',
            url: URL + '/edit/' + id,
            data: brand
        })
        Swal.fire(
            'Edit brand ' +id,
            'brand ' + id + ' has been updated',
            'success'
        )
        console.log(result.data)
    } catch(e){
        console.log(e)
    }
}

const deletebrands = async (id, cb) => {
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
const lihatbrands = async (id, cb) => {
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

export { getbrands, addbrands, editbrands, deletebrands, lihatbrands }