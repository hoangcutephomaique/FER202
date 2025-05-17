function AreAllTeenagers(){
    const people = [
        {name: 'hoang', age:12},
        {name: 'hung', age:17},
        {name: 'duc', age:18},
        {name: 'dung', age:16},
        {name: 'tri', age:20},
    ]
    const areAllTeenagers = people.every(person => person.age >=13 && person.age <= 19)
    return(
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
             <h2>Danh sách</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} – {person.age} tuổi
          </li>
        ))}
      </ul>

      <h3>Kết luận</h3>
           
            <p>{areAllTeenagers ? 'Đúng, tất cả là teenager' : 'Không phải tất cả là teenager'}</p>
        </div>
    );
    
}
export default  AreAllTeenagers;