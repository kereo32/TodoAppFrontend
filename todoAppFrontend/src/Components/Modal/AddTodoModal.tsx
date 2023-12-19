import React, { useState, useEffect } from 'react';
import FormHeader from '../Form/FormHeader';
import useModalData from '../../Hooks/useModalData';
import ModalInput from './ModalInput';
import ModalTextArea from './ModalTextArea';
import ModalFileInput from './ModalFileInput';
import ModalTagEditor from './ModalTagEditor';
import FormButton from '../Form/FormButton';
import Loading from '../Loading';
import useAddNewTodoData from '../../Hooks/useAddNewTodoData';
import { Todo } from '../../constants/types';

const AddTodoModal: React.FC<{ closeModal: () => void; todoToUpdate?: Todo }> = ({ closeModal, todoToUpdate }) => {
  const { modalData, handleInputChange, setModalData } = useModalData();
  const { title, description } = modalData;
  const [tags, setTags] = useState<string[]>([]);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [attachmentFile, setAttachmentFile] = useState<File | null>(null);

  const { addNewTodo, loading, updateTodo } = useAddNewTodoData();

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (todoToUpdate) {
      setEditMode(true);
      setModalData({
        title: todoToUpdate.title,
        description: todoToUpdate.description,
      });
      setTags(todoToUpdate.tags);
      setThumbnailFile(todoToUpdate.thumbnailUrl);
      setAttachmentFile(todoToUpdate.attachmentFileUrl);
    }
  }, [todoToUpdate, setModalData]);

  const handleClick = () => {
    const data = {
      title,
      description,
      tags,
      attachmentFileUrl: attachmentFile,
      thumbnailUrl: thumbnailFile,
    };

    if (editMode) {
      updateTodo(todoToUpdate?._id, data);
    } else {
      addNewTodo(data);
    }
    closeModal();
  };

  return (
    <div className="flex flex-col justify-start items-center bg-silver_lake_blue-400 w-full h-full ">
      {loading ? (
        <Loading />
      ) : (
        <>
          <FormHeader additionalClasses={['text-3xl mt-10']} content={editMode ? 'Update Todo' : 'Add a new Todo'} />

          <ModalInput type="text" placeholder="Enter your title" value={title} onChange={(value) => handleInputChange('title', value)} />
          <ModalTextArea placeholder="Enter your description" value={description} onChange={(value) => handleInputChange('description', value)} />

          <ModalFileInput
            fileState={thumbnailFile}
            setFileState={setThumbnailFile}
            fileType={['image/png', 'image/jpeg']}
            name="thumbnail"
            labelText="Thumbnail for todo"
          />
          <ModalFileInput
            fileState={attachmentFile}
            setFileState={setAttachmentFile}
            fileType={['text/plain', '.pdf', '.csv']}
            name="attachment"
            labelText="Add your Attachment"
          />

          <ModalTagEditor tags={tags} setTags={setTags} />

          <FormButton onClick={handleClick} label={editMode ? 'Update Todo' : 'Add Todo'} />
        </>
      )}
    </div>
  );
};

export default AddTodoModal;
