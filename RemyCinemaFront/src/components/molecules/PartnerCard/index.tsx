import React from "react";
import "./index.scss";
interface PartnerCardProps {
  userName: string;
  className?: string;
}
const PartnerCard = ({ userName, className }: PartnerCardProps) => {
  return (
    <div className={`partner_card ${className ? className : ""}`}>
      <div className="partner_card_info">
        <div className="partner_card_logo">
          <p>partner</p>
          <p>RemiCine</p>
        </div>
      </div>
      <div className="partner_card_plays_container">
        <div className="partner_card_play"></div>
        <div className="partner_card_play"></div>
        <div className="partner_card_play"></div>
      </div>
      <div className="partner_card_background">
        <p>RemiCine</p>
      </div>

      <div className="partner_card_name">
        <p style={{ fontFamily: "OCR A Std" }}>{userName && userName}</p>
      </div>
    </div>
  );
};

export default PartnerCard;
