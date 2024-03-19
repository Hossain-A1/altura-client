import React from 'react'

const AllUser = ({user}) => {
  console.log(user);
  return (
    <div className='flex justify-between py-1 border gap-5'>
     <strong>{user.name}</strong>
     <strong>{user.email}</strong>
     <strong>{user.role}</strong>
     <strong>{user.createdAt
}</strong>
    </div>
  )
}

export default AllUser