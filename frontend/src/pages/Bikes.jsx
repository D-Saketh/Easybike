import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    FaSearch,
    FaMapMarkerAlt,
    FaMotorcycle,
    FaArrowRight
} from "react-icons/fa";

import { getApprovedBikes } from "../api/bike";
import styles from "./Bikes.module.css";


function Bikes() {


    const [bikes,setBikes] = useState([]);

    const [search,setSearch] = useState("");



    useEffect(()=>{

        loadBikes();

    },[]);




    const loadBikes = async()=>{

        try{

            const data = await getApprovedBikes();

            setBikes(data.content || data);

        }
        catch(err){

            console.error(err);

        }

    };





    const filteredBikes = bikes.filter((bike)=>{


        const text = search.toLowerCase();


        return (

            bike.brand?.toLowerCase().includes(text)

            ||

            bike.model?.toLowerCase().includes(text)

        );


    });






    return (

        <div className={styles.container}>


            <div className={styles.header}>


                <div>

                    <h1>
                        Find your next ride
                    </h1>


                    <p>
                        Choose from available bikes and start your journey.
                    </p>


                </div>




                <div className={styles.search}>


                    <FaSearch/>


                    <input

                        placeholder="Search brand or model..."

                        value={search}

                        onChange={(e)=>
                            setSearch(e.target.value)
                        }

                    />


                </div>



            </div>






            {
                filteredBikes.length === 0 ?


                    (

                        <div className={styles.empty}>


                            <FaMotorcycle/>


                            <h2>
                                No bikes found
                            </h2>


                            <p>
                                Try another search.
                            </p>


                        </div>

                    )


                    :


                    (

                        <div className={styles.grid}>


                            {
                                filteredBikes.map((bike)=>(


                                    <div
                                        className={styles.card}
                                        key={bike.id}
                                    >


                                        <div className={styles.image}>


                                            {
                                                bike.imageUrl

                                                    ?

                                                    <img
                                                        src={bike.imageUrl}
                                                        alt={bike.brand}
                                                    />

                                                    :

                                                    <FaMotorcycle/>

                                            }


                                        </div>





                                        <div className={styles.content}>


                                            <div className={styles.top}>


                                                <div>

                                                    <h2>
                                                        {bike.brand}
                                                    </h2>

                                                    <h3>
                                                        {bike.model}
                                                    </h3>

                                                </div>


                                                <span>
                                            {bike.status}
                                        </span>


                                            </div>





                                            <p className={styles.location}>

                                                <FaMapMarkerAlt/>

                                                Available for rent

                                            </p>





                                            <div className={styles.bottom}>


                                                <h2>
                                                    ${bike.pricePerHour}
                                                    <small>/hr</small>
                                                </h2>



                                                <Link
                                                    to={`/bikes/${bike.id}`}
                                                >

                                                    <button>

                                                        View

                                                        <FaArrowRight/>

                                                    </button>


                                                </Link>


                                            </div>



                                        </div>



                                    </div>


                                ))
                            }


                        </div>


                    )

            }



        </div>

    );

}


export default Bikes;