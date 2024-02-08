import { createContext, useEffect, useState } from "react";
import { studentType } from "../types/types";

interface StudentContextType {
  allStudents: studentType[];
  openModal: () => void;
  closeModal: () => void;
  showModal: boolean;
  createStudent: (student: studentType) => void;
}

export const StudentContext = createContext<StudentContextType>({
  allStudents: [],
  openModal: () => {},
  closeModal: () => {},
  showModal: false,
  createStudent: () => {},
});

export const StudentContextProvider = ({ children }: any) => {
  const [allStudents, setAllStudents] = useState<studentType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

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
  };

  const createStudent = (student: studentType) => {
    setAllStudents([student, ...allStudents]);
    closeModal();
  };

  const value: StudentContextType = {
    allStudents,
    openModal,
    closeModal,
    showModal,
    createStudent,
  };
  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};
