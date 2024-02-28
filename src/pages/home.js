import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import KidsPage from "./kids";
import MenPage from "./men";
import WomenPage from "./women";

const HomePage = () => {
  return (
    <main className='space-y-5'>
      <Hero />
      <MenPage />
      <WomenPage />
      <KidsPage />
      <Testimonial />
    </main>
  );
};

export default HomePage;
