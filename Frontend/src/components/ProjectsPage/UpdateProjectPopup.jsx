import React from "react";
import home1 from "../CSS/Projects1.css";
import { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UpdateProjectPopup(props) {
  const { togglePopup, handleEditProduct, selectedProjectId } = props;

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const EditProduct = async (event) => {
    event.preventDefault();

    // console.log(selectedProjectId);

    // const data = {
    //   description: description,
    //   ProjectName: projectName,
    //   image: image
    // };
    const data = new FormData();
    data.append("description", description);
    data.append("ProjectName", projectName);
    data.append("image", image);

    data.enctype = "multipart/form-data";
    fetch(`http://localhost:3001/api/projects/${selectedProjectId}`, {
      method: "PATCH",
      mode: "cors",

      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // Refresh the page after successfully adding the project
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="popup  ">
      <div className="popup-iner flex  flex-col  ">
        <div className=" flex justify-end">
          <FontAwesomeIcon
            className="  text-xl   "
            icon={faTimes}
            onClick={togglePopup}
          />
        </div>

        <main className=" abdou123    w-full  ">
          <form action="" className="   ">
            <h2 className="text text-lg p-3"> Project name</h2>
            <div className="">
              <input
                required
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                type="text"
                className="bg-white my-2 p-2 text-black w-10/12 ml-4  rounded-md "
              />
            </div>
            <h2 className="text text-lg p-3">description</h2>
            <div className="">
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="bg-white  my-2 text-black  w-10/12 p-2 ml-4   rounded-md"
              />
            </div>
            <h2 className="text text-lg p-3">Upload Photos</h2>
            <div className="">
              <input
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                type="file"
                name="file"
                id="file"
                class=" p-2 rounded-md  ml-4 text-sm w-10/12 "
              />
            </div>
            <div className=" flex  justify-evenly mt-6">
              <div className="   border-[1px] ">
                <button onClick={togglePopup}> cancel</button>
              </div>
              <div className="    border-white   border-[1px] ">
                <button onClick={EditProduct} type="submit">
                  Update
                </button>
                {/* {error && (
        <p className="text-red-500 font-bold p-3 text-sm">{error.msg}</p>
      )} */}
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
