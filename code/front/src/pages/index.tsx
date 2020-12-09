import React from "react"
import { useSelector } from "react-redux";
import { StateType } from "../models/Exam";
import Exams from '../modules/exams/Exams';

const ListOfExamsPage: React.FunctionComponent<{}> = ({ }) => {
    const state = useSelector((state: StateType) => state);
    return <Exams exams={state.exams.exams} />
}
export default ListOfExamsPage



