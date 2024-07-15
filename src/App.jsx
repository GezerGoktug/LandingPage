import FeaturesProducts from "./components/FeaturesProducts";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="bg-[#F7EFED]">
      <div className="mx-6 xs:w-[500px] xs:mx-auto md:w-[768px] lg:w-[1000px] xl:w-[1320px] ">
        <Navbar />
        <Hero />
        <FeaturesProducts />
      </div>
    </div>
  );
}

export default App;
