import React, { useContext } from "react";
import { StudentContext } from "../../../context/StudentContext";
import "./style.css";

const DeleteStudent: React.FC = () => {
  const { removeStudent } = useContext(StudentContext);
  return (
    <div className="deleteStudent">
      <h2 className="title">Delete Student</h2>
      <h3 className="subtitle">
        Are you sure you want to delete this student?
      </h3>
      <button onClick={removeStudent}>Confirm</button>
    </div>
  );
};

export default DeleteStudent;
