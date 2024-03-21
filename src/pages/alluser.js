import AllUser from "../components/AllUser";
import Error from "../components/ui/Error";
import Loading from "../components/ui/Loding";
import useFetch from "../hooks/useFetch";

const AllUserPage = () => {
  const { data: users, error, isLoading } = useFetch("/api/auth/users");
  return (
    <div>
      {error && <Error error={error} />}

      {isLoading && <Loading isLoading={isLoading} />}

      <div className="space-y-5">
        <div className='p-3 bg-red/20'>
          <h2 className='text-2xl font-semibold'>Customers</h2>
          <small clasName=''>find all platfrom customers here</small>
        </div>
        <div className='flex max-md:flex-col lg:gap-5 gap-2 justify-between'>
          <div className='p-3 w-full shadow-xl border flex justify-between gap-3 place-items-end'>
            <div className='flex flex-col'>
              <small>General customers</small>
              <b>{users?.length - 2}</b>
            </div>
            <small className='p-0.5 block text-black  bg-blue/30 rounded-md '>
              +2.25%
            </small>
          </div>
          <div className='p-3 w-full shadow-xl border flex justify-between gap-3 place-items-end'>
            <div className='flex flex-col'>
              <small>Gold admins</small>
              <b>{2}</b>
            </div>
            <small className='p-0.5 block text-black  bg-blue/30 rounded-md '>
              +0.75%
            </small>
          </div>
          <div className='p-3 w-full shadow-xl border flex gap-3 justify-between place-items-end'>
            <div className='flex flex-col'>
              <small>Countries peoples</small>
              <b>{23}</b>
            </div>
            <small className='p-0.5 block text-black  bg-blue/30 rounded-md '>
              +0.02%
            </small>
          </div>
        </div>
          <hr className="w-full border" />
          <div>
            <h2  className='text-xl text-dark font-semibold'>All Customers ({users?.length})</h2>
          </div>
          <div className="p-1  flex max-md:flex-col gap-5 justify-between bg-dim_dark text-black">
            <h2 className="w-[22%]">Name</h2>
            <h2 className="w-[28%]">Email</h2>
            <h2 className="w-[10%]">Role</h2>
            <h2 className="w-[10%]">Status</h2>
            <h2 className="w-[20%] ">Membership</h2>
          </div>
          
      </div>

      <div className="pb-20">
        {users && users.map((user) => <AllUser key={user._id} user={user} />)}
      </div>
    </div>
  );
};

export default AllUserPage;
