import Mountain1 from "../assets/mount1.jpg";
import Mountain2 from "../assets/mount2.jpg";
import Mountain3 from "../assets/mount3.jpg";
import Mountain4 from "../assets/mount4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p className="des-slogan">
        Discover your dream destination with us! Explore breathtaking landscapes
        and immerse yourself in vibrant cultures.
      </p>

      <DestinationData
        content="des-text"
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias accusamus quos, culpa eveniet omnis est perspiciatis sapiente suscipit in velit blanditiis molestiae ullam vel alias saepe, explicabo voluptas magni veritatis? Architecto consectetur impedit dignissimos ex dolorem esse dolor, iure ullam ad recusandae beatae, eveniet doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, culpa."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        content="des-text2"
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias accusamus quos, culpa eveniet omnis est perspiciatis sapiente suscipit in velit blanditiis molestiae ullam vel alias saepe, explicabo voluptas magni veritatis? Architecto consectetur impedit dignissimos ex dolorem esse dolor, iure ullam ad recusandae beatae, eveniet doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, culpa."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
