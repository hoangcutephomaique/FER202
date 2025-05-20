const averageAge = (...ages) => {
  if (ages.length === 0) return 0;
  const sum = ages.reduce((acc, age) => acc + age, 0);
  return (sum / ages.length).toFixed(2);
};

function AverageAgeDisplay() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  const ages = employees.map(employee => employee.age);
  const avgAge = averageAge(...ages);

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{ color: "blue", textAlign: "center", marginBottom: "20px" }}>Average Employee Age</h2>
      <p style={{ color: "#333", fontSize: "16px", textAlign: "center" }}>
        The average age of employees is {avgAge} years.
      </p>
    </div>
  );
}

export default AverageAgeDisplay;