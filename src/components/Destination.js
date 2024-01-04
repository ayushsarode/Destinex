import Mountain1 from "../assets/mount1.jpg";
import Mountain2 from "../assets/mount2.jpg";
import Mountain3 from "../assets/mount3.jpg";
import Mountain4 from "../assets/mount4.jpg";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p className="des-slogan">
        Discover your dream destination with us! Explore breathtaking landscapes
        and immerse yourself in vibrant cultures.
      </p>

      <div className="first-des">
        <div className="des-text">
          <h2 className="mount-name">Taal Volcano, Batangas</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            accusamus quos, culpa eveniet omnis est perspiciatis sapiente
            suscipit in velit blanditiis molestiae ullam vel alias saepe,
            explicabo voluptas magni veritatis? Architecto consectetur impedit
            dignissimos ex dolorem esse dolor, iure ullam ad recusandae beatae,
            eveniet doloremque! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repudiandae, culpa.
          </p>
        </div>

        <div className="image">
          <img src={Mountain1} alt="img" />
          <img src={Mountain2} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Destination;
