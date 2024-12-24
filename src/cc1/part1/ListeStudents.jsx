import Student from "./Student";
import HeaderTable from "./HeaderTable";
import Students from "./Students";
import {useState} from "react";

export default function ListStudents(){
    const  [gender,setGender] = useState('all')
    // return the full table .
    return (
        <>
            <table border={1}>
                <HeaderTable />
                <Students gender={gender} />
            </table>
            <select onChange={(e) => setGender(e.target.value)}>
                <option selected value='all'>all</option>
                <option value='F'>F</option>
                <option value='M'>M</option>
            </select>
        </>
    )
}