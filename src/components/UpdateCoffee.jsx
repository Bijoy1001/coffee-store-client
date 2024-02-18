import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, teste, category, details, photo} = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();


        const form = event.target;


        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const teste = form.teste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
  
        const  UpdatedCoffee = {name, quantity, supplier, teste, category, details, photo};
        console.log(UpdatedCoffee);


        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'PUT',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(UpdatedCoffee)
        })
         .then(res => res.json())
         .then(data => {
          console.log(data);
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'success!',
              text: 'Updated successfully!',
              icon: 'success',
              confirmButtonText: 'OK'
            })
          }
         })
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Update Coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
               { /* --------------form row name--------------*/}
                <div className=' md:flex mt-10'>
                    <div className='form-control md:w-1/2'>
                      <label className="label">
                        
                            <span className="label-text">Coffee Name</span>
                     
                    </label>
                    <label className='input-group'>
                    <input type="text" name='name' defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full " id=''/>

                    </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                      <label className="label">
                        
                            <span className="label-text">Available Quantity</span>
                     
                    </label>
                    <label className='input-group'>
                    <input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity"  className="input input-bordered w-full " id=''/>

                    </label>
                    </div>
                </div>
               { /* --------------form row supplier and teste--------------*/}
               <div className=' md:flex mt-10'>
                    <div className='form-control md:w-1/2'>
                      <label className="label">
                        
                            <span className="label-text">Supplier</span>
                     
                    </label>
                    <label className='input-group'>
                    <input type="text" name='supplier'defaultValue={supplier} placeholder="Supplier"  className="input input-bordered w-full " id=''/>

                    </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                      <label className="label">
                        
                            <span className="label-text">Teste</span>
                     
                    </label>
                    <label className='input-group'>
                    <input type="text" name='teste' defaultValue={teste} placeholder="Teste"  className="input input-bordered w-full " id=''/>

                    </label>
                    </div>
                </div>
               { /* --------------form row category and details--------------*/}
               <div className=' md:flex mt-10'>
                    <div className='form-control md:w-1/2'>
                      <label className="label">
                        
                            <span className="label-text">Category</span>
                     
                    </label>
                    <label className='input-group'>
                    <input type="text" name='category' defaultValue={category} placeholder="Category"  className="input input-bordered w-full " id=''/>

                    </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                      <label className="label">
                        
                            <span className="label-text">Details</span>
                     
                    </label>
                    <label className='input-group'>
                    <input type="text" name='details' defaultValue={details} placeholder="Details"  className="input input-bordered w-full " id=''/>

                    </label>
                    </div>
                </div>
               { /* --------------Photo url--------------*/}
               <div className=' mt-10'>
                    <div className='form-control '>
                      <label className="label">
                        
                            <span className="label-text">Photo URL</span>
                     
                    </label>
                    <label className='input-group'>
                    <input type="text" name='photo' defaultValue={photo} placeholder="Photo URL"  className="input input-bordered w-full " id=''/>

                    </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className='btn btn-block mt-12 bg-[#331A15] text-white'/>
            </form>
        </div>
    );
};

export default UpdateCoffee;