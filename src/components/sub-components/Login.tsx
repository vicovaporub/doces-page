"use client";
import { logIn } from "@/redux/features/authSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const [phone, setPhone] = useState("");
  const [isLoginHidden, setIsLoginHidden] = useState(true);

  const dispatch = useDispatch();

  const onLoginButtonClick = () => {
    setIsLoginHidden(!isLoginHidden);
  };

  const onAuthClick = () => {
    dispatch(logIn(phone));
  };

  return (
    <div className="p-[2px] relative">
      <button
        onClick={onLoginButtonClick}
        className="btn btn-primary bg-black text-white"
      >
        Entrar
      </button>

      {isLoginHidden ? null : (
        <div className="absolute h-[30vh] bg-white bg-opacity-70 border border-gray-900">
          <h1>Número do celular</h1>
          <input
            className="border border-gray-900 rounded-md w-32"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Celular"
          />
          <button
            onClick={onAuthClick}
            className="btn btn-primary bg-black text-white"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};
