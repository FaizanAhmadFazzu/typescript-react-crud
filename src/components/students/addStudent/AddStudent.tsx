import "./style.css";
import React, { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import { StudentContext } from "../../../context/StudentContext";
import { studentType } from "../../../types/types";
import StudentForm from "../studentForm/StudentForm";

const AddStudent = () => {
  const { allStudents, createStudent, closeModal } = useContext(StudentContext);

  const addStudent = (student: studentType) => {
    createStudent(student);
  };

  return (
    <div className="addStudent">
      <div>
        <h2 className="title">Add Student</h2>
        <FaWindowClose className="icon" onClick={closeModal} />
      </div>
      <StudentForm handleOnSubmit={addStudent} />
    </div>
  );
};

export default AddStudent;
