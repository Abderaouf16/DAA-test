import React from "react";
import home1 from "../CSS/Projects1.css";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import ImageModal from "../ImageModal/ImageModal";

export default function ProjectDetails(props) {
  const {
    togglePopup,
    projectName,
    setProjectName,
    description,
    setDescription,
    selectedProjectId,
  } = props;
  const [projectDetails, setProjectDetails] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/projects/${selectedProjectId}`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        setProjectDetails(data);
      } catch (e) {
        console.log(e);
      }
    };

    if (selectedProjectId) {
      fetchProjectDetails();
    }
  }, [selectedProjectId]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="popup ">
      <div className="popup-inerd flex flex-col">
        <div className="flex justify-end">
          <FontAwesomeIcon
            className="text-xl"
            icon={faTimes}
            onClick={togglePopup}
          />
        </div>
        <div className="">
          <h1>Posted By {projectDetails?.posterName} </h1>
        </div>
        <div className=" my-3">
          <h1>Posted At {projectDetails?.createdAt.slice(0, 10)} </h1>
        </div>
        <main className="main w-full flex">
          <form action="" className=" form flex-1 w-6/12">
            <h2 className="text text-lg p-3"> Project name:</h2>
            <div className=" ml-5 flex flex-col   bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg ">
              <h1 className="  px-3 py-3 overflow-hidden break-words">
                {projectDetails?.ProjectName}
              </h1>
            </div>
            <h2 className="text text-lg p-3 ">Description:</h2>
            <div className=" ml-5 flex flex-col  bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg ">
              <h1 className="px-3 py-3 overflow-hidden break-words ">
                {projectDetails?.description}
              </h1>
            </div>
            <div className="flex justify-evenly mt-6"></div>
          </form>
          <div className="  flex-1 m-5 bg-black rounded-lg h-3/6 ">
            <img
              src={`http://localhost:3001/api${projectDetails?.imageURL}`}
              id="file"
              name="file"
              alt=""
              className="imgContainer w-full  rounded-lg h-3/6"
              onClick={() => {
                setSelectedImage(
                  `http://localhost:3001/api${projectDetails?.imageURL}`
                );
                toggleModal();
              }}
            />
          </div>
        </main>
        <div className="flex justify-center mt-5">
          <div className=" button_cancel border-[1px] w-3/12 flex justify-center hover:scale-110 transition-all duration-500  ">
            <button onClick={togglePopup}>Cancel</button>
          </div>
        </div>
        {modalOpen && (
          <ImageModal imageUrl={selectedImage} toggleModal={toggleModal} />
        )}
      </div>
    </div>
  );
}
