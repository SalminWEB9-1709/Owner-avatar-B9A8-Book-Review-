import { Outlet } from "react-router-dom";
//import NavBar from "../NavBar/NavBar"



const Root = () => {
    return (
        <div className=" max-w-6xl mx-auto">
          
           
           <Outlet></Outlet>
        </div>
    );
};

export default Root;