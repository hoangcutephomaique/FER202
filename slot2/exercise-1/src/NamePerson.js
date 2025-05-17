function Person({ name, age, occupation }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <p><strong>Tên:</strong> {name}</p>
      <p><strong>Tuổi:</strong> {age}</p>
      <p><strong>Nghề nghiệp:</strong> {occupation}</p>
    </div>
  );
}

function NamePerson() {
  const person = { name: "Alice", age: 25, occupation: "Kỹ sư" };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Thông tin cá nhân</h2>
      <Person
        name={person.name}
        age={person.age}
        occupation={person.occupation}
      />
    </div>
  );
}

export default NamePerson;