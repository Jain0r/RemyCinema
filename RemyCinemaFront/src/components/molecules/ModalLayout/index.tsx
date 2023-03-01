import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import "./index.scss";

interface ModalLayoutProps {
  title: string;
  maxWidth?: number;
  isOpen: boolean;
  onClose(): void;
  color?: string;
  children: JSX.Element;
}
const ModalLayout = ({
  title,
  children,
  color,
  maxWidth,
  onClose,
  isOpen,
}: ModalLayoutProps) => {
  const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    let handler = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="modal_mask_container "
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
            ref={modalRef}
            className="modal_container"
            style={{ maxWidth: maxWidth + "px" }}
          >
            <div className="modal_container_main">
              <div
                className="modal_top_info"
                style={{ backgroundColor: color }}
              >
                <p className="modal_container_title">{title}</p>
                <MdClose onClick={() => onClose()} />
              </div>
              <div className="modal_content_container">{children}</div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ModalLayout;
