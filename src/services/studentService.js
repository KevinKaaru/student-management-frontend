import axios from "axios";

const API_BASE = "https://student-management-backend-production-cc0a.up.railway.app/api/students";

export const getStudents = () => axios.get(API_BASE);

export const createStudent = (student) => axios.post(API_BASE, student);

