import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    FaUser,
    FaMotorcycle,
    FaCheckCircle
} from "react-icons/fa";

import { registerBike } from "../api/bike";

import styles from "./RegisterBike.module.css";


function RegisterBike() {


    const navigate = useNavigate();



    const [form,setForm] = useState({

        fullName:"",
        dob:"",
        address:"",
        mobile:"",
        email:"",

        brand:"",
        model:"",
        fuelType:"",
        color:"",
        mileage:"",
        pricePerHour:"",

        ownerPhoto:"owner.jpg",
        rcCertificate:"rc.pdf",
        pollutionCertificate:"pollution.pdf",
        insuranceCertificate:"insurance.pdf",

        frontView:"front.jpg",
        backView:"back.jpg",
        leftView:"left.jpg",
        rightView:"right.jpg"

    });



    const handleChange=(e)=>{

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    };




    const handleSubmit=async(e)=>{

        e.preventDefault();


        try{

            await registerBike(form);

            alert("Bike Registration Submitted Successfully");

            navigate("/customer/dashboard");


        }
        catch(err){

            alert(
                err?.response?.data?.message ||
                "Unable to register bike."
            );

        }


    };





    return (

        <div className={styles.container}>


            <div className={styles.header}>


                <h1>
                    List Your Bike
                </h1>


                <p>
                    Earn money by sharing your bike with EasyBike customers.
                </p>


            </div>





            <form
                className={styles.form}
                onSubmit={handleSubmit}
            >



                {/* OWNER */}


                <div className={styles.section}>


                    <div className={styles.title}>

                        <FaUser/>

                        <h2>
                            Owner Details
                        </h2>

                    </div>



                    <div className={styles.grid}>


                        <input
                            name="fullName"
                            placeholder="Full Name"
                            value={form.fullName}
                            onChange={handleChange}
                            required
                        />


                        <input
                            type="date"
                            name="dob"
                            value={form.dob}
                            onChange={handleChange}
                            required
                        />


                        <input
                            name="mobile"
                            placeholder="Mobile Number"
                            value={form.mobile}
                            onChange={handleChange}
                            required
                        />


                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />


                    </div>



                    <textarea

                        name="address"

                        placeholder="Address"

                        value={form.address}

                        onChange={handleChange}

                        required

                    />


                </div>







                {/* BIKE */}



                <div className={styles.section}>


                    <div className={styles.title}>


                        <FaMotorcycle/>


                        <h2>
                            Bike Details
                        </h2>


                    </div>




                    <div className={styles.grid}>


                        <input

                            name="brand"

                            placeholder="Brand"

                            value={form.brand}

                            onChange={handleChange}

                            required

                        />



                        <input

                            name="model"

                            placeholder="Model"

                            value={form.model}

                            onChange={handleChange}

                            required

                        />



                        <input

                            name="fuelType"

                            placeholder="Fuel Type"

                            value={form.fuelType}

                            onChange={handleChange}

                            required

                        />



                        <input

                            name="color"

                            placeholder="Color"

                            value={form.color}

                            onChange={handleChange}

                            required

                        />



                        <input

                            type="number"

                            name="mileage"

                            placeholder="Mileage"

                            value={form.mileage}

                            onChange={handleChange}

                            required

                        />



                        <input

                            type="number"

                            step="0.01"

                            name="pricePerHour"

                            placeholder="Price Per Hour"

                            value={form.pricePerHour}

                            onChange={handleChange}

                            required

                        />


                    </div>


                </div>






                <button
                    type="submit"
                    className={styles.submit}
                >

                    <FaCheckCircle/>

                    Submit Bike

                </button>




            </form>



        </div>

    );

}


export default RegisterBike;