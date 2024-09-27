import ExperienceItem from "./ExperienceItem";
import dropdownIcon from "../assets/dropdown.png";

export default function DisplayExperiences({
  experiences,
  editHandler,
  handler,
}) {
  const setExperiencesHandler = (newExperiences) => {
    handler(newExperiences);
    localStorage.setItem("experiences", JSON.stringify(newExperiences));
  };
  function handleDelete(id) {
    const newExperiences = experiences.filter((item) => item.id !== id);
    setExperiencesHandler(newExperiences);
  }

  function toggleDropdown() {
    const dropdown = document.querySelector(".experience .dropdown");
    dropdown.classList.toggle("visible");
    let isVisible = dropdown.classList.contains("visible");
    const h2 = document.querySelector(".experience h2");
    h2.textContent =
      (!isVisible ? "Show " : "Hide ") + "Educational Experience";
    const dropdownIcon = document.querySelector(".experience img");
    dropdownIcon.style.transform = isVisible
      ? "rotate(180deg)"
      : "rotate(0deg)";
    dropdownIcon.style.transition = "transform 0.25s linear";
  }
  return (
    <div className="experience">
      <div className="showExp" onClick={toggleDropdown}>
        <h2>Show Educational Experience</h2>
        <img src={dropdownIcon} alt="" height="24px" width="24px" />
      </div>
      <div className="dropdown">
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.id}
            item={experience}
            editHandler={editHandler}
            handleDelete={handleDelete}
          ></ExperienceItem>
        ))}
      </div>
    </div>
  );
}
