import React, { useEffect, useState } from 'react'
import { FormField, Form, Container, Segment, Button } from 'semantic-ui-react'
import { db } from './firebase'
import { onValue, push, ref } from 'firebase/database'

export default function FormExampleForm() {

  const [village, setVillage] = useState('')
  const [customer, setCustomer] = useState('')
  const [mobile, setMobile] = useState('')
  const [list, setList] = useState({})
  const myRef = ref(db, 'students')

  function saveData() {
    if (!customer || !village || !mobile) return
    push(myRef, { village, customer, mobile })
    setCustomer('')
    setVillage('')
    setMobile('')
  }

  useEffect(() => {
    onValue(myRef, (snapshot) => {
      const val = snapshot.val()
      setList(val)
    })
  }, [])

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Haysky</h1>

      <Segment>
        <Form onSubmit={saveData}>
          <FormField>
            <label>Customer Name</label>
            <input placeholder='Customer Name'
              value={customer}
              onChange={e => setCustomer(e.target.value)}
            />
          </FormField>
          <FormField>
            <label>Village Name</label>
            <input placeholder='Village Name'
              value={village}
              onChange={e => setVillage(e.target.value)}
            />
          </FormField>
          <FormField>
            <label>mobile Number</label>
            <input type="number"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
            />
          </FormField>
          <Button color='green'>Add Student</Button>
        </Form>
      </Segment>

      <hr />

      <table className='ui celled blue unstackable table'>
        <thead>
          <tr>
            <th>Student</th>
            <th>Village</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(list).map((item) => <tr>
            <td>{item.customer}</td>
            <td>{item.village}</td>
            <td>{item.mobile}</td>
          </tr>)}
        </tbody>
      </table>
    </Container>
  )
}

