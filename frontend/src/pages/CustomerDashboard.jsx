import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaMotorcycle,
    FaClipboardList,
    FaPlus,
    FaSignOutAlt,
    FaCheckCircle,
    FaClock,
    FaWallet
} from "react-icons/fa";

import { getCustomerDashboard } from "../api/dashboard";
import { useAuth } from "../context/AuthContext";
import styles from "./CustomerDashboard.module.css";


function CustomerDashboard() {

    const { user, logout } = useAuth();

    const [dashboard, setDashboard] = useState(null);


    useEffect(() => {
        loadDashboard();
    }, []);


    const loadDashboard = async () => {
        try {

            const data = await getCustomerDashboard();

            setDashboard(data);

        } catch (err) {

            console.error(err);

        }
    };


    if (!dashboard) {

        return (
            <div className={styles.loading}>
                Loading dashboard...
            </div>
        );

    }


    return (

        <div className={styles.container}>


            {/* TOP NAV */}

            <div className={styles.topBar}>

                <h2>
                    EasyBike
                </h2>


                <div className={styles.userSection}>

                    <span>
                        {user?.fullName}
                    </span>


                    <button
                        onClick={() => {
                            logout();
                            window.location.href = "/";
                        }}
                    >
                        <FaSignOutAlt />
                    </button>

                </div>

            </div>



            {/* HEADER */}

            <div className={styles.header}>

                <div>

                    <h1>
                        Good evening, {user?.fullName}
                    </h1>


                    <p>
                        Manage your bikes, bookings and rentals from here.
                    </p>

                </div>


                <div className={styles.actions}>

                    <Link to="/bikes">

                        <button className={styles.primary}>
                            <FaMotorcycle />
                            Browse Bikes
                        </button>

                    </Link>


                    <Link to="/register-bike">

                        <button className={styles.secondary}>
                            <FaPlus />
                            Register Bike
                        </button>

                    </Link>


                </div>

            </div>



            {/* STATS */}

            <div className={styles.stats}>


                <Card
                    icon={<FaMotorcycle />}
                    title="My Bikes"
                    value={dashboard.myBikes}
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
                    value={dashboard.myBookings}
                />


                <Card
                    icon={<FaWallet />}
                    title="Amount Spent"
                    value={`$${dashboard.amountSpent}`}
                />


            </div>




            {/* QUICK ACTIONS */}

            <h2 className={styles.sectionTitle}>
                Quick Actions
            </h2>


            <div className={styles.quick}>


                <Link to="/bikes">

                    <div className={styles.actionCard}>

                        <FaMotorcycle />

                        <h3>
                            Explore Bikes
                        </h3>

                        <p>
                            Find your next ride.
                        </p>

                    </div>

                </Link>



                <Link to="/my-bookings">

                    <div className={styles.actionCard}>

                        <FaClipboardList />

                        <h3>
                            My Bookings
                        </h3>

                        <p>
                            View and manage trips.
                        </p>

                    </div>

                </Link>



                <Link to="/register-bike">

                    <div className={styles.actionCard}>

                        <FaPlus />

                        <h3>
                            List Your Bike
                        </h3>

                        <p>
                            Earn by renting your bike.
                        </p>

                    </div>

                </Link>


            </div>


        </div>

    );

}



function Card({icon,title,value}) {


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


export default CustomerDashboard;