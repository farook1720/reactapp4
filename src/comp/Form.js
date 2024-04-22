import React, { useEffect, useState } from 'react'
import { FormField, Form, Segment, Button, Container } from 'semantic-ui-react'
import { onValue, push, ref } from 'firebase/database'
import { db } from './firebase'



export default function CustomerForm() {

    const [customer, setCustomer] = useState('')
    const [village, setVillage] = useState('')
    const [phone, setPhone] = useState('')
    const [list, setList] = useState({})
    const myref = ref(db, 'students')

    function SaveData() {

        if (!customer || !village || !phone) return
        push(myref, { customer, village, phone })
        setCustomer('')
        setVillage('')
        setPhone('')
    }

    useEffect(() => {
        onValue(myref, (snapshot) => {
            const val = snapshot.val()
            setList(val)

        })
    }, [])





    return (
        <div>
            <Container>
                <h1 style={{ textAlign: "center", color: 'red' }} >Haysky</h1>
                <Segment>


                    <Form onSubmit={SaveData} error >
                        <FormField>
                            <label >Customer Name</label>
                            < input type="text" placeholder='Customer Name' value={customer} onChange={e => setCustomer(e.target.value)} error />
                        </FormField>

                        <FormField>
                            <label >Vilage Name</label>
                            <input type="text" placeholder='Village Name' value={village} onChange={e => setVillage(e.target.value)} />
                        </FormField>

                        <FormField>
                            <label >Phone number</label>
                            <input type="text" placeholder='Phone number' value={phone} onChange={e => setPhone(e.target.value)} />
                        </FormField>

                        <Button color='pink' >SAVE CUSTOMER</Button>

                    </Form>
                </Segment>
                <hr />
                <table className='ui celled blue unstackable table' >
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Village</th>
                            <th>Phone</th>
                        </tr>

                    </thead>
                    <tbody>
                        {Object.values(list).map((item) => <tr >
                            <td>{item.customer}</td>
                            <td>{item.village}</td>
                            <td>{item.phone}</td>
                        </tr>)}
                        <Button color='red'>Delete</Button>

                    </tbody>

                </table>
            </Container>

        </div>
    )
}
