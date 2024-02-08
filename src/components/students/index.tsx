import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { StudentContext } from "../../context/StudentContext";
import AddStudent from "./addStudent/AddStudent";
import DeleteStudent from "./deleteStudent/DeleteStudent";
import EditStudent from "./editStudent/EditStudent";
import StudentModal from "./studentModal/StudentModal";
import StudentsList from "./studentsList/StudentsList";
import "./style.css";

const Students: React.FC = () => {
  const { allStudents, openModal, showModal, editStudentId, deleteStudentId } =
    useContext(StudentContext);
  return (
    <div className="studentsContainer">
      <div className="header">
        <h1>Students Management System</h1>
        <button className="button addBtn" onClick={openModal}>
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
      {showModal && (
        <StudentModal>
          {deleteStudentId ? (
            <DeleteStudent />
          ) : editStudentId ? (
            <EditStudent />
          ) : (
            <AddStudent />
          )}
        </StudentModal>
      )}
    </div>
  );
};

export default Students;
