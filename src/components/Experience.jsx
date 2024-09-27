import AddExperience from "./AddExperience";
import DisplayExperiences from "./DisplayExperiences";
import { useState } from "react";

export default function Experience() {
  const defaultValue = JSON.parse(localStorage.getItem("experiences")) || [];
  const [experiences, setExperiences] = useState(defaultValue);
  const [editID, setEditID] = useState(null);

  return (
    <>
      <AddExperience
        experiences={experiences}
        handler={setExperiences}
        editID={editID}
        editHandler={setEditID}
      ></AddExperience>
      <DisplayExperiences
        experiences={experiences}
        editHandler={setEditID}
        handler={setExperiences}
      ></DisplayExperiences>
    </>
  );
}
