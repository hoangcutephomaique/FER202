function GroupedEmployeeList() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];
  const groupedEmployees = employees.reduce((acc, employee) => {
    const { department, name } = employee;
    acc[department] = acc[department] || [];
    acc[department].push(name);
    return acc;
  }, {});

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{ color: "blue", textAlign: "center", marginBottom: "20px" }}>Employees by Department</h2>
      {Object.keys(groupedEmployees).sort().map(department => (
        <div key={department}>
          <h3 style={{ color: "#333", fontSize: "20px", margin: "10px 0" }}>{department}</h3>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {groupedEmployees[department].sort().map((name, index) => (
              <li
                key={index}
                style={{
                  padding: "8px",
                  borderBottom: "1px solid #ccc",
                  color: "#333",
                  fontSize: "16px"
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default GroupedEmployeeList;