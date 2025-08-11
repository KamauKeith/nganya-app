'use client';

import { useState } from "react";
import Link from "next/link";
import './style.css';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

export default function Homepage() {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');

    const handleLocation = () => {
        alert('Get current location (simulate)');
    };

    return (
        <div className="homepage">
            {/* Welcome Banner */}
            <div className="welcome-banner">
                <div>
                    <h2>Welcome back, User #VH2024!</h2>
                    <p>Current Location: Downtown Business District</p>
                    <p><strong>From:</strong> Main Terminal &nbsp; <strong>To:</strong> Airport Hub</p>
                </div>
                <div className="trip-status">
                    <span className="status-dot ongoing"></span>
                    Trip Status: <strong>Ongoing</strong><br />
                    ETA: <strong>25 minutes</strong>
                </div>
            </div>

            {/* Vehicle Fleet */}
            <h3>Vehicle Fleet</h3>
            <div className="fleet-grid">
                <FleetCard icon={<DirectionsCarIcon />} id="VH001" type="Sedan" status="Ongoing" location="CBD to Kasarani" driver="Mike Ellie" />
                <FleetCard icon={<LocalShippingIcon />} id="VH002" type="Truck" status="Idle" location="CBD to Thika" driver="Caleb Kasmall" />
                <FleetCard icon={<DirectionsBusIcon />} id="VH003" type="Van" status="Done" location="CBD to Kimbo" driver="Leon Kuunga" />
                <FleetCard icon={<DirectionsBusIcon />} id="VH004" type="Bus" status="Ongoing" location="CBD to Kahawa West" driver="Steve Kadere" />
                <FleetCard icon={<TwoWheelerIcon />} id="VH005" type="Bike" status="Done" location="CBD to Utawala" driver="Johni Qaris" />
                <FleetCard icon={<LocalTaxiIcon />} id="VH006" type="Taxi" status="Idle" location="CBD to Eastleigh" driver="Javan Vanja" />
            </div>

            {/* Summary Section */}
            <div className="summary-cards">
                <SummaryCard label="Ongoing Trips" count={2} icon="▶️" />
                <SummaryCard label="Idle Vehicles" count={2} icon="⏸️" />
                <SummaryCard label="Completed Today" count={2} icon="✅" />
            </div>
        </div>
    );
}

// Reusable FleetCard component
function FleetCard({ icon, id, type, status, location, driver }) {
    return (
        <div className={`fleet-card ${status.toLowerCase()}`}>
            <div className="fleet-icon">{icon}</div>
            <h4>{type} - {id}</h4>
            <p>{location}</p>
            <p><strong>Driver:</strong> {driver}</p>
            <span className={`status-tag ${status.toLowerCase()}`}>{status}</span>
        </div>
    );
}

// Reusable SummaryCard component
function SummaryCard({ label, count, icon }) {
    return (
        <div className="summary-card">
            <div className="summary-icon">{icon}</div>
            <div>
                <strong>{count}</strong>
                <p>{label}</p>
            </div>
        </div>
    );
}
