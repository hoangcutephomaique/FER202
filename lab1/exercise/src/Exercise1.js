function EmployeeCard({ employee }) {
  const { name, age, department } = employee;

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "10px" }}>{name}</h1>
      <p style={{ color: "#666", fontSize: "16px" }}>Age: {age}</p>
      <p style={{ color: "#666", fontSize: "16px" }}>Department: {department}</p>
    </div>
  );
}

function Exercise1() {
  const employee = { name: "John Doe", age: 30, department: "IT" };

  return (
    <div>
      <h2 style={{ color: "blue", textAlign: "center", marginBottom: "20px" }}>Employee Details</h2>
      <EmployeeCard employee={employee} />
    </div>
  );
}

export default Exercise1;