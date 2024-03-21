import { AppContainer } from "@/components/main-components/AppContainer";
import { NavBar } from "@/components/main-components/NavBar";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-green-300 to-blue-300 h-full">
      <NavBar />
      <AppContainer />;
    </div>
  );
}
