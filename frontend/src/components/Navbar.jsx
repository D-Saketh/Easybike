import { Link, useNavigate } from "react-router-dom";
import {
    FaMotorcycle,
    FaClipboardList,
    FaUser,
    FaSignOutAlt
} from "react-icons/fa";

import { useAuth } from "../context/AuthContext";

import styles from "./Navbar.module.css";


function Navbar() {


    const { user, logout } = useAuth();

    const navigate = useNavigate();



    const handleLogout = () => {

        logout();

        navigate("/");

    };




    return (

        <nav className={styles.navbar}>


            <Link
                to={
                    user?.role === "ADMIN"
                        ?
                        "/admin/dashboard"
                        :
                        "/customer/dashboard"
                }
                className={styles.logo}
            >

                <FaMotorcycle/>

                EasyBike

            </Link>





            <div className={styles.links}>


                {
                    user?.role !== "ADMIN" &&

                    <>

                        <Link to="/bikes">

                            <FaMotorcycle/>

                            Bikes

                        </Link>



                        <Link to="/my-bookings">

                            <FaClipboardList/>

                            Bookings

                        </Link>


                    </>

                }





                <Link to="/profile">

                    <FaUser/>

                    Profile

                </Link>



                <button
                    onClick={handleLogout}
                >

                    <FaSignOutAlt/>

                    Logout

                </button>



            </div>



        </nav>

    );

}


export default Navbar;