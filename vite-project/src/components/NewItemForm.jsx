import { useState } from 'react';

const NewItemForm = ({ onAddItem }) => {
  const [formData, setFormData] = useState({
    task: '',
    description: '',
    priority: 'medium',
    dueDate: '',
    category: 'General'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.task.trim()) {
      alert('Please enter a task name');
      return;
    }

    const newItem = {
      id: Date.now(), // To generate unique ID
      task: formData.task,
      description: formData.description,
      priority: formData.priority,
      dueDate: formData.dueDate || new Date().toISOString().split('T')[0],
      completed: false,
      category: formData.category,
      createdAt: new Date().toISOString()
    };

    onAddItem(newItem);
    
    // Reset form
    setFormData({
      task: '',
      description: '',
      priority: 'medium',
      dueDate: '',
      category: 'General'
    });
  };

  return (
    <div className="new-item-form">
      <h3>➕ Add New Task</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="task">Task Name *</label>
          <input
            type="text"
            id="task"
            name="task"
            value={formData.task}
            onChange={handleChange}
            placeholder="What needs to be done?"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Add details about this task..."
            rows="3"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="General">General</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Shopping">Shopping</option>
              <option value="Health">Health</option>
            </select>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default NewItemForm;