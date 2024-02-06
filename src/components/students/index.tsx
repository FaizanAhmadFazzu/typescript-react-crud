import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { StudentContext } from "../../context/StudentContext";
import StudentsList from "./studentsList/StudentsList";
import "./style.css";

const Students: React.FC = () => {
  const { allStudents } = useContext(StudentContext);
  return (
    <div className="studentsContainer">
      <div className="header">
        <h1>Students Management System</h1>
        <button className="button addBtn">
          <FaPlus className="icon" />
          <span>Add New Student</span>
        </button>
      </div>
      {allStudents && allStudents.length > 0 ? (
        <StudentsList />
      ) : (
        <p className="noRecord">
          No students available, please add some students
        </p>
      )}
    </div>
  );
};

export default Students;
