import { Link } from "react-router-dom";
import Kids from "../components/Kids";
import Error from "../components/ui/Error";
import Loading from "../components/ui/Loding";
import useFetch from "../hooks/useFetch";
import { cn } from "../lib/utils";
import { buttonVariance } from "../components/ui/Button";
import useProductSearch from "../hooks/useProductSearch";

const KidsPage = ({ native }) => {
  const { data: shoes, isLoading, error } = useFetch("/api/products");
  const { searchQuery, handleSearch, filteredProducts } = useProductSearch(
    shoes || []
  );
  return (
    <div className='space-y-5 max-lg:mt-20'>
      {error && <Error error={error} />}

      {isLoading && <Loading isLoading={isLoading} />}
      {native && (
        <div className='fixed lg:top-0 top-10 bg-light py-5 w-full  z-[990] left-0 right-0'>
          <div className='flex justify-center items-center'>
            <input
              onChange={handleSearch}
              value={searchQuery}
              type='search'
              placeholder='s
              Search brand'
              className='py-2 px-4 rounded-full outline-none active'
            />
          </div>
        </div>
      )}
      {shoes && (
        <div className=' grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-5 '>
          {!native && shoes
            ? shoes
                .filter((item) => item.category === "kid")
                .slice(0, 3)
                .map((shoe) => <Kids key={shoe._id} shoe={shoe} native />)
            : filteredProducts &&
              filteredProducts
                .filter((item) => item.category === "kid")
                .sort((a, b) => a.price - b.price)
                .map((shoe) => <Kids key={shoe._id} shoe={shoe} />)}
        </div>
      )}
      <div className=' flex justify-center items-center pt-5'>
        {!native && (
          <Link
            to='/kids'
            className={cn(buttonVariance({ variant: "gradient" }))}
          >
            See more
          </Link>
        )}
      </div>
    </div>
  );
};

export default KidsPage;
