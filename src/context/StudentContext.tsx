import { createContext, useEffect, useState } from "react";
import { studentType } from "../types/types";

interface StudentContextType {
  allStudents: studentType[];
  openModal: () => void;
  closeModal: () => void;
  showModal: boolean;
  createStudent: (student: studentType) => void;
  handleEdit: (studentId: string) => void;
  editStudentId: string;
  updateStudent: (student: studentType) => void;
}

export const StudentContext = createContext<StudentContextType>({
  allStudents: [],
  openModal: () => {},
  closeModal: () => {},
  showModal: false,
  createStudent: () => {},
  handleEdit: () => {},
  editStudentId: "",
  updateStudent: () => {},
});

export const StudentContextProvider = ({ children }: any) => {
  const [allStudents, setAllStudents] = useState<studentType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editStudentId, setEditStudentId] = useState<string>("");

  const fetchData = async () => {
    try {
      const res = await fetch("data.json");
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setAllStudents(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    editStudentId && setEditStudentId("");
  };

  const createStudent = (student: studentType) => {
    setAllStudents([student, ...allStudents]);
    closeModal();
  };

  const handleEdit = (studentId: string) => {
    setEditStudentId(studentId);
    openModal();
  };

  const updateStudent = (student: studentType) => {
    const newAllStudents = allStudents.map((item) =>
      item.id === student.id ? student : item
    );
    setAllStudents(newAllStudents);
    closeModal();
  };

  const value: StudentContextType = {
    allStudents,
    openModal,
    closeModal,
    showModal,
    createStudent,
    handleEdit,
    editStudentId,
    updateStudent,
  };
  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};
