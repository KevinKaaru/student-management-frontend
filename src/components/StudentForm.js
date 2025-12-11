import { useState } from "react";
import axios from "axios";

function StudentForm() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const saveStudent = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8081/api/students", student);
    alert("Student saved successfully!");
    window.location.reload();
  };

  return (
    <form onSubmit={saveStudent} style={{ marginBottom: "30px" }}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="course" placeholder="Course" onChange={handleChange} required />
      <button type="submit">Save Student</button>
    </form>
  );
}

export default StudentForm;
