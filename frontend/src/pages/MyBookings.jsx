import { useEffect, useState } from "react";
import {
    FaMotorcycle,
    FaCalendarAlt,
    FaMoneyBillWave,
    FaTimesCircle
} from "react-icons/fa";

import {
    cancelBooking,
    getMyBookings
} from "../api/booking";

import styles from "./MyBookings.module.css";


function MyBookings() {


    const [bookings, setBookings] = useState([]);

    const [loading, setLoading] = useState(true);



    useEffect(() => {

        loadBookings();

    }, []);




    const loadBookings = async()=>{

        try{

            const data = await getMyBookings();

            setBookings(data);

        }
        catch(error){

            console.error(error);

        }
        finally{

            setLoading(false);

        }

    };




    const handleCancel = async(bookingId)=>{


        const confirmCancel = window.confirm(
            "Are you sure you want to cancel this booking?"
        );


        if(!confirmCancel) return;



        try{

            await cancelBooking(bookingId);

            alert("Booking cancelled successfully.");

            loadBookings();


        }
        catch(error){

            console.error(error);

            alert("Unable to cancel booking.");

        }


    };




    if(loading){

        return (

            <div className={styles.loading}>
                Loading bookings...
            </div>

        );

    }





    return (

        <div className={styles.container}>


            <div className={styles.header}>


                <div>

                    <h1>
                        My Bookings
                    </h1>


                    <p>
                        Track your rides and manage your rentals.
                    </p>

                </div>


            </div>





            {
                bookings.length === 0 ?


                    (

                        <div className={styles.empty}>

                            <FaMotorcycle/>

                            <h2>
                                No bookings found
                            </h2>


                            <p>
                                Your upcoming rides will appear here.
                            </p>

                        </div>

                    )


                    :


                    (

                        <div className={styles.grid}>


                            {
                                bookings.map((booking)=>(


                                    <div
                                        className={styles.card}
                                        key={booking.bookingId}
                                    >



                                        <div className={styles.top}>


                                            <div>

                                                <h2>
                                                    {booking.brand}
                                                </h2>


                                                <h3>
                                                    {booking.model}
                                                </h3>

                                            </div>



                                            <span
                                                className={
                                                    booking.status === "COMPLETED"
                                                        ?
                                                        styles.completed
                                                        :
                                                        booking.status === "CANCELLED"
                                                            ?
                                                            styles.cancelled
                                                            :
                                                            styles.booked
                                                }
                                            >

                                        {booking.status}

                                    </span>


                                        </div>





                                        <div className={styles.details}>


                                            <p>

                                                <FaCalendarAlt/>

                                                Pickup

                                                <b>
                                                    {booking.pickupDate}
                                                </b>

                                            </p>



                                            <p>

                                                <FaCalendarAlt/>

                                                Return

                                                <b>
                                                    {booking.returnDate}
                                                </b>

                                            </p>



                                            <p>

                                                <FaMoneyBillWave/>

                                                Amount

                                                <b>
                                                    ${booking.totalAmount}
                                                </b>

                                            </p>


                                        </div>





                                        {
                                            booking.status === "BOOKED" ||
                                            booking.status === "ACTIVE"

                                                ?

                                                <button

                                                    className={styles.cancel}

                                                    onClick={() =>
                                                        handleCancel(
                                                            booking.bookingId
                                                        )
                                                    }

                                                >

                                                    <FaTimesCircle/>

                                                    Cancel Booking

                                                </button>


                                                :

                                                null

                                        }



                                    </div>


                                ))
                            }


                        </div>


                    )

            }



        </div>

    );

}


export default MyBookings;