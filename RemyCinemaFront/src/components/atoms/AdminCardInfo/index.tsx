import React from "react";
import "./index.scss";
interface AdminCardInfoProps {
  cant: number;
  title: string;
  icon: JSX.Element;
  color: string;
}

const AdminCardInfo = ({ cant, title, icon, color }: AdminCardInfoProps) => {
  return (
    <div
      className="admincardinfo_container"
      style={{ backgroundColor: color, color: color }}
    >
      <div className="card_icon">
        <p style={{ backgroundColor: color, color: color }}>{icon}</p>
      </div>
      <div className="card_layout">
        <strong>{cant}</strong>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default AdminCardInfo;
