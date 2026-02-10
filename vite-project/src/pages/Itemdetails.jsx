// src/pages/ItemDetails.jsx
import { useParams, useNavigate, Link } from 'react-router-dom';

const ItemDetails = () => {
  const { id } = useParams(); // I am not sure what ID to add here, I will add it later - Mariam.
  const navigate = useNavigate();
  
  // Mock database of tasks. We can change this - Mariam
  const tasks = [
    { 
      id: 1, 
      task: "Read the Project brief", 
      completed: true, 
      description: "Thoroughly read and understand the project requirements, specifications, and deliverables. Take notes on important points.",
      dueDate: "2024-01-15",
      priority: "High",
      category: "Research",
      notes: "Completed on time. Understood all requirements.",
      createdAt: "2024-01-10"
    },
    { 
      id: 2, 
      task: "Create a project repository", 
      completed: false, 
      description: "Set up a GitHub repository for the project with proper folder structure, README.md, and .gitignore file.",
      dueDate: "2024-01-18",
      priority: "High",
      category: "Setup",
      notes: "Need to add license file",
      createdAt: "2024-01-12"
    },
    { 
      id: 3, 
      task: "Create React application using Vite", 
      completed: false, 
      description: "Initialize a new React project using Vite for better performance and development experience.",
      dueDate: "2024-01-20",
      priority: "Medium",
      category: "Development",
      notes: "Choose TypeScript template",
      createdAt: "2024-01-14"
    },
    { 
      id: 4, 
      task: "Finish Day 1 Development Tasks", 
      completed: false, 
      description: "Complete all development tasks assigned for the first day including component setup and routing.",
      dueDate: "2024-01-22",
      priority: "Medium",
      category: "Development",
      notes: "Focus on core functionality first",
      createdAt: "2024-01-16"
    },
    { 
      id: 5, 
      task: "Finish Day 1 Research Tasks", 
      completed: false, 
      description: "Complete all research tasks including studying documentation and planning architecture.",
      dueDate: "2024-01-22",
      priority: "Low",
      category: "Research",
      notes: "Check React Router docs",
      createdAt: "2024-01-16"
    }
  ];
  
  // Find the task with matching ID
  const task = tasks.find(t => t.id === parseInt(id));
  
  // If task doesn't exist, redirect to 404
  if (!task) {
    return (
      <div className="task-not-found">
        <h2>Task Not Found</h2>
        <p>Task with ID #{id} doesn't exist.</p>
        <button onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </button>
      </div>
    );
  }
  
  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="item-details-page">
      {/* Header with back button */}
      <div className="details-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="header-actions">
          <Link to={`/edit/${task.id}`} className="edit-btn">Edit</Link>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
      
      {/* Main task info */}
      <div className="task-main-info">
        <div className="task-title-section">
          <div className="completion-status">
            <span className={`status-indicator ${task.completed ? 'completed' : 'pending'}`}>
              {task.completed ? '✅' : '⏳'}
            </span>
            <span className={`status-text ${task.completed ? 'completed' : 'pending'}`}>
              {task.completed ? 'Completed' : 'Pending'}
            </span>
          </div>
          
          <h1 className="task-title">{task.task}</h1>
          
          <div className="task-meta">
            <span className={`priority-badge priority-${task.priority.toLowerCase()}`}>
              {task.priority} Priority
            </span>
            <span className="category-badge">
              {task.category}
            </span>
            <span className="task-id">
              ID: #{task.id}
            </span>
          </div>
        </div>
        
        {/* Toggle completion button */}
        <button className={`toggle-btn ${task.completed ? 'mark-incomplete' : 'mark-complete'}`}>
          {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
      </div>
      
      {/* Details grid */}
      <div className="details-grid">
        {/* Description */}
        <div className="detail-card">
          <h3 className="detail-title">
            <span className="detail-icon">📝</span>
            Description
          </h3>
          <p className="detail-content">{task.description}</p>
        </div>
        
        {/* Due Date */}
        <div className="detail-card">
          <h3 className="detail-title">
            <span className="detail-icon">📅</span>
            Due Date
          </h3>
          <div className="due-date-info">
            <span className="date-display">{formatDate(task.dueDate)}</span>
            <span className={`date-status ${new Date(task.dueDate) > new Date() ? 'on-time' : 'overdue'}`}>
              {new Date(task.dueDate) > new Date() ? 'On Track' : 'Overdue'}
            </span>
          </div>
        </div>
        
        {/* Notes */}
        <div className="detail-card">
          <h3 className="detail-title">
            <span className="detail-icon">📋</span>
            Notes
          </h3>
          <p className="detail-content">{task.notes || 'No additional notes.'}</p>
        </div>
        
        {/* Created Date */}
        <div className="detail-card">
          <h3 className="detail-title">
            <span className="detail-icon">⏰</span>
            Created
          </h3>
          <p className="detail-content">{formatDate(task.createdAt)}</p>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="action-buttons">
        <button className="action-btn primary">Save Changes</button>
        <button className="action-btn secondary">Add Subtask</button>
        <button className="action-btn outline">Duplicate Task</button>
      </div>
      
      {/* Navigation to other tasks */}
      <div className="task-navigation">
        <h3>Other Tasks</h3>
        <div className="nav-links">
          {id > 1 && (
            <Link to={`/item/${parseInt(id) - 1}`} className="nav-link">
              ← Previous Task
            </Link>
          )}
          {id < tasks.length && (
            <Link to={`/item/${parseInt(id) + 1}`} className="nav-link next">
              Next Task →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;