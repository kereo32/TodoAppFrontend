import { useState, ReactNode } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface ModalHook {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  ModalComponent: ({ children }: { children: ReactNode }) => JSX.Element;
  handleElementClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  modalPosition: { x: number; y: number };
}

const useModal = ({ customStyle }): ModalHook => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const ModalComponent = ({ children }: { children: ReactNode }): JSX.Element => (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '30%',
          height: '75%',
        },
      }}
      contentLabel="Modal"
      ariaHideApp={false}
      shouldCloseOnOverlayClick
    >
      {children}
    </Modal>
  );

  const handleElementClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const rect = event.currentTarget.getBoundingClientRect();
    setModalPosition({ x: rect.left, y: rect.top });
    openModal();
  };

  return { isModalOpen, openModal, closeModal, ModalComponent, handleElementClick, modalPosition };
};

export default useModal;
