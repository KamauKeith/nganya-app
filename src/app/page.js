'use client';

import { useState } from "react";
import './style.css';
import MyLocationIcon from '@mui/icons-material/MyLocation';

export default function Homepage() {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');

    const handleLocation = () => {
        alert('Get current location (simulate)');
    };

    return (
        <div className="homepage">
            <h1>Twendee na Nganya</h1>

            <div className="location-box">
                <input
                    type="text"
                    placeholder="Pickup location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                />
                <button onClick={handleLocation} title="Get exact location" className="location-btn">
                    <MyLocationIcon fontSize="small" />
                </button>
            </div>
        </div>
    )
}