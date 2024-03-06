import { Link } from "react-router-dom";
import Women from "../components/Women";
import Error from "../components/ui/Error";
import Loading from "../components/ui/Loding";
import useFetch from "../hooks/useFetch";
import { cn } from "../lib/utils";
import { buttonVariance } from "../components/ui/Button";
import useProductSearch from "../hooks/useProductSearch";

const WomenPage = ({native}) => {
  const { data: shoes, isLoading, error } = useFetch('/api/products');
  const {searchQuery,handleSearch,filteredProducts} = useProductSearch(shoes || [])
  return (
    <div className="space-y-5 ">
      {error && <Error error={error} />}

      {isLoading && <Loading isLoading={isLoading} />}
      {
      native &&(
        <div className='flex justify-center items-center'>
        <input
        onChange={handleSearch}
        value={searchQuery}
          type='search'
          placeholder='search'
          className='py-2 px-4 rounded-full outline-none active'
        />
      </div>
      )
     }

      {shoes && (
        <div className=' grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-5 '>
          {!native && shoes
            ? shoes
            .filter((item) => item.category === "women").slice(0, 3)
                .map((shoe) => <Women key={shoe._id} shoe={shoe} native />)
            : filteredProducts && filteredProducts
                .filter((item) => item.category === "women")
                .sort((a, b) => a.price - b.price)
                .map((shoe) => <Women key={shoe._id} shoe={shoe} />)}
        </div>
      )}
       <div className=" flex justify-center items-center">
          {
            !native &&(
              <Link to='/women' className={cn(buttonVariance({variant:"gradient"}))}>See more</Link>
            )
          }
        </div>
    </div>
  );
};

export default WomenPage;
