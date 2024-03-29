"use client";
import { logIn, logOut } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/store";
import { UserType } from "@/types/UserType";
import { useState } from "react";
import { useDispatch } from "react-redux";
import userIcon from "../../../public/userIcon.svg";
import Image from "next/image";

export const Login = () => {
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [isLoginHidden, setIsLoginHidden] = useState(true);
  const [isRegisterHidden, setIsRegisterHidden] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const user = useAppSelector((state) => state.authReducer.value);

  const dispatch = useDispatch();

  const isValidPhoneNumber = (phone: string) => {
    const brPhoneRegex = /^\([1-9]{2}\)\s?9[0-9]{4}-[0-9]{4}$/;
    return brPhoneRegex.test(phone);
  };

  const onLoginButtonClick = () => {
    setIsLoginHidden(!isLoginHidden);
  };

  const onLogoutButtonClick = () => {
    setIsUserLoggedIn(false);
    setIsRegisterHidden(true);
    dispatch(logOut());
  };

  const onAuthClick = async (phone: string) => {
    if (!isValidPhoneNumber(phone)) {
      console.error("Invalid phone number");
      return;
    }
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
        dispatch(
          logIn({
            username: user.username,
            phone: user.phone,
            isModerator: user?.isModerator,
          })
        );
        setIsUserLoggedIn(true);
        setIsLoginHidden(true);
      } else if (response.status === 404) {
        setIsRegisterHidden(false);
      } else {
        console.log("Unexpected response:", response.status, data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
    }
    if (value.length > 10) {
      value = `${value.substring(0, 10)}-${value.substring(10)}`;
    }
    setPhone(value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onRegisterButtonClick = async (username: string, phone: string) => {
    if (!isValidPhoneNumber(phone) || username.trim().indexOf(" ") === -1) {
      console.error("Invalid phone number or username");
      return;
    }
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
        const user = data.user;
        dispatch(logIn({ username: user.username, phone: user.phone }));
        setIsLoginHidden(true);
        setIsUserLoggedIn(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const userFirstName = user.username.split(" ")[0];

  return (
    <div className="relative justify-center items-center text-center w-[90px] cursor-pointer">
      {user.isLogged ? (
        <div
          onClick={onLoginButtonClick}
          className="flex flex-col items-center justify-center"
        >
          <Image
            className="sm:h-[40px] sm:w-[40px]"
            src={userIcon}
            width={35}
            height={35}
            alt="user-icon"
          />
          <p className="text-sm font-bold">Olá, {userFirstName}</p>
        </div>
      ) : (
        <div
          onClick={onLoginButtonClick}
          className="flex flex-col items-center justify-center"
        >
          <Image
            className="sm:h-[40px] sm:w-[40px]"
            src={userIcon}
            width={35}
            height={35}
            alt="user-icon"
          />
          <p className="text-sm font-bold">Faça o login</p>
        </div>
      )}

      {!isLoginHidden && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 border
        w-[195px] justify-center border-gray-900 p-4 rounded-md shadow-lg"
        >
          {user.isLogged ? (
            <>
              <h1> ola {user.username}</h1>
              <button onClick={onLogoutButtonClick}>Logout</button>
            </>
          ) : (
            <>
              <label htmlFor="phone" className="text-2xl font-bold mb-4">
                WhatsApp
              </label>
              <input
                className="border border-gray-900 rounded-md w-full py-2 px-4 mb-4"
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={handlePhoneNumberChange}
                placeholder="(__) _____-____"
                required
              />
              {isRegisterHidden === false && (
                <>
                  <p className="text-red-600 text-xs">
                    Não encontramos seu número na base de dados, por favor
                    cadastre-o com seu nome completo abaixo:
                  </p>
                  <label htmlFor="name" className="text-2xl font-bold mb-4">
                    Nome Completo
                  </label>
                  <input
                    className="border border-gray-900 rounded-md w-full py-2 px-4 mb-4"
                    type="text"
                    onChange={handleUsernameChange}
                    value={username}
                    placeholder="Nome"
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
            </>
          )}
        </div>
      )}
    </div>
  );
};
