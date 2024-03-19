"use client";
import { AppContainer } from "@/components/main-components/AppContainer";
import { NavBar } from "@/components/main-components/NavBar";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <AppContainer />;
      </Provider>
    </>
  );
}
