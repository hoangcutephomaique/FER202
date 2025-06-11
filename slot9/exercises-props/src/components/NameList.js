const NameList = ({ names }) => (
  <ul>
    {names.map((name, index) => (
      <li key={index}>{name}</li>
      
    ))}
  </ul>
);

export default NameList;
