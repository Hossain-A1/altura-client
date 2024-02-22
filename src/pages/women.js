import Women from "../components/Women";
import Error from "../components/ui/Error";
import Loading from "../components/ui/Loding";
import useFetch from "../hooks/useFetch";

const WomenPage = () => {
  const { data: shoes, isLoading, error } = useFetch('/api/products');
  return (
    <div>
      {error && <Error error={error} />}

      {isLoading && <Loading isLoading={isLoading} />}

      <div className=" grid lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-5 ">
       
          {shoes &&
            shoes
              .filter((item) => item.category === "women")
              .sort((a, b) => a.price - b.price)
              .map((shoe) => <Women key={shoe._id} shoe={shoe} />)}
       
      </div>
    </div>
  );
};

export default WomenPage;
