import "./style.css";
import React, { useState } from "react";
import { studentType, formErrorsType } from "../../../types/types";
interface Props {
  student?: studentType;
  handleOnSubmit: (student: studentType) => void;
}

const StudentForm = (props: Props) => {
  const [student, setStudent] = useState<studentType>({
    id: props.student ? props.student.id : "",
    name: props.student ? props.student.name : "",
    gender: props.student ? props.student.gender : "Male",
    age: props.student ? props.student.age : "",
    class: props.student ? props.student.class : 1,
  });
  const [formErrors, setFormErrors] = useState<formErrorsType>({
    name: "",
    gender: "",
    age: "",
    class: "",
  });
  const { id, name, gender, age, class: classRoom } = student;
  const isDisabled: boolean = !name || !gender || !age || !classRoom;
  const validateForm = () => {
    const errors: formErrorsType = {};
    let isValid: boolean = true;
    if (!name.trim()) {
      errors.name = "Student name is required!";
      isValid = false;
    } else if (name.length > 100 || name.length < 2) {
      errors.name = "Student name is invalid!";
      isValid = false;
    }
    if (!age) {
      errors.age = "Student age is required!";
      isValid = false;
    } else if (
      parseInt(age) !== +student.age ||
      parseInt(age) > 20 ||
      parseInt(age) < 3
    ) {
      errors.age = "Student age is invalid!";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const student: studentType = {
        id: id ? id : new Date().getTime(),
        name: name,
        gender: gender,
        age: age,
        class: classRoom,
      };
      props.handleOnSubmit(student);
    }
  };
  return (
    <div className="formContainer">
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Student Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Student Name"
          value={name}
          onChange={handleInputChange}
        />
        <div className="error">{formErrors.name}</div>
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={handleInputChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          placeholder="Age"
          name="age"
          value={age}
          onChange={handleInputChange}
        />
        <div className="error">{formErrors.age}</div>
        <label htmlFor="class">Class</label>
        <select
          value={classRoom}
          id="class"
          name="class"
          onChange={handleInputChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit" disabled={isDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
