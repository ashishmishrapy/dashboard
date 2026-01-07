import Main from "../components/Main";
import SideBar from "../components/Sidebar";

export const Dashboard = () => {
  return (
    <div className="p-2 grid grid-cols-[20%_80%] max-h-screen min-h-screen rounded-xl">
      <SideBar />
      <Main />
    </div>
  );
};
