import React, { useState } from 'react';

function EmployeeSearch() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{ color: "blue", textAlign: "center", marginBottom: "20px" }}>Employee Search</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "20px",
          boxSizing: "border-box"
        }}
      />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee, index) => (
            <li
              key={employee.id ?? index}
              style={{
                padding: "10px",
                borderBottom: "1px solid #ccc",
                color: "#333",
                fontSize: "16px"
              }}
            >
              {employee.name} - {employee.department}
            </li>
          ))
        ) : (
          <li style={{ padding: "10px", color: "#666", fontSize: "16px", textAlign: "center" }}>
            No employees found
          </li>
        )}
      </ul>
    </div>
  );
}

export default EmployeeSearch;