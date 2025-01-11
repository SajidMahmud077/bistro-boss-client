import useAuth from '../../hooks/useAuth'
import  Swal  from "sweetalert2";
import { useNavigate,useLocation } from "react-router-dom";
import useAxiosSecure from '../../hooks/useAxiosSecure'
import useCart from '../../hooks/useCart'


const FoodCard = ({item}) => {
  const {name, image,price,recipe,_id }= item;
  const {user}=useAuth();
  const navigate=useNavigate();
  const location= useLocation();
  const axiosSecure=useAxiosSecure();
  const [,refetch]=useCart()



  const handleAddtoCart=()=>{
    if(user && user.email){
      //send cart to the database
      // console.log(user.email,food)

      const cartItem= {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          //refetch cart to update the cart items count
          refetch();
        }
      })

    }else{
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          //send user to the login  page
          navigate('/login', {state: { from : location}})
        }
      });
    }
    console.log(food,user.email)
  }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <p className=' absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
    <button
     onClick={handleAddtoCart} 
    className="btn btn-outline bg-slate-100  text-center border-0 border-orange-400 border-b-4 mt-4 hover:text-white">
            Add To Cart
          </button>
    </div>
  </div>
</div>
  );
};

export default FoodCard;