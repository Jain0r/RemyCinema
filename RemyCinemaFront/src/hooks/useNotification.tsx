import AdminNotification from "../components/atoms/AdminNotification";
import { uuid } from "../shared/helpers";
import { useDispatch, useSelector } from "react-redux";
import {
  addNotification,
  deleteNotification,
} from "../redux/actions/notificationActions";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export interface Notification {
  //props a pasar al llamar la funcion
  text: string;
  type: "success" | "error" | "info";
  duration?: number;
}

export interface Toast extends Notification {
  //props del componente, se aumenta el id como identificador unico
  id: string;
}

export default function useNotification() {
  const { notifications } = useSelector((state: any) => state.notifications);
  const dispatch = useDispatch();

  const createNotification = (options: Notification) => {
    const id = uuid();
    dispatch(
      addNotification({
        ...options,
        id,
        duration: options.duration ? options.duration : 5000,
      })
    );
  };

  const removeNotification = (id: string) => {
    dispatch(deleteNotification(id));
  };

  const allNotifications = (
    <div className="notifications">
      <AnimatePresence>
        {notifications?.map((notification: Toast) => (
          <AdminNotification
            key={notification.id}
            id={notification.id}
            type={notification.type}
            duration={notification.duration}
            onClose={() => removeNotification(notification.id)}
          >
            {notification.text}
          </AdminNotification>
        ))}
      </AnimatePresence>
    </div>
  );

  return { allNotifications, createNotification };
}
