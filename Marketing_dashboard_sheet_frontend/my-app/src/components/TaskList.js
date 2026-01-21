import "./TaskList.css";
import TaskCard from "./TaskCard";

export default function TaskList({ ds }) {
  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse" }}
      border="1"
    >
      <thead>
        <tr>
          <th>Lead ID</th>
          <th>Client Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Assigned To</th>
          <th>Follow-up</th>
        </tr>
      </thead>

      <tbody>
        {ds.map((item) => (
          <TaskCard key={item.id} dss={item} />
        ))}
      </tbody>
    </table>
  );
}
