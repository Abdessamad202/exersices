import Student from "./Student";
export default function Students({gender}) {
    // this is the database that we are interacting with .
    const db =[
        {
            nom:"nom1",
            prenom:"prenom1",
            dateNaissance:"15/02/2000",
            ville:"Oujda",
            genre:"F",
            notes : [15,14,12,10]
        },
        {
            nom:"nom2",
            prenom:"prenom2",
            dateNaissance:"18/10/2001",
            ville:"Berkane",
            genre:"M",
            notes : [11,12,8,13]
        },
    ]
    // filtering the students depends on the gender
    const filterStudents = (gender) => {
    if(gender === "M"){
        return  db.filter(student => student.genre === "M");
    }else if(gender === "F"){
        return db.filter(student => student.genre === "F");
    }
    return db;
    }
    // returns all the students that we have in the database.
    const showStudents = filterStudents(gender).map((row, index) => (
        <Student key={index} etudiant={row} />
    ))
    // render the body table .
    return (
            <tbody>
                {showStudents}
            </tbody>
    )
}