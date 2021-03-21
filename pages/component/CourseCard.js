const CourseCard = (props) => {
    // TODO: design HTML component that displays a course as a "card" on the webpage.
    const {cId, name, grade , credit, del} = props ;
    return (
      <tr className="Card">
        <td id="name">{name}</td>
        <td id="information">{grade}</td>
        <td id="information">{credit}</td>
        <td id="deleteCard"> <button onClick= { () => { del(cId) } } > <p> x </p> </button> </td>
      </tr>
    );
  }
  
  
  export default CourseCard ; 