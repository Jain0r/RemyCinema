import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import image from "../../../assets/crash.webp";
import "./index.scss";
import Button from "../../atoms/Button";

interface ModalConfirmActionProps {
  title: string;
  description: string;
  maxWidth?: number;
  isOpen: boolean;
  onClose(): void;
  confirmAction?(): void;
}
const ModalConfirmAction = ({
  title,
  description,
  confirmAction,
  maxWidth,
  onClose,
  isOpen,
}: ModalConfirmActionProps) => {
  const modalActionRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    let handler = (e: any) => {
      if (!modalActionRef.current?.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleConfirmAction = () => {
    if (confirmAction) {
      confirmAction();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="modal_mask_container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            ref={modalActionRef}
            className="modal_confirm_container"
            style={{ maxWidth: maxWidth + "px" }}
          >
            <div className="modal_close_button">
              <MdClose onClick={() => onClose()} />
            </div>
            <div className="modal_container_main">
              <p className="modal_container_title">{title}</p>
              <img className="modal_confirm_image" src={image}></img>
              <p className="modal_container_description">{description}</p>
              <div className="modal_confirm_buttons">
                {confirmAction ? (
                  <>
                    <Button
                      type="button"
                      text="Cancelar"
                      onClick={() => onClose()}
                      className="fifth_button"
                    />
                    <Button
                      type="button"
                      text="Confirmar"
                      onClick={() => handleConfirmAction()}
                      className="fifth_button"
                    />
                  </>
                ) : (
                  <Button
                    type="button"
                    text="Entendido"
                    onClick={() => onClose()}
                    className="fifth_button"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ModalConfirmAction;
