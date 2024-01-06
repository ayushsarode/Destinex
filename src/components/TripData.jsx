import "./TripStyles.css";
import ImageTrip from "../assets/mount5.jpg";

function Tripdata() {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={ImageTrip} alt="image" />
      </div>
    </div>
  );
}
