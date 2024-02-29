import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";

export default function UserInfo() {
  const { user } = useAuthContext();
  const [editCredentials, setEditCredentials] = useState(false);
  const [editValue, setEditValue] = useState();
  
  const handeleValueChange = (e) => {
    setEditValue(e.target.value);
  };

  return (
    <>
      <div className="">
        <div className=" h-3/5 w-7/12 m-auto flex flex-col">
          <div className="flex justify-center w-full text-2xl items-center">
            <div className="">
              <h2 className="big-title_two font-bold text-3xl text-white text-left items-center  justify-center">
                Personal Information
              </h2>
            </div>
          </div>

          <div className=" big-father rounded-md  mt-1">
            <div className="big-father flex py-10">
              <div className=" flex-1  flex flex-col justify-center items-center ">
                <div className="flex ">
                  <h2 className="p-2 md-title-two ">UserName:</h2>
                </div>
                <div className="mx-8 my-4">
                  <h2>{user.username}</h2>
                </div>
                <div className="">
                  <h2 className="p-2 md-title-two">Your Email:</h2>
                </div>
                <div className="mx-8 my-4">
                  <h2>{user.email}</h2>
                </div>
              </div>
              <div className=" flex-1  flex flex-col items-center ">
                <div className="">
                  <h2 className="p-2 md-title-two ">Created At: </h2>
                </div>
                <div className="">
                  <h2 className="mx-4 my-4">{user.createdAt.slice(0, 10)}</h2>
                </div>
                <div className="">
                  <h2 className="p-2 md-title-two">Personal ID:</h2>
                </div>
                <div className="">
                  <h2 className="mx-4 my-4">{user._id}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
