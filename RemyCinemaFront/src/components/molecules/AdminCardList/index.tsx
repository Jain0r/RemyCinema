import React from "react";
import AdminCardInfo, { AdminCardInfoProps } from "../../atoms/AdminCardInfo";

interface AdminCardListProps {
  cardsInfo: AdminCardInfoProps[];
}
import "./index.scss";

const AdminCardList = ({ cardsInfo }: AdminCardListProps) => {
  return (
    <div className="admin_cards_list_container">
      {cardsInfo
        ? cardsInfo.map((card, index) => {
            return (
              <AdminCardInfo
                key={index}
                cant={card?.cant}
                icon={card?.icon}
                color={card?.color}
                title={card?.title}
              />
            );
          })
        : null}
    </div>
  );
};

export default AdminCardList;
