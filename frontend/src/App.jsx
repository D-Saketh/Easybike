import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import CustomerDashboard from "./pages/CustomerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import PendingBikes from "./pages/PendingBikes";
import AdminBookings from "./pages/AdminBookings";

import Bikes from "./pages/Bikes";
import BikeDetails from "./pages/BikeDetails";
import MyBookings from "./pages/MyBookings";
import RegisterBike from "./pages/RegisterBike";
import Booking from "./pages/Booking";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Profile from "./pages/Profile";


function App() {

    return (

        <BrowserRouter>

            <Routes>


                {/* PUBLIC */}

                <Route
                    path="/"
                    element={<Login />}
                />


                <Route
                    path="/register"
                    element={<Register />}
                />




                {/* CUSTOMER */}


                <Route
                    path="/customer/dashboard"
                    element={
                        <ProtectedRoute role="CUSTOMER">

                            <Layout>

                                <CustomerDashboard />

                            </Layout>

                        </ProtectedRoute>
                    }
                />



                <Route
                    path="/bikes"
                    element={
                        <ProtectedRoute role="CUSTOMER">

                            <Layout>

                                <Bikes />

                            </Layout>

                        </ProtectedRoute>
                    }
                />



                <Route
                    path="/bikes/:id"
                    element={
                        <ProtectedRoute role="CUSTOMER">

                            <Layout>

                                <BikeDetails />

                            </Layout>

                        </ProtectedRoute>
                    }
                />



                <Route
                    path="/booking/:id"
                    element={
                        <ProtectedRoute role="CUSTOMER">

                            <Layout>

                                <Booking />

                            </Layout>

                        </ProtectedRoute>
                    }
                />



                <Route
                    path="/my-bookings"
                    element={
                        <ProtectedRoute role="CUSTOMER">

                            <Layout>

                                <MyBookings />

                            </Layout>

                        </ProtectedRoute>
                    }
                />



                <Route
                    path="/register-bike"
                    element={
                        <ProtectedRoute role="CUSTOMER">

                            <Layout>

                                <RegisterBike />

                            </Layout>

                        </ProtectedRoute>
                    }
                />





                {/* ADMIN */}



                <Route
                    path="/admin/dashboard"
                    element={
                        <ProtectedRoute role="ADMIN">

                            <Layout>

                                <AdminDashboard />

                            </Layout>

                        </ProtectedRoute>
                    }
                />



                <Route
                    path="/admin/pending-bikes"
                    element={
                        <ProtectedRoute role="ADMIN">

                            <Layout>

                                <PendingBikes />

                            </Layout>

                        </ProtectedRoute>
                    }
                />



                <Route
                    path="/admin/bookings"
                    element={
                        <ProtectedRoute role="ADMIN">

                            <Layout>

                                <AdminBookings />

                            </Layout>

                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>

                            <Layout>

                                <Profile />

                            </Layout>

                        </ProtectedRoute>
                    }
                />



            </Routes>


        </BrowserRouter>

    );

}


export default App;