import React from 'react'

export default function Mytable() {
  return (
    <div>
      <table border={1}>
        <tr>
            <th>S no</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>

        </tr>
        <tr>
            <td>1</td>
            <td>Ramu</td>
            <td>25</td>
            <td>25-984505684</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Raghu</td>
            <td>25</td>
            <td>984505684</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Raju</td>
            <td>25</td>
            <td>25-984505684</td>
        </tr>
      </table>
    </div>
  )
}
