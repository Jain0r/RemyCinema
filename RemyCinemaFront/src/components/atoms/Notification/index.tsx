import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

import "./index.scss";

interface NotificationProps {
  isfullfied: boolean;
  text: string;
  duration?: number;
}

const NotificationEC = ({ isfullfied, text, duration }: NotificationProps) => {
  return (
    <div className="modalaction_container">
      <span>
        {isfullfied ? (
          <AiFillCheckCircle style={{ color: "green" }} />
        ) : (
          <AiFillCloseCircle style={{ color: "rgb(216, 30, 30)" }} />
        )}{" "}
      </span>
      <p>{text}</p>
      <div
        className="modalaction_barrer"
        style={{
          animationDuration: duration ? `${duration}ms` : "1500ms",
          backgroundColor: isfullfied ? "green" : "rgb(216, 30, 30)",
        }}
      ></div>
    </div>
  );
};

export default NotificationEC;
