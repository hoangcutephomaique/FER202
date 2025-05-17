function FirstTeenager(){
    const people = [
        {name: 'hoang', age:15},
        {name: 'hung', age:17},
        {name: 'duc', age:18},
        {name: 'dung', age:16},
        {name: 'tri', age:20},
    ]
    const firstTeenager = people.find(person => person.age >=13 && person.age <=19 )
    return(
        <div  style={{ padding: '20px', fontFamily: 'Arial' }}>
                 <h2>Danh sách</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} – {person.age} tuổi
          </li>
        ))}
      </ul>
            <h1>First Teenager</h1>
            {firstTeenager ? (
                <p>{firstTeenager.name} {firstTeenager.age} tuổi là FirstTeenager</p>
            ) : (
                <p>No teenager found</p>
            )
        
            }
        </div>
    );
    
}
export default FirstTeenager;