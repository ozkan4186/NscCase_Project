import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import TodoResults from "../TodoResults/TodoResults";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
       <div className="flex justify-center" >
        <Sidebar/>
        <TodoResults/>
       </div>
    </main>
  );
};

export default Layout;
