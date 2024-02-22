import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Button from "./ui/Button";

const Profile = () => {
  const { user, dispatch } = useAuthContext();
  const navigate = useNavigate();
  const { name, _id, email, role } = user.user;
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className='bg-gradient-to-tr from-gradient to-blue rounded-2xl '>
      <h3>← Profile</h3>
      <div className='  grid lg:grid-cols-3 grid-cols-1 px-5   w-full h-full   gap-10  lg:py-20 lg:px-40  rounded-3xl'>
        <div className='bg-dark/50   text-black  col-span-2 flex flex-col items-center w-full h-full rounded-3xl '>
          <div className='  h-full w-full  flex justify-center items-center flex-col '>
            {/* <figure className='w-20 h-20 overflow-hidden '>
              <img
                src='https://images.pexels.com/photos/19040147/pexels-photo-19040147/free-photo-of-a-cup-of-tea-teapot-and-flowers-on-the-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                alt='user-profile'
                height={200}
                width={200}
                className='h-full w-full rounded-full object-cover'
              />
            </figure> */}

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
        <div className='  w-full h-full px-5 '>
          <h2 className='lg:text-4xl max-lg:text-2xl text-gradient'>
            Your order
          </h2>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
