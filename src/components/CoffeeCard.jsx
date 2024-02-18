import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({coffee, setCoffees, coffees}) => {

    const { _id, name, quantity, supplier, teste, photo} = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
         
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                     Swal.fire({
                     title: "Deleted!",
                     text: "Your file has been deleted.",
                     icon: "success"
                
                  })
                  const remaining = coffees.filter(cof => cof._id !== _id);
                  setCoffees(remaining);
                }
            })
            }
          });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Movie"/></figure>
        <div className="flex justify-between w-full pr-4">
            <div className="ml-6 mt-4 ">
            <h2 className="card-title">Name: {name}</h2>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{teste}</p>
            </div>
            <div className="card-actions justify-end">
            <div className="join join-vertical space-y-4">
                <button className="btn join-item bg-blue-600">VIEW</button>
                <Link to={`updateCoffee/${_id}`}>
                 <button className="btn join-item bg-green-600">EDIT</button>
                </Link>
                <button 
                onClick={() => handleDelete (_id)}
                className="btn join-item bg-red-600">X</button>
                </div>  
            </div>
          </div>
        </div>
    );
};

export default CoffeeCard;