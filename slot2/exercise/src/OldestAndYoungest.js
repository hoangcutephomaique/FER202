const people = [
  { name: 'Hung', age: 30 },
  { name: 'Thinh', age: 25 },
  { name: 'Van', age: 35 },
  { name: 'An', age: 28 },
  { name: 'Hang', age: 22 },
];

function findOldestAndYoungest(peopleArray) {
  return peopleArray.reduce(
    (acc, person) => {
      if (person.age > acc.oldest.age) acc.oldest = person;
      if (person.age < acc.youngest.age) acc.youngest = person;
      return acc;
    },
    {
      oldest: peopleArray[0],
      youngest: peopleArray[0],
    }
  );
}

function OldestAndYoungest() {
  const { oldest, youngest } = findOldestAndYoungest(people);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Danh sách</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} – {person.age} tuổi
          </li>
        ))}
      </ul>

      <h3>Người lớn tuổi nhất:</h3>
      <p>{oldest.name} – {oldest.age} tuổi</p>

      <h3>Người nhỏ tuổi nhất:</h3>
      <p>{youngest.name} – {youngest.age} tuổi</p>
    </div>
  );
}

export default OldestAndYoungest;