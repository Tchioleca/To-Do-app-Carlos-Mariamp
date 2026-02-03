import './Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar" role="complementary">
      <ul>
        <li><a href="#">Inbox</a></li>
        <li><a href="#">Today</a></li>
        <li><a href="#">Upcoming</a></li>
        <li><a href="#">Completed</a></li>
      </ul>
    </aside>
  )
}
