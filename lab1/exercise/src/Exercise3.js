function EmployeeTable() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ color: "blue", textAlign: "center", marginBottom: "20px" }}>Employee Table</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ccc" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={{ padding: "10px", border: "1px solid #ccc", textAlign: "left" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ccc", textAlign: "left" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ccc", textAlign: "left" }}>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id ?? index}>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{employee.id ?? index + 1}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{employee.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;