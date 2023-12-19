import useModal from '../Hooks/useModal';
import tag from '/images/tag.png';
import close from '/images/close.png';
import Tag from './Tag';
import { Dispatch, SetStateAction } from 'react';

const Tagsearch: React.FC<{ updateTagFilter: Dispatch<SetStateAction<{ tag: string; isActive: boolean }[]>>; tags: { tag: string; isActive: boolean }[] }> = ({
  updateTagFilter,
  tags,
}) => {
  const { ModalComponent, handleElementClick, modalPosition, closeModal } = useModal();

  return (
    <div className="flex flex-row w-[22%]">
      <ModalComponent
        styleContent={{
          top: modalPosition.y - 100,
          left: modalPosition.x,
          width: '10%',
          height: '10%',
          padding: '0',
          margin: '0',
          borderColor: '#3e71af',
          borderRadius: '0.4rem',
          boxShadow: '0 0 0 0.05rem white',
        }}
      >
        <div className="flex flex-row w-full h-4 justify-end">
          <button
            onClick={() => {
              closeModal();
            }}
            className="w-4 m-1"
          >
            <img src={close} />
          </button>
        </div>
        <div className="flex flex-col w-full h-full justify-between items-center">
          {tags.map((tag: { tag: string; isActive: boolean }, index: number) => (
            <Tag updateFilter={updateTagFilter} key={index} tag={tag} />
          ))}
        </div>
      </ModalComponent>
      <img
        onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => {
          handleElementClick(e);
        }}
        className="invert dark:invert-0 w-6 opacity-60"
        src={tag}
      />
    </div>
  );
};

export default Tagsearch;
