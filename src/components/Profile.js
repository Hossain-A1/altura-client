import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Button from "./ui/Button";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, dispatch } = useAuthContext();

  const navigate = useNavigate();
  const { name, _id, email, role } = user.user;
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  const [adminToken, setAdminToken] = useState(user.token);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    size: [],
    colors: [],
    images: [],
    store: 0,
    brand: "",
    rating: 4.5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "size" || name === "colors" || name === "images") {
      // Split the string value by commas to convert it into an array
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.split(","),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/products`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

      if (response.ok) {
        setFormData({
          title: "",
          description: "",
          category: "",
          price: 0,
          size: [],
          colors: [],
          images: [],
          store: 0,
          brand: "",
          rating: 0,
        });
      }
      navigate("/");
      toast.success("Product created successfully!");
    } catch (error) {
      toast.error("Product creation failed!");
    }
  };
  const handleTokenChange = (e) => {
    setAdminToken(e.target.value);
  };

  return (
    <div className='w-full'>
      <h3>← Profile</h3>
      <div className='  flex flex-col lg:px-5   w-full h-full   gap-10 py-10   rounded-3xl'>
        <div className='bg-gradient-to-tr from-gradient to-blue lg:py-10 lg:px-40  flex flex-col items-center w-full h-[30rem] rounded-3xl '>
          <div className='  h-full w-full  flex justify-center items-center flex-col '>
        

            <div className='bg-light w-full h-full flex flex-col gap-5 p-5 rounded-2xl  '>
              <div className='flex flex-col items-center justify-center  mt-5'>
                <h2 className='lg:text-4xl max-lg:text-2xl'>{name}</h2>
                <strong className='text-sm font-light text-yellow-700'>
                  {" "}
                  Gold member
                </strong>
              </div>
              <hr className='w-full' />
              <div className='flex max-md:flex-col items-center justify-between'>
                <p>Role:</p>
                <h4>{role}</h4>
              </div>
              <div className='flex max-md:flex-col items-center justify-between'>
                <p>ID:</p>
                <h4>{_id}</h4>
              </div>
              <div className='flex max-md:flex-col items-center justify-between'>
                <p>Email:</p>
                <h4>{email}</h4>
              </div>

              <div className='flex items-center justify-center'>
                {user && (
                  <Button variant='red' onClick={handleLogout}>
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className=' bg-gradient-to-b from-red to-blue/30 rounded-3xl w-full h-full lg:py-10 lg:px-10  py-10 px-5'>
         
          {role === "admin" ? (
            
            <form
              onSubmit={handleSubmit}
              className=' '
            >
               <u className='text-center block underline-offset-4'>
            Create a product
          </u>
          <div className="flex w-full max-lg:flex-col justify-between gap-5">
          <div className="h-full w-full flex flex-col gap-1">
             <label>Title:</label>
              <input
                className='py-1 px-2 rounded-xl outline-none bg-blue text-light border-2 border-blue focus:border-2 eq focus:border-gradient'
                type='text'
                name='title'
                value={formData.title}
                onChange={handleChange}
                required
              />

              <label>Description:</label>
              <textarea
                className='py-1 px-2 rounded-xl outline-none bg-blue text-light border-2 border-blue focus:border-2 eq focus:border-gradient resize-none'
                name='description'
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>

              <label>Category:</label>
              <input
                className='py-1 px-2 rounded-xl outline-none bg-blue text-light border-2 border-blue focus:border-2 eq focus:border-gradient'
                type='text'
                name='category'
                value={formData.category}
                onChange={handleChange}
                required
              />

              <label>Price:</label>
              <input
                className='py-1 px-2 rounded-xl outline-none bg-blue text-light border-2 border-blue focus:border-2 eq focus:border-gradient'
                type='number'
                name='price'
                value={formData.price}
                onChange={handleChange}
                required
              />

              <label>Size:</label>
              <input
                className='py-1 px-2 rounded-xl outline-none bg-blue text-light border-2 border-blue focus:border-2 eq focus:border-gradient'
                type='text'
                name='size'
                value={formData.size.join(",")}
                onChange={handleChange}
                required
              />
             </div>
             

             <div className="h-full w-full flex flex-col gap-1">
             <label>Colors:</label>
              <input
                className='py-1 px-2 rounded-xl outline-none bg-blue text-light border-2 border-blue focus:border-2 eq focus:border-gradient'
                type='text'
                name='colors'
                value={formData.colors.join(",")}
                onChange={handleChange}
                required
              />

              <label>Images:</label>
              <textarea
                className='py-1 px-2 rounded-xl outline-none bg-blue text-light border-2 border-blue focus:border-2 eq focus:border-gradient resize-none'
                name='images'
                value={formData.images.join(",")}
                onChange={handleChange}
                required
              ></textarea>

              <label>Store:</label>
              <input
                className='py-1 px-2 rounded-xl outline-none bg-blue text-light border-2 border-blue focus:border-2 eq focus:border-gradient'
                type='number'
                name='store'
                value={formData.store}
                onChange={handleChange}
                required
              />

              <label>Brand:</label>
              <input
                className='py-1 px-2 rounded-xl outline-none bg-blue text-light border-2 border-blue focus:border-2 eq focus:border-gradient'
                type='text'
                name='brand'
                value={formData.brand}
                onChange={handleChange}
                required
              />

              <label>Rating:</label>
              <input
                className='py-1 px-2 rounded-xl outline-none bg-blue text-light border-2 border-blue focus:border-2 eq focus:border-gradient'
                type='number'
                name='rating'
                value={formData.rating}
                onChange={handleChange}
                required
              />
              
             </div>
          </div>
       <div className="flex flex-col justify-center items-center">
       <div className="flex flex-col gap-1 w-full">
        <label>Admin Token:</label>
              <input
                className='py-1  px-2 rounded-xl outline-none bg-blue text-light border-2 border-blue focus:border-2 eq focus:border-gradient'
                type='text'
                value={adminToken}
                onChange={handleTokenChange}
                required
              />
        </div>
         <div className="mt-2 ">
         <Button variant="ocen"  type='submit' >Create a Product</Button>
         </div>
       </div>
            </form>
          ) : (
            <div>
              <h2>Your order</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
