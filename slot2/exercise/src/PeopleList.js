function Person({ name, age, occupation }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <p><strong>Tên:</strong> {name}</p>
      <p><strong>Tuổi:</strong> {age}</p>
      <p><strong>Nghề nghiệp:</strong> {occupation}</p>
    </div>
  );
}

function PeopleList() {
  const people = [
    { name: "hoang", age: 20, occupation: "phụ hồ" },
    { name: "huy", age: 25, occupation: "IT" },
    { name: "thịnh", age: 28, occupation: "kĩ sư" }
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Danh sách người</h2>
      {people.map((person, index) => (
        <Person
          key={index}
          name={person.name}
          age={person.age}
          occupation={person.occupation}
        />
      ))}
    </div>
  );
}

export default PeopleList;