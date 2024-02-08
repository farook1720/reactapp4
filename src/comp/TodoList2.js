import React, { useState } from 'react'

export default function TodoList2() {
  let oldList = []
  if (localStorage.getItem('myTodos')) {
    oldList = JSON.parse(localStorage.getItem('myTodos'))
  }

  const [text, setText] = useState('')
  const [list, setList] = useState(oldList)

  function addItem() {
    if (text === '') return

    const newList = [...list, text]
    setList(newList)
    localStorage.setItem('myTodos', JSON.stringify(newList))
    setText('')
  }

  function deleteAll() {
    setList([]);
    localStorage.setItem('myTodos', JSON.stringify([]))
  }

  return (
    <div>
      <span>Todo:</span>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button style={addBtn} onClick={addItem}>ADD</button>
      <button style={delBtn} onClick={deleteAll}>deleteAll</button>
      <hr />
      <ol>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

 export const addBtn = { background:'green', color:' red',margin:7,padding:5 }
 export const delBtn = { background:'red', color:' white',margin:4,padding:6}