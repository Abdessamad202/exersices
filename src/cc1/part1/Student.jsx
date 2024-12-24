export default function Student({etudiant}) {
    //function for calculate the average of grade for students .
    const average = notes => notes.reduce((acc,note)=> acc+ note)/notes.length;
    // render the data of students .
    return (
        <tr>
            <td>{etudiant.nom}</td>
            <td>{etudiant.prenom}</td>
            <td>{etudiant.dateNaissance}</td>
            <td>{etudiant.genre}</td>
            <td>{etudiant.ville}</td>
            <td>{average(etudiant.notes)}</td>
        </tr>
    )
}