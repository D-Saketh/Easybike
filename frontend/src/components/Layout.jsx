import Navbar from "./Navbar";

import styles from "./Layout.module.css";


function Layout({ children }) {


    return (

        <div className={styles.layout}>

            <Navbar />

            <main className={styles.content}>

                {children}

            </main>

        </div>

    );

}


export default Layout;