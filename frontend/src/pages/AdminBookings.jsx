import { useEffect, useState } from "react";
import {
    getAllBookings,
    completeBooking,
} from "../api/admin";

import {
    FaCalendarAlt,
    FaMotorcycle,
    FaCheckCircle
} from "react-icons/fa";

import styles from "./AdminBookings.module.css";


function AdminBookings() {


    const [bookings, setBookings] = useState([]);

    const [loading, setLoading] = useState(true);



    useEffect(() => {

        loadBookings();

    }, []);



    const loadBookings = async () => {

        try {

            const data = await getAllBookings();

            setBookings(data);

        } catch(err) {

            console.error(err);

            alert("Failed to load bookings");

        } finally {

            setLoading(false);

        }

    };




    const handleComplete = async(id)=>{


        try{

            await completeBooking(id);

            alert("Booking Completed");

            loadBookings();


        } catch(err){

            console.error(err);

            alert("Unable to complete booking");

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
                        Booking Management
                    </h1>

                    <p>
                        Track and manage all customer rentals.
                    </p>

                </div>


                <div className={styles.count}>

                    <FaCalendarAlt/>

                    {bookings.length} Bookings

                </div>


            </div>





            {
                bookings.length === 0 ?


                    (

                        <div className={styles.empty}>

                            No Bookings Found

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
                                                    booking.status === "BOOKED"
                                                        ?
                                                        styles.booked
                                                        :
                                                        booking.status === "COMPLETED"
                                                            ?
                                                            styles.completed
                                                            :
                                                            styles.cancelled
                                                }
                                            >

                                        {booking.status}

                                    </span>


                                        </div>





                                        <div className={styles.details}>


                                            <p>

                                                <FaCalendarAlt/>

                                                Pickup:
                                                <b>
                                                    {booking.pickupDate}
                                                </b>

                                            </p>



                                            <p>

                                                <FaCalendarAlt/>

                                                Return:
                                                <b>
                                                    {booking.returnDate}
                                                </b>

                                            </p>



                                            <p>

                                                <FaMotorcycle/>

                                                Amount:
                                                <b>
                                                    ${booking.totalAmount}
                                                </b>

                                            </p>


                                        </div>





                                        {
                                            booking.status === "BOOKED" &&

                                            <button

                                                className={styles.complete}

                                                onClick={() =>
                                                    handleComplete(
                                                        booking.bookingId
                                                    )
                                                }

                                            >

                                                <FaCheckCircle/>

                                                Complete Booking

                                            </button>

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


export default AdminBookings;