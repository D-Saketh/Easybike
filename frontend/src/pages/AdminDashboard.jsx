import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    FaUsers,
    FaMotorcycle,
    FaCheckCircle,
    FaClock,
    FaClipboardList,
    FaChartLine,
    FaBan
} from "react-icons/fa";

import { getDashboard } from "../api/admin";
import styles from "./AdminDashboard.module.css";


function AdminDashboard() {

    const [dashboard,setDashboard] = useState(null);


    useEffect(()=>{

        loadDashboard();

    },[]);



    const loadDashboard = async()=>{

        try{

            const data = await getDashboard();

            setDashboard(data);

        }
        catch(err){

            console.error(err);

        }

    };



    if(!dashboard){

        return (

            <div className={styles.loading}>
                Loading dashboard...
            </div>

        );

    }



    return (

        <div className={styles.container}>


            {/* TOP BAR */}

            <div className={styles.topBar}>


                <h2>
                    EasyBike Admin
                </h2>


                <div className={styles.actions}>


                    <Link to="/admin/pending-bikes">

                        <button>
                            Pending Bikes
                        </button>

                    </Link>


                    <Link to="/admin/bookings">

                        <button>
                            All Bookings
                        </button>

                    </Link>


                </div>


            </div>




            {/* HEADER */}


            <div className={styles.header}>

                <h1>
                    Admin Dashboard
                </h1>

                <p>
                    Monitor users, bikes and platform activity.
                </p>


            </div>





            {/* STATS */}


            <div className={styles.stats}>


                <Card
                    icon={<FaUsers />}
                    title="Total Users"
                    value={dashboard.totalUsers}
                />


                <Card
                    icon={<FaMotorcycle />}
                    title="Total Bikes"
                    value={dashboard.totalBikes}
                />


                <Card
                    icon={<FaCheckCircle />}
                    title="Approved Bikes"
                    value={dashboard.approvedBikes}
                />


                <Card
                    icon={<FaClock />}
                    title="Pending Bikes"
                    value={dashboard.pendingBikes}
                />


                <Card
                    icon={<FaClipboardList />}
                    title="Bookings"
                    value={dashboard.totalBookings}
                />


                <Card
                    icon={<FaChartLine />}
                    title="Revenue"
                    value={`$${dashboard.totalRevenue}`}
                />


                <Card
                    icon={<FaCheckCircle />}
                    title="Completed"
                    value={dashboard.completedBookings}
                />


                <Card
                    icon={<FaBan />}
                    title="Cancelled"
                    value={dashboard.cancelledBookings}
                />


            </div>




            {/* QUICK ACTIONS */}


            <h2 className={styles.sectionTitle}>
                Management
            </h2>



            <div className={styles.quick}>


                <Link to="/admin/pending-bikes">


                    <div className={styles.cardAction}>


                        <FaClock/>


                        <h3>
                            Review Bikes
                        </h3>


                        <p>
                            Approve or reject bike listings.
                        </p>


                    </div>


                </Link>




                <Link to="/admin/bookings">


                    <div className={styles.cardAction}>


                        <FaClipboardList/>


                        <h3>
                            Manage Bookings
                        </h3>


                        <p>
                            View all customer bookings.
                        </p>


                    </div>


                </Link>




            </div>


        </div>

    );

}



function Card({icon,title,value}){


    return (

        <div className={styles.card}>


            <div className={styles.icon}>
                {icon}
            </div>


            <div>

                <p>
                    {title}
                </p>


                <h2>
                    {value}
                </h2>

            </div>


        </div>

    );

}



export default AdminDashboard;