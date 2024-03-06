import { MoonLoader } from "react-spinners";

const Loading = ({ isLoading }) => {
  return (
    <div className='flex justify-center items-center '>
      <MoonLoader
        size='32px'
        color='dim_dark'
        loading={isLoading}
        aria-label='Loading spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default Loading;
