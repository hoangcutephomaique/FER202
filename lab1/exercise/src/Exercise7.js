function SortedEmployeeList() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  const sortedEmployees = [...employees].sort((a, b) => {
    const deptCompare = a.department.localeCompare(b.department);
    if (deptCompare !== 0) return deptCompare;
    return a.name.localeCompare(b.name);
  });

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{ color: "blue", textAlign: "center", marginBottom: "20px" }}>Sorted Employees</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {sortedEmployees.map((employee, index) => (
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
        ))}
      </ul>
    </div>
  );
}

export default SortedEmployeeList;