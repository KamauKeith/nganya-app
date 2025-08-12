'use client';
import Link from 'next/link';
import './style.css';

export default function SACCO() {
    const saccos = [
        { id: 1, name: 'Metro Trans' },
        { id: 2, name: 'Latema' },
        { id: 3, name: 'Super Metro' },
        { id: 4, name: 'MSL' },
    ];

    return (
        <div className='dashboard-container'>
            <h1 className='dashboard-title'>SACCO Dashboard</h1>
            <ul className='sacco-list'>
                {saccos.map((sacco) => (
                    <li className='sacco-item' key={sacco.id}>
                        <Link className='sacco-link' href={`/saccos/${sacco.id}`}>
                            {sacco.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}