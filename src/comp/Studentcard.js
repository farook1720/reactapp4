import React from 'react';

export default function Studentcard(p) {
    // Students (p) this p means props
    const mystyle = { fontSize: 25, background: 'red' };
    const x = { fontSize: 50 }; 

    return (
        <div>
            <h2 style={{ color: 'aqua' }}>{p.name}</h2>
            <p style={{ fontSize: 25, backgroundColor: 'orange' }}>{p.town}</p>
            <p style={mystyle}>{p.phone}</p>
        </div>
    );
}
