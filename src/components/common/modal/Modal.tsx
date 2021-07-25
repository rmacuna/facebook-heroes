import { useEffect, useMemo, useCallback, ReactNode } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "../types";
import { motion } from "framer-motion";

type PortalProps = {
  children: React.ReactNode;
  parent?: HTMLElement;
  className: string;
};

function Portal(props: PortalProps): React.ReactPortal {
  const { children, parent, className } = props;

  const el = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    // work out target in the DOM based on parent prop
    const target = parent && parent.appendChild ? parent : document.body;
    // Default classes
    const classList = ["portal-container"];
    // If className prop is present add each class the classList
    if (className) className.split(" ").forEach((item) => classList.push(item));
    classList.forEach((item) => el.classList.add(item));
    // Append element to dom
    target.appendChild(el);
    // On unmount function
    return () => {
      // Remove element from dom
      target.removeChild(el);
    };
  }, [el, parent, className]);
  // return the createPortal function
  return createPortal(children, el);
}

export default function Modal(props: ModalProps) {
  const { onClose, children, isOpen } = props;
  const onCloseModal = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      onClose();
    },
    [onClose]
  );

  const handleKeyboardClose = useCallback(
    (e: any) => {
      if (e.key === "Escape") {
        e.preventDefault();
        window.removeEventListener("keydown", (e: any) =>
          handleKeyboardClose(e)
        );
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboardClose, false);
    return () => {
      window.removeEventListener("keydown", handleKeyboardClose);
    };
  }, [handleKeyboardClose]);

  if (!isOpen) return null;

  return (
    <Portal className="modal-portal">
      <motion.div
        role="dialog"
        aria-modal="true"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <motion.div
          onClick={(e: React.MouseEvent<HTMLDivElement>) => onCloseModal(e)}
          className="dialog-overlay"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          aria-hidden="true"
        >
          <motion.div className="dialog-backdrop"></motion.div>
        </motion.div>
        {children}
      </motion.div>
    </Portal>
  );
}
