import { useState, ReactNode } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface ModalHook {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  ModalComponent: ({ children, styleContent }: { children: ReactNode; styleContent: object }) => JSX.Element;
  handleElementClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  modalPosition: { x: number; y: number };
}

const useModal = (): ModalHook => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const ModalComponent = ({ children, styleContent }: { children: ReactNode; styleContent: object }): JSX.Element => (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={{
        content: styleContent,
        overlay: {
          backgroundColor: '#transparent',
          opacity: '0.9',
        },
      }}
      contentLabel="Modal"
      ariaHideApp={false}
      shouldCloseOnOverlayClick
    >
      {children}
    </Modal>
  );

  const handleElementClick = (event: React.MouseEvent<HTMLElement, MouseEvent> | React.MouseEvent<HTMLImageElement>): void => {
    const rect = event.currentTarget.getBoundingClientRect();
    setModalPosition({ x: rect.left, y: rect.top });
    openModal();
  };

  return { isModalOpen, openModal, closeModal, ModalComponent, handleElementClick, modalPosition };
};

export default useModal;
