import Categories from "./admin/_components/Categories";
import AdminMenu from "./admin/page";

const Mainpage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminMenu />
      <div className="flex-1 p-6 overflow-auto">
        <div className="w-full bg-white rounded-lg p-6">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
