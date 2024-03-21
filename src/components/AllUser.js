import moment from "moment";

const AllUser = ({ user }) => {
  console.log(user);
  return (
    <div className=' flex max-md:flex-col max-md:items-start items-center justify-around py-1 border gap-5 '>
      <strong className='w-[22%]'>{user.name}</strong>
      <strong className='w-[28%]'>{user.email}</strong>

      <strong className='w-[10%]'>{user.role}</strong>
      <strong className='w-[10%] text-blue'>Active</strong>
      <strong className='w-[20%]  '>
        {moment(user.createdAt).format("DD MMM YYYY")}
      </strong>
    </div>
  );
};

export default AllUser;
