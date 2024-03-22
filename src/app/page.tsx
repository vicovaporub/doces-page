import { AppContainer } from "@/components/main-components/AppContainer";
import { NavBar } from "@/components/main-components/NavBar";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-green-300 to-blue-300 h-full">
      <NavBar />
      <div className="p-5 mt-5 text-center bg-yellow-200 text-yellow-800 text-lg font-bold rounded-lg shadow-md">
        This page is under construction!!
      </div>
      <AppContainer />
    </div>
  );
}
