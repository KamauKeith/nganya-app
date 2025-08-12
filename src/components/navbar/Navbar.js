'use client';

import Link from "next/link";
import './Navbar.css';

export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link href="/">Nganya</Link>
            </div>
            <ul className="nav-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/trips">Trips</Link></li>
                <li><Link href="/sacco">Sacco</Link></li>
                <li><Link href="/Account">Account</Link></li>
            </ul>
            <div className="nav-actions">
                <Link href="/signup">Sign-In</Link>
            </div>
        </nav>
    );
}