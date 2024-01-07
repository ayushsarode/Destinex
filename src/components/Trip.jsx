import "./TripStyles.css";
import Tripdata from "./TripData";
import Trip1 from "../assets/trip1.jpg";
import Trip2 from "../assets/trip2.jpg";
import Trip3 from "../assets/trip3.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <Tripdata
          image={Trip1}
          heading="Trip in Turkey"
          text="Turkey, a transcontinental nation, bridges Europe and Asia. Rich in history, it boasts iconic landmarks like Hagia Sophia and Cappadocia's surreal landscapes. Diverse cultures, delicious cuisine, and warm hospitality define Turkey."
        />

        <Tripdata
          image={Trip2}
          heading="Trip in Greece"
          text="Greece, located in southeastern Europe, boasts a rich history, encompassing ancient civilizations, philosophy, and mythology. Famous for its stunning islands, ancient ruins like the Acropolis, and Mediterranean cuisine."
        />

        <Tripdata
          image={Trip3}
          heading="Trip in Italy"
          text="Italy, located in southern Europe, is renowned for its rich history, art, and culture. Home to iconic landmarks such as the Colosseum and the Leaning Tower of Pisa, Italy boasts delicious cuisine and a diverse landscape."
        />
      </div>
    </div>
  );
}

export default Trip;
