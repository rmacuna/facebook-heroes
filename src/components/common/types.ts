export interface ModalProps {
  /** Show or hide modal */
  isOpen: boolean;
  /** Event on close the modal */
  onClose: () => void;
  /** Content of the modal  */
  children: React.ReactNode;
}
