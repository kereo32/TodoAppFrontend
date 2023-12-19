import React, { useState } from 'react';
import { Todo as TodoItemType } from '../constants/types';
import placeHolder from '/images/placeholder.jpg';
import edit from '/images/edit.png';
import deleteIcon from '/images/deleteIcon.png';
import useModal from '../Hooks/useModal';
import Cookies from 'js-cookie';
import axios from 'axios';

const TodoItem: React.FC<{ data?: TodoItemType }> = ({ data }) => {
  const { ModalComponent, openModal } = useModal({
    customStyle: {
      content: {
        width: '50%',
        height: '50%',
      },
    },
  });
  const handleSubmit = () => {
    // Collect form data directly from the input elements
    const formData = {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      tags: document.getElementById('tags').value,
      thumbnailUrl: document.getElementById('thumbnailUrl').value,
      attachmentFileUrl: document.getElementById('attachmentFileUrl').value,
      isActive: document.getElementById('isActive').checked,
      timeSpent: parseInt(document.getElementById('timeSpent').value, 10),
    };

    axios
      .put(
        `http://localhost:8585/todo/${data._id}`,
        { formData },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Cookies.get('todoAppToken')}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(formData);
  };

  const handleEditClick = () => {
    openModal();
  };

  return (
    <div className="flex flex-row w-[50%] h-[10%] bg-polynesian_blue-800 dark:bg-polynesian_blue-200 mt-4 rounded-lg">
      <ModalComponent>
        <div className="flex flex-col w-full h-full justify-center items-center">
          <form className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="title">
                Title:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                defaultValue={data?.title}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="description">
                Description:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                defaultValue={data?.description}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="tags">
                Tags:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                id="tags"
                type="text"
                defaultValue={data?.tags.join(', ')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="thumbnailUrl">
                Thumbnail URL:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                id="thumbnailUrl"
                type="file"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="attachmentFileUrl">
                Attachment File URL:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                id="attachmentFileUrl"
                type="file"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="isActive">
                Is Active:
              </label>
              <input className="mr-2 leading-tight" id="isActive" type="checkbox" defaultChecked={data?.isActive} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="timeSpent">
                Time Spent:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                id="timeSpent"
                type="number"
                defaultValue={data?.timeSpent}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Save
            </button>
          </form>
        </div>
      </ModalComponent>
      <div className="flex flex-col w-[30%] h-full justify-center items-center ml-2">
        <img className=" w-full max-h-16" src={data?.thumbnailUrl ? data.thumbnailUrl : placeHolder} />
      </div>
      <div className="flex flex-col w-full h-full justify-start items-start m-2">
        <div className="flex flex-row w-[50%] items-center">
          <h1 className=" font-poppins font-bold text-polynesian_blue-200 dark:text-polynesian_blue-600 mt-2">{data?.title}</h1>
          <p>
            <a href={data?.attachmentFileUrl}>*</a>
          </p>
        </div>
        <p className="font-poppins font-thin text-polynesian_blue-200 dark:text-polynesian_blue-600 mt-2">
          {data.description.length > 10 ? data.description.substring(0, 9) + '...' : data.description}
        </p>
      </div>

      <div className="flex flex-col w-full h-[90%] items-end justify-between mr-3">
        <div className="flex flex-row h-[20%] w-full items-start justify-end mt-3">
          {data?.tags.slice(0, 3).map((tag: string, index: number) => (
            <p key={index} className="font-poppins font-thin text-polynesian_blue-200 dark:text-polynesian_blue-600">
              {'#' + tag.split('')[0]}
            </p>
          ))}
        </div>
        <p className="font-poppins font-thin text-polynesian_blue-200 dark:text-polynesian_blue-600">{data?.creationDate.split('T')[0]}</p>
      </div>
      <div className="flex flex-col w-[10%] h-full justify-evenly items-center mr-3">
        <button>
          <img className="dark:invert" src={deleteIcon} />
        </button>
        <button onClick={handleEditClick}>
          <img className="dark:invert" src={edit} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
