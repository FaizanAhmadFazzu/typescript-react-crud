import "./style.css";
import React, { useContext } from "react";
import { StudentContext } from "../../../context/StudentContext";

const StudentModal = ({ children }: any) => {
  const { closeModal } = useContext(StudentContext);
  return (
    <div className="modalContainer" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default StudentModal;
