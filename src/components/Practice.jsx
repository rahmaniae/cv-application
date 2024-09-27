import { useState } from "react";
import AddPractice from "./AddPractice";
import DisplayPractices from "./DisplayPractice";

export default function Practice() {
  const defaultValue = JSON.parse(localStorage.getItem("practices")) || [];
  const [practices, setPractices] = useState(defaultValue);
  const [editID, setEditID] = useState(null);
  return (
    <>
      <AddPractice
        practices={practices}
        handler={setPractices}
        editIDHandler={setEditID}
        editID={editID}
      ></AddPractice>
      <DisplayPractices
        practices={practices}
        editIDhandler={setEditID}
        handler={setPractices}
      ></DisplayPractices>
    </>
  );
}
