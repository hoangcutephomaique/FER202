const people = [
  { name: 'Son', age: 30, occupation: 'Engineer' },
  { name: 'Tu', age: 25, occupation: 'Lecturer' },
  { name: 'Hai', age: 35, occupation: 'Testing' },
  { name: 'Vy', age: 28, occupation: 'Farmer' },
  { name: 'Dung', age: 22, occupation: 'Artist' },
];
function sortByOccupationThenAge(people) {
  return [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age;
  });
}
function SortedPeopleList() {
  const sortedPeople = sortByOccupationThenAge(people);

  return (
     <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Danh sách gốc</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} – {person.age} tuổi – {person.occupation}
          </li>
        ))}
      </ul>

      <h2> Danh sách đã sắp xếp (theo nghề nghiệp và tuổi)</h2>
      <ul>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            {person.name} – {person.age} tuổi – {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SortedPeopleList;
