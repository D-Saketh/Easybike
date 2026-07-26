import { Link } from "react-router-dom";
import styles from "./BikeCard.module.css";

function BikeCard({ bike }) {
    return (
        <div className={styles.card}>
            <img
                src={bike.frontView}
                alt={bike.brand}
                className={styles.image}
            />

            <div className={styles.content}>
                <h2>
                    {bike.brand} {bike.model}
                </h2>

                <p>
                    <strong>Color:</strong> {bike.color}
                </p>

                <p>
                    <strong>Mileage:</strong> {bike.mileage} km
                </p>

                <h3>${bike.pricePerHour}/hour</h3>

                <Link
                    to={`/bikes/${bike.id}`}
                    className={styles.button}
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}

export default BikeCard;