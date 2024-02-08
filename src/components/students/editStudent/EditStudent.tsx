import { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import { StudentContext } from "../../../context/StudentContext";
import StudentForm from "../studentForm/StudentForm";
import "./style.css";

const EditStudent = () => {
  const { closeModal, updateStudent, allStudents, editStudentId } =
    useContext(StudentContext);
  const studentToEdit = allStudents.find(
    (item) => item.id === parseInt(editStudentId)
  );
  return (
    <div className="editStudent">
      <div>
        <h2 className="title">Edit Student</h2>
        <FaWindowClose className="icon" onClick={closeModal} />
      </div>
      <StudentForm student={studentToEdit} handleOnSubmit={updateStudent} />
    </div>
  );
};

export default EditStudent;
