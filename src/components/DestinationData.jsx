import { Component } from "react";
import "./DestinationStyles.css";
import Mountain1 from "../assets/mount1.jpg";
import Mountain2 from "../assets/mount2.jpg";
import Mountain3 from "../assets/mount3.jpg";
import Mountain4 from "../assets/mount4.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className={this.props.content}>
          <h2 className="mount-name">{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img src={this.props.img1} alt="img" />
          <img src={this.props.img2} alt="img" />
        </div>
      </div>
    );
  }
}
export default DestinationData;
