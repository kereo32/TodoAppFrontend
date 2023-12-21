import useModal from '../Hooks/useModal';
import tag from '/images/tag.png';
import close from '/images/close.png';
import Tag from './Tag';
import { Dispatch, SetStateAction } from 'react';

const Tagsearch: React.FC<{
  updateTagFilter: Dispatch<SetStateAction<{ tag: string; isActive: boolean }[]>>;
  tags: { tag: string; isActive: boolean }[];
  toggleTagFilter: () => void;
  isTagFilterActive: boolean;
}> = ({ updateTagFilter, tags, toggleTagFilter, isTagFilterActive }) => {
  const { ModalComponent, handleElementClick, modalPosition, closeModal } = useModal();

  return (
    <div className="flex flex-row w-[22%] xs:justify-end xs:mr-2">
      <ModalComponent
        type="tagFilter"
        styleContent={{
          top: (modalPosition.y - 100).toString() + 'px',
          left: (modalPosition.x - 50).toString() + 'px',
          width: '10%',
          height: '10%',
          padding: '0',
          margin: '0',
          borderColor: '#3e71af',
          borderRadius: '0.4rem',
          boxShadow: '0 0 0 0.05rem white',
          right: '0',
          bottom: '0',
          transform: 'translate(0, 0)',
        }}
      >
        <div className="flex flex-row w-full h-4 justify-between">
          <button
            onClick={() => {
              toggleTagFilter();
            }}
            className={`w-4 m-1 ${isTagFilterActive ? 'opacity-100' : 'opacity-60'}`}
          >
            <img src={tag} />
          </button>
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
