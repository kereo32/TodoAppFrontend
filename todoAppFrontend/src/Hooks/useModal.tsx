import { useState, ReactNode } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface ModalHook {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  ModalComponent: ({ children, styleContent, type }: { children: ReactNode; styleContent: styleContent; type: string }) => JSX.Element;
  handleElementClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  modalPosition: { x: number; y: number };
}

type styleContent = {
  top: string;
  left: string;
  right: string;
  bottom: string;
  transform: string;
  width: string;
  height: string;
  padding: string;
  margin: string;
  borderColor: string;
  borderRadius: string;
  boxShadow: string;
};

const useModal = (): ModalHook => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const ModalComponent = ({ children, styleContent, type }: { children: ReactNode; styleContent: styleContent; type: string }): JSX.Element => (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          ...styleContent,
          width: window.innerWidth <= 390 ? (type === 'tagFilter' ? '50%' : '90%') : styleContent.width,
          left: window.innerWidth <= 390 ? (type === 'tagFilter' ? '50%' : styleContent.left) : styleContent.left,
        },
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
