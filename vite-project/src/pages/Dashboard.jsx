const Dashboard = () => {
    const tasks = [
        { id: 1, title: 'Read the Project brief', completed: false },
        { id: 2, title: 'Create a project repository', completed: true },
        { id: 3, title: 'Create React application using Vite', completed: false },
        { id: 4, title: 'Finish Day 1 Development Tasks', completed: false },
        { id: 5, title: 'Finish Day 1 Research Tasks', completed: false },
        { id: 6, title: 'Finish Day 2 Development Tasks', completed: false },
        { id: 7, title: 'Finish Day 2 Research Tasks', completed: false }
    ];

    return (
        <main className="dashboard-page">
            <section id="tasks" className="tasks">
                <h3>Your Tasks</h3>
                <ul className="task-list">
                    {tasks.map(item => (
                        <li key={item.id} className="task">
                            {item.completed ? '✅' : '❌'} 
                            {item.title}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default Dashboard;