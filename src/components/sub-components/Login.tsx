"use client";
import { logIn, logOut } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/store";
import { UserType } from "@/types/UserType";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import userIcon from "../../../public/userIcon.svg";
import Image from "next/image";

export const Login = () => {
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [isLoginHidden, setIsLoginHidden] = useState(true);
  const [isRegisterHidden, setIsRegisterHidden] = useState(true);

  const user = useAppSelector((state) => state.authReducer.value);

  const dispatch = useDispatch();

  const loginRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        loginRef.current &&
        !loginRef.current.contains(event.target as Node)
      ) {
        setIsRegisterHidden(true);
        setIsLoginHidden(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isValidPhoneNumber = (phone: string) => {
    const brPhoneRegex = /^\([1-9]{2}\)\s?9[0-9]{4}-[0-9]{4}$/;
    return brPhoneRegex.test(phone);
  };

  const onLoginButtonClick = () => {
    setIsLoginHidden(!isLoginHidden);
  };

  const onLogoutButtonClick = () => {
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
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const userFirstName = user.username.split(" ")[0];

  return (
    <div
      ref={loginRef}
      className="relative justify-center items-center text-center sm:w-[90px] w-[90px] cursor-pointer"
      style={{ zIndex: 9999 }}
    >
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
          className="flex flex-col items-center justify-center "
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
          className="absolute left-1/2 sm:top-[67px] top-[66px] transform -translate-x-1/2 bg-white bg-opacity-90 border border-gray-100
        w-[195px] justify-center  p-4 rounded-md shadow-lg"
        >
          {user.isLogged ? (
            <>
              <h1 className="flex flex-col items-center">
                <span className="font-bold">Conectado como: </span>
                <span className="border border-amber-900 py-2 px-2 w-fit text-center rounded-xl m-2">
                  {user.username}
                </span>
              </h1>
              <button
                className="bg-red-800 hover:bg-red-700 py-2 px-4
                    font-bold rounded-xl transition duration-500 ease-in-out
                    text-white"
                onClick={onLogoutButtonClick}
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <label
                htmlFor="phone"
                className="text-2xl font-bold mb-4 text-amber-900"
              >
                WhatsApp
              </label>
              <input
                className="border border-amber-900 rounded-md w-full py-2 px-4 mb-4"
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
                  <p className="text-red-600 text-xs mb-2">
                    Não encontramos seu número na base de dados, por favor
                    cadastre-o com seu nome completo abaixo:
                  </p>
                  <label
                    htmlFor="name"
                    className="text-2xl font-bold mb-4 text-amber-900"
                  >
                    Nome Completo
                  </label>
                  <input
                    className="border border-amber-900 rounded-md w-full py-2 px-4 mb-4"
                    type="text"
                    onChange={handleUsernameChange}
                    value={username}
                    placeholder="Nome"
                  />
                  <button
                    onClick={() => onRegisterButtonClick(username, phone)}
                    className="bg-amber-500 hover:bg-amber-600 py-2 px-4
                    font-bold rounded-xl transition duration-500 ease-in-out
                    text-white"
                  >
                    Cadastrar
                  </button>
                </>
              )}
              {isRegisterHidden && (
                <button
                  onClick={() => onAuthClick(phone)}
                  className="bg-amber-500 hover:bg-amber-600 py-2 px-4
                  font-bold rounded-xl transition duration-500 ease-in-out
                  text-white"
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
