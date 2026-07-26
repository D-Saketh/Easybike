import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
    FaCalendarAlt,
    FaMotorcycle,
    FaMoneyBillWave,
    FaArrowLeft
} from "react-icons/fa";

import { getBikeById } from "../api/bike";
import { bookBike } from "../api/booking";

import styles from "./Booking.module.css";


function Booking() {

    const { id } = useParams();

    const navigate = useNavigate();


    const [bike, setBike] = useState(null);

    const [form, setForm] = useState({
        pickupDate: "",
        returnDate: ""
    });



    useEffect(() => {

        loadBike();

    }, []);



    const loadBike = async () => {

        try {

            const data = await getBikeById(id);

            setBike(data);

        } catch(err) {

            console.error(err);

        }

    };




    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };




    const handleSubmit = async (e) => {

        e.preventDefault();


        try {


            const bookingData = {

                bikeId: id,

                pickupDate: form.pickupDate,

                returnDate: form.returnDate

            };



            await bookBike(bookingData);



            alert("Booking confirmed successfully");


            navigate("/my-bookings");



        } catch(err) {


            console.error(err);


            alert(
                err?.response?.data?.message ||
                "Unable to create booking"
            );


        }


    };





    if(!bike){

        return (

            <div className={styles.loading}>
                Loading...
            </div>

        );

    }





    return (

        <div className={styles.container}>


            <button
                className={styles.back}
                onClick={()=>navigate(-1)}
            >

                <FaArrowLeft/>

                Back

            </button>





            <div className={styles.card}>


                <div className={styles.left}>


                    <img
                        src={bike.frontView}
                        alt={bike.brand}
                    />



                    <h1>

                        {bike.brand} {bike.model}

                    </h1>



                    <p>

                        <FaMotorcycle/>

                        {bike.fuelType || "Petrol"}

                    </p>



                    <h2>

                        <FaMoneyBillWave/>

                        ${bike.pricePerHour}/hour

                    </h2>


                </div>







                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >



                    <h1>
                        Book Your Ride
                    </h1>



                    <label>
                        Pickup Date
                    </label>


                    <div className={styles.input}>


                        <FaCalendarAlt/>


                        <input

                            type="date"

                            name="pickupDate"

                            value={form.pickupDate}

                            onChange={handleChange}

                            required

                        />


                    </div>





                    <label>
                        Return Date
                    </label>


                    <div className={styles.input}>


                        <FaCalendarAlt/>


                        <input

                            type="date"

                            name="returnDate"

                            value={form.returnDate}

                            onChange={handleChange}

                            required

                        />


                    </div>





                    <button type="submit">

                        Confirm Booking

                    </button>




                </form>


            </div>


        </div>

    );

}


export default Booking;