import { useEffect, useState } from "react";
import {
    getPendingBikes,
    approveBike,
    rejectBike
} from "../api/admin";

import {
    FaCheck,
    FaTimes
} from "react-icons/fa";

import styles from "./PendingBikes.module.css";


function PendingBikes() {

    const [bikes, setBikes] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        loadPendingBikes();
    }, []);



    const loadPendingBikes = async () => {

        try {

            const data = await getPendingBikes();

            setBikes(data);

        } catch(err) {

            console.error(err);

        } finally {

            setLoading(false);

        }

    };



    const handleApprove = async(id) => {

        try {

            await approveBike(id);

            alert("Bike Approved");

            loadPendingBikes();

        } catch(err) {

            console.error(err);

        }

    };



    const handleReject = async(id) => {

        try {

            await rejectBike(id);

            alert("Bike Rejected");

            loadPendingBikes();

        } catch(err) {

            console.error(err);

        }

    };



    if(loading){

        return (
            <div className={styles.loading}>
                Loading...
            </div>
        );

    }



    return (

        <div className={styles.container}>


            <div className={styles.header}>

                <div>

                    <h1>
                        Pending Bike Requests
                    </h1>

                    <p>
                        Review customer bike submissions.
                    </p>

                </div>

            </div>



            {
                bikes.length === 0 ?

                    <div className={styles.empty}>

                        No Pending Bikes

                    </div>


                    :

                    <div className={styles.grid}>


                        {
                            bikes.map((bike)=>(


                                <div
                                    className={styles.card}
                                    key={bike.id}
                                >


                                    <div className={styles.imageBox}>

                                        <img
                                            src={bike.frontView}
                                            alt={bike.brand}
                                        />

                                    </div>



                                    <div className={styles.content}>


                                        <h2>
                                            {bike.brand}
                                        </h2>


                                        <h3>
                                            {bike.model}
                                        </h3>



                                        <p>
                                            Color: {bike.color}
                                        </p>

                                        <p>
                                            Mileage: {bike.mileage}
                                        </p>

                                        <p>
                                            Price: ${bike.pricePerHour}/hr
                                        </p>



                                        <div className={styles.buttons}>


                                            <button
                                                className={styles.approve}
                                                onClick={() =>
                                                    handleApprove(bike.id)
                                                }
                                            >

                                                <FaCheck/>
                                                Approve

                                            </button>



                                            <button
                                                className={styles.reject}
                                                onClick={() =>
                                                    handleReject(bike.id)
                                                }
                                            >

                                                <FaTimes/>
                                                Reject

                                            </button>


                                        </div>


                                    </div>


                                </div>


                            ))
                        }


                    </div>

            }


        </div>

    );

}


export default PendingBikes;