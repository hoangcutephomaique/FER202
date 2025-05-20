function EmployeeDropdown() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{ color: "blue", textAlign: "center", marginBottom: "20px" }}>Select an Employee</h2>
      <select
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          color: "#333"
        }}
      >
        <option value="" disabled selected>Select an employee</option>
        {employees.map((employee, index) => (
          <option key={employee.id ?? index} value={employee.name}>
            {employee.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default EmployeeDropdown;