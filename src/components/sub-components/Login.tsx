"use client";
import { logIn, logOut } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/store";
import { UserType } from "@/types/UserType";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const Login = () => {
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [isLoginHidden, setIsLoginHidden] = useState(true);
  const [isRegisterHidden, setIsRegisterHidden] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const dispatch = useDispatch();

  const onLoginButtonClick = () => {
    setIsLoginHidden(!isLoginHidden);
  };

  const onLogoutButtonClick = () => {
    setIsUserLoggedIn(false);
    dispatch(logOut());
  };

  const onAuthClick = async (phone: string) => {
    try {
      const response = await fetch("/api/usersData", {
        method: "POST",
        body: JSON.stringify({ phone }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (response.status === 200) {
        const user = data.user as UserType;
        dispatch(logIn({ username: user.username, phone: user.phone }));
        setIsUserLoggedIn(true);
      } else if (response.status === 404) {
        setIsRegisterHidden(false);
      } else {
        console.log("Unexpected response:", response.status, data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onRegisterButtonClick = async (username: string, phone: string) => {
    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        body: JSON.stringify({ username, phone }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (response.status === 200) {
        console.log("Registration Successfull");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-4 relative w-[300px]">
      {isUserLoggedIn === false ? (
        <button
          onClick={onLoginButtonClick}
          className="btn btn-primary bg-black text-white py-2 px-4 rounded"
        >
          Conectar
        </button>
      ) : (
        <button
          onClick={onLogoutButtonClick}
          className="btn btn-primary bg-black text-white py-2 px-4 rounded"
        >
          Sair
        </button>
      )}

      {!isLoginHidden && (
        <div className="absolute bg-white bg-opacity-70 border border-gray-900 p-4 rounded-md shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Celular</h1>
          <input
            className="border border-gray-900 rounded-md w-full py-2 px-4 mb-4"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Celular"
          />
          {isRegisterHidden === false && (
            <>
              <p className="text-red-600 text-xs">
                Não encontramos seu número na base de dados, por favor
                cadastre-o com seu nome completo abaixo:
              </p>
              <h1 className="text-2xl font-bold mb-4">Nome</h1>
              <input
                className="border border-gray-900 rounded-md w-full py-2 px-4 mb-4"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nome Completo"
              />
              <button
                onClick={() => onRegisterButtonClick(username, phone)}
                className="btn btn-primary bg-black text-white py-2 px-4 rounded"
              >
                Cadastrar
              </button>
            </>
          )}
          {isRegisterHidden && (
            <button
              onClick={() => onAuthClick(phone)}
              className="btn btn-primary bg-black text-white py-2 px-4 rounded"
            >
              Entrar
            </button>
          )}
        </div>
      )}
    </div>
  );
};
