import PracticeItem from "./PracticeItem";
import dropdownIcon from "../assets/dropdown.png";
export default function DisplayPractices({
  practices,
  handler,
  editIDhandler,
}) {
  const setPracticesHandler = (newPractices) => {
    handler(newPractices);
    localStorage.setItem("practices", JSON.stringify(newPractices));
  };
  function deleteHandler(id) {
    const newPractices = practices.filter((item) => item.id !== id);
    setPracticesHandler(newPractices);
  }

  function toggleDropdown() {
    const dropdown = document.querySelector(".practice .dropdown");
    dropdown.classList.toggle("visible");
    let isVisible = dropdown.classList.contains("visible");
    const h2 = document.querySelector(".practice h2");
    h2.textContent = (!isVisible ? "Show " : "Hide ") + "Practical Experience";
    const dropdownIcon = document.querySelector(".practice img");
    dropdownIcon.style.transform = isVisible
      ? "rotate(180deg)"
      : "rotate(0deg)";
    dropdownIcon.style.transition = "transform 0.25s linear";
  }
  return (
    <div className="practice">
      <div className="showExp" onClick={toggleDropdown}>
        <h2>Show Practical Experience</h2>
        <img src={dropdownIcon} height="24px" width="24px" />
      </div>
      <div className="dropdown">
        {practices.map((practice) => (
          <PracticeItem
            key={practice.id}
            practice={practice}
            editIDhandler={editIDhandler}
            deleteHandler={deleteHandler}
          ></PracticeItem>
        ))}
      </div>
    </div>
  );
}
