import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
    FaArrowLeft,
    FaGasPump,
    FaRoad,
    FaMoneyBillWave,
    FaMapMarkerAlt,
    FaMotorcycle
} from "react-icons/fa";

import { getBikeById } from "../api/bike";

import styles from "./BikeDetails.module.css";


function BikeDetails() {


    const { id } = useParams();

    const navigate = useNavigate();


    const [bike,setBike] = useState(null);



    useEffect(()=>{

        loadBike();

    },[]);




    const loadBike = async()=>{


        try{

            const data = await getBikeById(id);

            setBike(data);

        }
        catch(err){

            console.error(err);

        }


    };




    if(!bike){

        return(

            <div className={styles.loading}>
                Loading bike details...
            </div>

        );

    }





    return(


        <div className={styles.container}>


            <button
                className={styles.back}
                onClick={()=>navigate(-1)}
            >

                <FaArrowLeft/>

                Back

            </button>




            <div className={styles.main}>


                {/* IMAGE */}


                <div className={styles.imageCard}>


                    {
                        bike.frontView

                            ?

                            <img
                                src={bike.frontView}
                                alt={bike.brand}
                            />

                            :

                            <FaMotorcycle/>

                    }


                </div>






                {/* DETAILS */}


                <div className={styles.details}>


                    <div className={styles.title}>


                        <div>

                            <h1>
                                {bike.brand}
                            </h1>


                            <h2>
                                {bike.model}
                            </h2>


                        </div>



                        <span>
                            {bike.status}
                        </span>


                    </div>





                    <div className={styles.location}>


                        <FaMapMarkerAlt/>

                        Available for rental


                    </div>





                    <p className={styles.description}>

                        Enjoy a smooth and comfortable ride with
                        this well-maintained bike. Book now and
                        start your journey.

                    </p>






                    <div className={styles.features}>


                        <div>

                            <FaGasPump/>

                            <p>
                                Fuel
                            </p>

                            <b>
                                {bike.fuelType || "Petrol"}
                            </b>


                        </div>




                        <div>

                            <FaRoad/>

                            <p>
                                Mileage
                            </p>

                            <b>
                                {bike.mileage} km/l
                            </b>


                        </div>




                        <div>

                            <FaMoneyBillWave/>

                            <p>
                                Price
                            </p>

                            <b>
                                ${bike.pricePerHour}/hr
                            </b>


                        </div>


                    </div>



                </div>






                {/* BOOKING */}



                <div className={styles.booking}>


                    <p>
                        Starting from
                    </p>


                    <h1>

                        ${bike.pricePerHour}

                        <small>
                            /hour
                        </small>

                    </h1>




                    <button

                        onClick={()=>
                            navigate(`/booking/${bike.id}`)
                        }

                    >

                        Book This Bike

                    </button>


                </div>



            </div>


        </div>


    );


}


export default BikeDetails;