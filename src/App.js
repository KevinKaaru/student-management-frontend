import { useState } from "react";
import { createStudent, getStudents } from "./services/studentService";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [showStudentCard, setShowStudentCard] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    course: ""
  });

  const loadStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
    setShowStudentCard(true); 
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createStudent(form);
    setForm({ name: "", email: "", course: "" });
  };

  return (
    <div className="page">
      <div className="container fade-in">
        <h1 className="title">Students Management</h1>

        {/* ADD STUDENT CARD */}
        <div className="card glass">
          <h2>Add Student</h2>

          <form onSubmit={handleSubmit} className="form">
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="input" />
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="input" />
            <input name="course" placeholder="Course" value={form.course} onChange={handleChange} className="input" />

            <button type="submit" className="button glow">Save</button>
          </form>
        </div>

        {/* GET ALL STUDENTS BUTTON */}
        <button onClick={loadStudents} className="button big glow" style={{ marginTop: 20 }}>
          Get All Students
        </button>

        {/* STUDENTS LIST CARD */}
        {showStudentCard && (
          <div className="card glass slide-up">
            
            {/* CLOSE BUTTON */}
            <button 
              className="close-btn"
              onClick={() => setShowStudentCard(false)}
            >
              ✖ Close
            </button>

            <h2>Students List</h2>

            <ul className="list">
              {students.map((s) => (
                <li key={s.id} className="list-item">
                  <span className="student-name">{s.name}</span>
                  <span className="student-course">{s.course}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
