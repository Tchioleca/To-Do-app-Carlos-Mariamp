import { useState } from "react"
import "./NewItemForm.css"

export default function NewItemForm({ onSubmit }) {
  const [value, setValue] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (!value.trim()) return
    onSubmit(value)
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="New task"
      />
      <button>Add</button>
    </form>
  )
}
