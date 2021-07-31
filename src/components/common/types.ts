export interface ModalProps {
  /** Show or hide modal */
  isOpen: boolean;
  /** Event on close the modal */
  onClose: () => void;
  /** Content of the modal  */
  children: React.ReactNode;
}

export interface NavigationItemProps {
  /** Title of the navigation item */
  title: string;
  /** Id of the navigation item */
  id: string;
}

export interface RecentLoginProps {
  /** Name of the login */
  name: string;
  /** Date of the login */
  date: string;
  /** Src of the profile image */
  src: string;
}
