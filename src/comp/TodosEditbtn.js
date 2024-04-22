import React, { useEffect, useState } from 'react'

let oldList=[]
if (localStorage.getItem('myTodos')) {
    oldList=JSON.parse(localStorage.getItem('myTodos'))
    
}

export default function TodosEditbtn() {
    const [text,setText]=useState('')
    const[list,setList]=useState([])

    const [editText,setEditText]=useState('')
    const [editId,seteditId]=useState(null)

    useEffect(()=>{
        localStorage.setItem('myData',JSON.stringify(list))
    },[list])
    


    function addItem(e) {
        e.preventDefault()
        let newList = [...list]
        newList.pust(text)
        setList(newList)

    }
    function editItem(id) {
      
    }

    function deleteItem(index) {
        let newList=[...list]
        newList.splice(index,1)
        setList(newList)
        
    }
        function deleteAll() {
            setList([])
            
        }
        
  return (
    <div>
      <form  onSubmit={addItem}>
        <input type="text" value={text}  onChange={e=> setText(e.target.value)} />

      <button >ADD</button>
      <button onClick={deleteAll} type='button' >DeleteAll</button>
      </form>

      <table>
        {list.map((item,index)=>
        <tr key={index} >

        <td>{index + 1}.</td>
        <td>{item}</td>
<td>
    <button onClick={()=> editItem(index)} >Edit</button>
    <button onClick={()=> deleteItem(index)} >Delete</button>
</td>

        </tr>
        
        )}
        
      </table>
    </div>
  )
}
