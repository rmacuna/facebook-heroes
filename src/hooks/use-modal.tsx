import { useCallback, useState } from "react";

type InitialState = {
  /** Estado inicial del modal: abierto o cerrado */
  initialMode?: boolean;
};

export type UseModalData = {
  /** Estado de modal abierto o cerrado */
  modalOpen: boolean;
  /** Toggle del modal para abrirlo y cerrarlo */
  toggle: () => void;
};

export const useModal = (mode?: InitialState): UseModalData => {
  const [modalOpen, setModalOpen] = useState(mode?.initialMode || false);
  const toggle = useCallback(() => setModalOpen(!modalOpen), [modalOpen]);
  return { modalOpen, toggle };
};

useModal.defaultProps = {
  initialMode: false,
};
