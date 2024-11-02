import Img1 from "../assets/places/boat.jpg";
import Img2 from "../assets/places/tajmahal.jpg";
import Img3 from "../assets/places/water.jpg";
import Img4 from "../assets/places/place4.jpg";
import Img5 from "../assets/places/place5.jpg";
import Img6 from "../assets/places/place6.jpg";
import ShowingTraverCard from "../components/ShowingTraverCard/ShowingTraverCard";
const PlacesData = [
  {
    image: Img1,
    carname: "Boat",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    date: "Cultural Relax",
  },
  {
    image: Img2,
    carname: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    date: "Cultural Relax",
  },
  {
    image: Img3,
    carname: "Underwater",
    location: "US",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    date: "Cultural Relax",
  },
  {
    image: Img4,
    carname: "Sydney",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    date: "Cultural Relax",
  },
  {
    image: Img5,
    carname: "Los Angeles",
    location: "United states",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    date: "Cultural Relax",
  },
  {
    image: Img6,
    carname: "Los Vegas",
    location: "California",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    date: "Cultural Relax",
  },
];

const ShowingTraver = () => {

  return (
    <div>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 dark:text-white py-2 pl-2 text-3xl font-bold">
            All Travel Post
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <ShowingTraverCard
                key={index}
                item={item}
              />
            ))}
          </div>
        </section>
      </div>

    </div>
  )
}

export default ShowingTraver