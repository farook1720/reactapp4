import React from 'react';
import Studentcard from './Studentcard';

export default function AllStudents() {
    const title = "List of students";
    const arr = ['apple', 'bat', 'cat'];
    const obj = { name: 'banana', price: 50 };
    console.log(obj.name);
    const data = [
        { name: "ramu", town: 'ndk', phone: "8903487520" },
        { name: "ram", town: "knl", phone: "8037487520" },
        { name: "raju", town: "ndl", phone: "8903477520" }
    ];

    return (
        <div>
            <h1>{title}</h1>
            <pre>{arr}</pre>
            <pre>{JSON.stringify(arr)}</pre>
            <pre>{JSON.stringify(obj)}</pre>
            <Studentcard name="Fixed name" town="fixed town" phone="fixed phone" />

            {data.map((item) => (
                <Studentcard name={item.name} town={item.town} phone={item.phone} />
            ))}
        </div>
    );
}
