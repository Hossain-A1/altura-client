import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Button from "./ui/Button";
import { useCallback, useState } from "react";
import { MdLandscape } from "react-icons/md";
import { loginPost } from "../lib/loginPost";
import { useAuthContext } from "../hooks/useAuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { dispatch} = useAuthContext()
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      const data = await loginPost("/api/auth/register", formData);

      if (data) {
        setLoading(true);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
        dispatch({type:"LOGIN",payload:data})
        localStorage.setItem("user",JSON.stringify(data))
        toast.success("Register successfull");
        navigate("/");
      } else {
        setLoading(false);
      }
    },
    [formData,dispatch, navigate]
  );

  return (
    <div className='flex flex-col items-center justify-center gap-10 py-20 lg:px-40 bg-light rounded-3xl'>
      <div className='flex flex-col items-center gap-1.5'>
        <strong>
          <MdLandscape className='text-6xl text-gradient' />
        </strong>
        <h2>Welcome to Altura!</h2>
        <p className='text-black/50'>Please provide your details to register</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-col gap-5 text-lg'
      >
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='name' className='cursor-pointer'>
            Name
          </label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type='text'
            id='name'
            placeholder='name'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='email' className='cursor-pointer'>
            Email address
          </label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type='email'
            id='email'
            placeholder='hello@example.com'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='password' className='cursor-pointer'>
            Password
          </label>
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type='password'
            id='password'
            placeholder='Write your password'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <Button variant='gradient' type='submit' isLoading={loading}>
          Register
        </Button>

        <div className="flex gap-1 items-center justify-center">
          <span className='text-dark'>Already have an account?</span>{" "}
          <Link to='/login' className='text-blue'>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
