function PeopleTable() {
  const people = [
    { name: "hoang", age: 20, occupation: "phụ hồ" },
    { name: "huy", age: 25, occupation: "IT" },
    { name: "thịnh", age: 28, occupation: "kĩ sư" }
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Danh sách người</h2>
      <table border="1" style={{ width: "80%", margin: "auto", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr style={{ textAlign: "center" }}>
            <th>Tên</th>
            <th>Tuổi</th>
            <th >Nghề nghiệp</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr style={{ textAlign: "center" }} key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleTable;
