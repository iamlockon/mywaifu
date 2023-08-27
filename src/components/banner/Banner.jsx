import bannerImg from "../../assets/knitting-needles-wool-basket.jpg";
import { useNavigate } from "react-router";

const Banner = ({ catRef }) => {
  const navigate = useNavigate();

  return (
    <main className="flex justify-between max-h-fit items-center py-1 mb-5">
      <section className="max-w-xl mx-auto sm:mx-0  w-full py-2  lg:w-1/3">
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-semibold py-3 w-full">
          Crochet Design & Artifacts
        </h1>
        <p className="py-3 text-md text-gray-600">
          Here you can find some ideas and handmade works!
        </p>
        <section className="flex items-center">
          <button
            className="btn-primary text-sm md:text-base"
            onClick={() => navigate("/products")}
          >
            Start Shopping
          </button>
        </section>
      </section>
      <section className="flex justify-end relative">
        <img src={bannerImg} alt="bannerImg" className="mx-auto sm:mx-0  w-1/2 py-2 rounded-full"/>
        <div className="flex mx=2 absolute bottom-0">
          Image by <a className="px-2" href="https://www.freepik.com/free-photo/knitting-needles-wool-basket_12475358.htm#from_view=detail_serie">Freepik</a>
        </div>
      </section>
    </main>
  );
};

export default Banner;
