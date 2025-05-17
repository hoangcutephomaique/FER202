const people = [
  { name: 'Mai', age: 30, occupation: 'Engineer' },
  { name: 'Tien', age: 25, occupation: 'Designer' },
  { name: 'Bao', age: 35, occupation: 'Engineer' },
  { name: 'Huy', age: 28, occupation: 'Designer' },
  { name: 'Doan', age: 22, occupation: 'Artist' },
];

function calculateAverageAges(peopleArray) {
  const occupationGroups = {};

  peopleArray.forEach(person => {
    const { occupation, age } = person;
    if (!occupationGroups[occupation]) {
      occupationGroups[occupation] = { totalAge: 0, count: 0 };
    }
    occupationGroups[occupation].totalAge += age;
    occupationGroups[occupation].count += 1;
  });

  const averages = Object.entries(occupationGroups).map(([occupation, data]) => {
    const averageAge = data.totalAge / data.count;
    return { occupation, averageAge: averageAge.toFixed(1) };
  });

  return averages;
}

function AverageAgeByOccupation() {
  const averageAges = calculateAverageAges(people);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2> Tuổi trung bình theo nghề nghiệp</h2>
      <ul>
        {averageAges.map((item, index) => (
          <li key={index}>
            {item.occupation}: {item.averageAge} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;