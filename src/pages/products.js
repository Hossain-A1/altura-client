// import Error from "../components/ui/Error";
// import Loading from "../components/ui/Loding";
// import useFetch from "../hooks/useFetch";
// import MenPage from "./men";
// import WomenPage from "./women";

// const Products = () => {
//   const { data: shoes, isLoading, error } = useFetch("/api/products");

//   return (
//     <div>
//       {/* products */}
//       {error && <Error error={error} />}
//      <div>
//         {shoes &&
//           shoes
//             .filter((item) => item.category === "men")
//             .sort((a, b) => a.price - b.price)
//             .map((shoe) => <MenPage key={shoe._id} shoe={shoe} />)}
//       </div>   {isLoading && <Loading isLoading={isLoading} />}
    
//       <div>
//         {shoes &&
//           shoes
//             .filter((item) => item.category === "women")
//             .sort((a, b) => a.price - b.price)
//             .map((shoe) => <WomenPage key={shoe._id} shoe={shoe} />)}
//       </div>
//     </div>
//   );
// };

// export default Products;
