import { Link } from "react-router-dom";
import Men from "../components/Men";
import Error from "../components/ui/Error";
import Loading from "../components/ui/Loding";
import useFetch from "../hooks/useFetch";
import { cn } from "../lib/utils";
import { buttonVariance } from "../components/ui/Button";
import useProductSearch from "../hooks/useProductSearch";

const MenPage = ({ native }) => {
  const { data: shoes, isLoading, error } = useFetch("/api/products");
  const { searchQuery, handleSearch, filteredProducts } = useProductSearch(
    shoes || []
  );

  return (
    <div className='space-y-5 '>
      {error && <Error error={error} />}

      {isLoading && <Loading isLoading={isLoading} />}

     {
      native &&(
       <div className="fixed lg:top-0 top-10 bg-light py-5 w-full  z-[990] left-0 right-0">
         <div className=' flex justify-center items-center'>
        <input
        onChange={handleSearch}
        value={searchQuery}
          type='search'
          placeholder='search'
          className='py-2 px-4  rounded-full outline-none active'
        />
      </div>
       </div>
      )
     }
      {shoes && (
        <div className=' grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-5 sp'>
          {!native && shoes
            ? shoes
                .filter((item) => item.category === "men")
                .slice(0, 3)
                .map((shoe) => <Men key={shoe._id} shoe={shoe} native />)
            : filteredProducts &&
              filteredProducts
                .filter((item) => item.category === "men")
                .sort((a, b) => a.price - b.price)
                .map((shoe) => <Men key={shoe._id} shoe={shoe} />)}
        </div>
      )}
      <div className=' flex justify-center items-center '>
        {!native && (
          <Link
            to='/men'
            className={cn(buttonVariance({ variant: "gradient" }))}
          >
            See more
          </Link>
        )}
      </div>
    </div>
  );
};

export default MenPage;
