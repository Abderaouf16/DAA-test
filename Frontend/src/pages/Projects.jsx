import React, { useState, useEffect } from "react";
import home1 from "../components/CSS/Projects1.css";
import { FaSearch } from "react-icons/fa";
import Header from "../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";
import AddingProjectPopup from "../components/ProjectsPage/addingProjectPopup";
import ProjectDetails from "../components/ProjectsPage/projectDetails";

export default function Projects() {
  const { user } = useAuthContext();
  const displayFooter = true;
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupDetails, setShowPopupDetails] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  // adding a project

  const handleAddProject = async (event) => {
    event.preventDefault();

    if (!description || !projectName) {
      alert("Please fill all the fields");
      return;
    }

    const formData = new FormData();
    formData.append("description", description);
    formData.append("ProjectName", projectName);
    formData.append("postedBy", user._id);
    formData.append("posterName", user.username);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/projects",
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status < 200 || response.status >= 300) {
        throw new Error(
          "adding project: server responded with status " + response.status
        );
      }

      setShowPopup(false);
      // Refresh the page after successfully adding the project
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("error out side" + error.message);
    }
  };

  // Fetching all Project

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/api/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const togglePopupDetails = (projectId) => {
    setShowPopupDetails(!showPopupDetails);
    setSelectedProjectId(projectId);
    // console.log(selectedProjectId)
  };

  // For search bar
  const filteredProjects = projects.filter((project) => {
    // filter method will create a new erray with elements passed
    const name = project.ProjectName.toLowerCase(); // lowercase method will ensure that the search is case-insensitive.
    const term = searchTerm.toLowerCase();
    return name.includes(term); // will check if the searched letters matches with an project name
    // if there is a match the filter methode will include the project that matches in the filterdProject array
    // if not it will be cancelled and print all projects founded
  });

  return (
    <>
      <Header />
      <div className=" father flex justify-center ">
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <BeatLoader color={"#ffffff"} loading={loading} size={30} />
          </div>
        ) : (
          <div className=" flex flex-col  w-full items-center  ">
            <div className="w-full flex justify-center items-center  mt-4 pt-2  ">
              <h2 className="big-title font-bold text-3xl text-white text-left items-center  ">
                Search and browse projects of your taste
              </h2>
            </div>
            <div className=" inputContainer w-5/12 h-[48px] rounded-3xl bg-white m-5 flex  justify-end my-4">
              <form action="" className="flex  w-11/12  ">
                <input
                  type="search"
                  placeholder="search.."
                  className="placeholder-black text-black bg-transparent w-full outline-none text-xl  "
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="mr-2">
                  <FaSearch className=" text-black  text-xl  " />
                </button>
              </form>
            </div>

            {user && (
              <div className="">
                <button
                  className=" bg-white text-black  my-4 rounded-lg px-12  hover:scale-110 transition-all duration-500"
                  onClick={togglePopup}
                >
                  Add Project
                </button>
              </div>
            )}

            {showPopup && (
              <AddingProjectPopup
                togglePopup={togglePopup}
                handleAddProject={handleAddProject}
                projectName={projectName}
                setProjectName={setProjectName}
                description={description}
                setDescription={setDescription}
                setImage={setImage}
                image={image}
              />
            )}

            <div className="flex flex-wrap  justify-center gap-8 text-black my-8 ">
              {filteredProjects?.map((project) => (
                <div
                  key={project._id}
                  className="flex flex-wrap sm:justify-start justify-center gap-8"
                >
                  <div className="flex flex-col w-[250px] p-4  hover:scale-110 transition-all duration-500 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
                    <div className="">
                      <h1 className="text-white ">{project.posterName} </h1>
                    </div>
                    <div className="">
                      <h1 className="text-white text-[13px] py-2">
                        {project.createdAt.slice(0, 10)}
                      </h1>
                    </div>
                    <div className="relative w-full h-56 group mt-2">
                      <div className="absolute inset-0 justify-center items-center  group-hover:flex"></div>
                      <img
                        src={`http://localhost:3001/api${project.imageURL}`}
                        id="file"
                        name="file"
                        alt=""
                        className="w-full h-full rounded-lg  object-cover"
                      />
                    </div>
                    <div className=" flex flex-col ">
                      <p className=" p-2  font-semibold text-lg text-white truncate ">
                        {project.ProjectName}
                      </p>
                    </div>
                    <div className=" flex flex-col ">
                      <p className="p-1 px-2   font-normal text-md text-white truncate">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex justify-center items-center mx-2 mt-2">
                      <div className="  bg-white rounded-md w-6/12 flex justify-center items-center ">
                        <button
                          onClick={() => togglePopupDetails(project._id)}
                          className="p-2 "
                        >
                          See more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {showPopupDetails && (
              <ProjectDetails
                togglePopup={togglePopupDetails}
                projectName={projectName}
                setProjectName={setProjectName}
                description={description}
                setDescription={setDescription}
                selectedProjectId={selectedProjectId}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
