import {
    FaUser,
    FaEnvelope,
    FaUserShield,
    FaSignOutAlt
} from "react-icons/fa";

import { useAuth } from "../context/AuthContext";

import styles from "./Profile.module.css";


function Profile() {


    const { user, logout } = useAuth();



    const handleLogout = () => {

        logout();

        window.location.href = "/";

    };



    return (

        <div className={styles.container}>


            <div className={styles.card}>


                <div className={styles.avatar}>

                    <FaUser/>

                </div>



                <h1>
                    {user?.fullName}
                </h1>


                <p className={styles.role}>
                    {user?.role}
                </p>





                <div className={styles.details}>


                    <div>

                        <FaEnvelope/>

                        <span>
                            {user?.email}
                        </span>

                    </div>




                    <div>

                        <FaUserShield/>

                        <span>
                            Account Type: {user?.role}
                        </span>

                    </div>


                </div>





                <button
                    onClick={handleLogout}
                >

                    <FaSignOutAlt/>

                    Logout

                </button>



            </div>


        </div>

    );

}


export default Profile;