function GroupedByOccupation() {
    const people = [
        { name: "Hau", occupation: "Engineer" },
        { name: "Phuong", occupation: "Designer" },
        { name: "Mai", occupation: "Engineer" },
        { name: "Nang", occupation: "Designer" }
    ];

    const grouped = people.reduce((acc, person) => {
        const occupation = person.occupation;
        acc[occupation] = acc[occupation] || [];
        acc[occupation].push(person);
        return acc;
    }, {});

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>Danh sách theo nghề nghiệp</h2>
            {Object.keys(grouped).map((occupation, index) => (
                <div key={index}>
                    <h3>{occupation}</h3>
                    <ul>
                        {grouped[occupation].map((person, personIndex) => (
                            <li key={personIndex}>
                                {person.name} – {person.occupation}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default GroupedByOccupation;