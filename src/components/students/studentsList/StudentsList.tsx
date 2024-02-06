import React, { useContext, useState } from "react";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import { StudentContext } from "../../../context/StudentContext";
import "./style.css";

const StudentsList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortProperty, setSortProperty] = useState<string>("");
  const [filterProperty, setFilterProperty] = useState<string>("");
  const { allStudents } = useContext(StudentContext);
  return (
    <>
      <div className="tableHeader">
        <div className="searchContainer">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="search"
            placeholder="Search..."
            className="search"
          />
          <button>
            <FaSearch />
          </button>
        </div>
        <div>
          <select
            value={sortProperty}
            onChange={(e) => setSortProperty(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="age">Age</option>
            <option value="class">Class</option>
          </select>
          <select
            value={filterProperty}
            onChange={(e) => setFilterProperty(e.target.value)}
          >
            <option value="">Filter</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <div className="tableContent">
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Class</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allStudents &&
              allStudents.length > 0 &&
              allStudents.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.gender}</td>
                  <td>{item?.age}</td>
                  <td>{item?.class}</td>
                  <td className="actionBtn">
                    <button>
                      <FaEdit className="icon" />
                    </button>
                    <button>
                      <FaTrash className="icon" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {allStudents && allStudents.length === 0 && (
          <p className="noRecord">No Record Found</p>
        )}
      </div>
    </>
  );
};

export default StudentsList;
