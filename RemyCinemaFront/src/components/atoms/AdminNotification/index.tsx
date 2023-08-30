import React, { ReactNode, useEffect, useRef, useState } from "react";
import "./index.scss";
import { BsCheck2, BsExclamation, BsInfoLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

export interface AdminNotificationProps {
  type?: "success" | "error" | "info";
  children: ReactNode;
  duration?: number;
  id: string;
  onClose: () => void;
}

const AdminNotification = ({
  children,
  duration = 5000,
  id,
  onClose,
  type = "success",
}: AdminNotificationProps) => {
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [timeLeft, setTimeLeft] = useState<number>(duration);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const typeNotifications = {
    success: { className: "success", icon: <BsCheck2 /> },
    error: { className: "error", icon: <BsExclamation /> },
    info: { className: "info", icon: <BsInfoLg /> },
  };
  const timeOutID = useRef<NodeJS.Timeout | undefined>(undefined);

  const startTimer = () => {
    // se inicia el temporizador
    setStartTime(Date.now()); // se setea el tiempo de inicio con los ms actuales

    if (timeOutID.current !== undefined) {
      // si es q ya se inicializo el primer temporizador se limpiara, esto evita que se produzca un error al intentar limpiar un temporizador que nunca se ha creado.
      clearTimeout(timeOutID.current); // se limpiar el timeoutid que se tenia
    }
    //inicializando temporizador
    timeOutID.current = setTimeout(() => {
      // se  setea el nuevo timeoutid con el valor actualizado de timeleft
      onClose();
    }, timeLeft);
  };
  const pauseTimer = () => {
    setIsPaused(true);
    if (timeOutID.current) {
      clearTimeout(timeOutID.current); // se limpia el temporizador que se tenia, de esta forma se evita qse cierre al cumplirse el temporizador anterior
      setTimeLeft(timeLeft - (Date.now() - startTime)); // seteamos el nuevo timeleft con la resta del valor que se tiene del ultimo timeleft con el tiempo transcurrido desde q se inicio el ultimo temporizador
    }
  };
  const resumeTimer = () => {
    setIsPaused(false); //
    startTimer();
  };
  useEffect(() => {
    startTimer();
    return () => {
      if (timeOutID.current) {
        clearTimeout(timeOutID.current);
      }
    };
  }, [id]);
  const handleClose = () => {
    pauseTimer();
    onClose();
  };
  return (
    <motion.div
      layout // animate other elements on a layout list
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onMouseEnter={() => pauseTimer()}
      onMouseLeave={() => resumeTimer()}
      className="adminnotification_container"
      onClick={() => handleClose()}
    >
      <span className="close_notification">
        <IoMdClose onClick={() => handleClose()} />
      </span>
      <div
        className={`adminnotification_icon_container ${typeNotifications[type].className}`}
      >
        <span
          className={`icon_pulse ${typeNotifications[type].className}`}
        ></span>
        <span
          className={`icon_pulse ${typeNotifications[type].className}`}
        ></span>
        <span className="adminnotification_icon">
          {typeNotifications[type].icon}
        </span>
      </div>
      <span
        style={{
          animationDuration: `${duration}ms`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
        className={`close_bar ${typeNotifications[type].className}`}
      ></span>
      {children}
    </motion.div>
  );
};

export default AdminNotification;
