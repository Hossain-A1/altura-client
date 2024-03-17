import { TiTick } from "react-icons/ti";

const SuccessPage = () => {
  return (
    <div className='bg-light p-10 flex justify-center items-center flex-col h-screen'>
      <strong className='p-2 rounded-full bg-dim_dark'>
        <TiTick className='text-blue text-4xl bg-light rounded-full' />
      </strong>

      <h2 className='text-center text-xl'>
        Your payment has been successfull!
      </h2>
      <p className="pt-10
      ">"Thank you for choosing Altura for your shoe purchases!"</p>
    </div>
  );
};

export default SuccessPage;
