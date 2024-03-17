import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-screen">
      <figure className='h-[15rem] w-[15rem] overflow-hidden bg-red p-2 rounded-xl'>
        <img
          src='https://t3.ftcdn.net/jpg/01/95/25/52/360_F_195255276_DcATap0GEHgKorBKbkOZ1fwKx5oK39g7.jpg'
          alt='notfound page'
          height='480'
          width='940'
          className='h-full w-full object-cover rounded-full'
        />
      </figure>
      <h3 className="text-center">{`We can't find the page you're looking for!`}</h3>
    </div>
  );
};

export default NotFoundPage;
