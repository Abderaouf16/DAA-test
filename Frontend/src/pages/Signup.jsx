import React from "react";
import signup from "../components/CSS/signup.css";
import wood from "../assets/wood.jpg";
import { FcGoogle } from "react-icons/fc";
import Header from "../components/Header/Header";

import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { useSignup } from "../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();

    await signup(email, password, username);
  };

  return (
    <>
      <section className="section_auth">
        <Header />
        <div className="body1">
          <form
            action=""
            className="login-from flex flex-col items-center rounded-lg   "
            onSubmit={handleSignup}
          >
            <h1 className="font-serif    text-2xl"> Signup </h1>
            <div className="form-input-material flex flex-col">
              <label htmlFor="username" className="p-2">
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="username"
                id="username"
                placeholder=""
                className="form-control-material  rounded-sm p-1"
                required
              />
            </div>

            <div className="form-input-material flex flex-col">
              <label htmlFor="email " className="p-2">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder=""
                className="form-control-material  rounded-sm p-1"
                required
              />
            </div>

            <div className="form-input-material flex flex-col">
              <label htmlFor="password " className="p-2">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder=""
                className="form-control-material  rounded-sm p-1"
                required
              />
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="btn bg-white text-black  rounded-md  hover:scale-110 transition-all duration-500"
            >
              Signup
            </button>
            {error && (
              <p className="text-red-500 font-bold p-3 text-sm">{error.msg}</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
