import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import  useMenu  from "../../../hooks/useMenu";

const PopulerMenu = () => {
  const [menu] =useMenu()
  const populer=menu.filter(item=> item.category === 'popular')

  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item => item.category === "popular"));
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <section className='mb-12'>
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>
      <div className='grid md:grid-cols-2 gap-10'>
        {populer.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline text-center border-0 border-b-4 mt-4 hover:text-white">
            View Full Menu
          </button>
    </section>
  );
};

export default PopulerMenu;
