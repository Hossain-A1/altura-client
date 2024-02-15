import { useState } from "react";
import Button from "./ui/Button";
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
const Login = () => {
  const [loading,setLoading] = useState(false)
  const [formData,setFormData] = useState({
    email:'',
    password:''
  })

  const handleSubmit= async()=>{

  }
  return (
    <div className='flex flex-col justify-center  items-center w-full   gap-10  py-20 lg:px-40 bg-light rounded-3xl'>
    <div className='flex flex-col items-center gap-1.5'>
<strong><IoMdLogIn className="text-6xl text-gradient"/></strong>
      <h2>Welcome back!</h2>
      <p className='text-black/50'>Please login to your account</p>
    </div>

    <form
      onSubmit={handleSubmit}
      className='flex  w-full h-full flex-col gap-5 text-lg'
    >
      <div className='flex flex-col items-start gap-1.5 w-full'>
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

      <Button variant='primary' type='submit' isLoading={loading} >
        Login
      </Button>

      <div className="flex items-center justify-center gap-1">
        <span className='text-dark '>Do not have an account?</span>{" "}
        <Link to='/register' className='text-blue'>
          Register
        </Link>
      </div>
    </form>
  </div>
  )
}

export default Login