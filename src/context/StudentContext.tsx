import { createContext, useEffect, useState } from "react";
import { studentType } from "../types/types";

interface StudentContextType {
  allStudents: studentType[];
}

export const StudentContext = createContext<StudentContextType>({
  allStudents: [],
});

export const StudentContextProvider = ({ children }: any) => {
  const [allStudents, setAllStudents] = useState<studentType[]>([]);

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

  const value: StudentContextType = {
    allStudents,
  };
  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};
