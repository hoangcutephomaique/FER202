function TeenagerCheck() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{ color: "blue", textAlign: "center", marginBottom: "20px" }}>Teenager Check</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {employees.map((employee, index) => {
          const isTeenager = employee.age >= 10 && employee.age <= 20;
          return (
            <li
              key={employee.id ?? index}
              style={{
                padding: "10px",
                borderBottom: "1px solid #ccc",
                color: isTeenager ? "#333" : "#999",
                fontStyle: isTeenager ? "normal" : "italic",
                fontSize: "16px"
              }}
            >
              {employee.name} - {employee.department} (Age: {employee.age}, Teenager: {isTeenager ? "Yes" : "No"})
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TeenagerCheck;