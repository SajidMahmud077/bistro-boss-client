import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20,2029</p>
          <p className="uppercase">Where Can I get Some? </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            molestias corporis doloribus veniam beatae, non, ratione debitis,
            amet quo incidunt quibusdam harum illo nihil est quidem dolore autem
            repudiandae. Alias. Autem voluptas et quo similique voluptatibus
            culpa porro veritatis magnam enim non consequuntur eos obcaecati
            dolore eum, tempore provident vero magni sunt illo corporis ad fuga
            officia cumque! Nobis, voluptatibus. Ipsa vel eligendi aut facere
            earum
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 hover:text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
