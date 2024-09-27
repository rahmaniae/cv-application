export default function AddExperience({
  experiences,
  handler,
  editID,
  editHandler,
}) {
  
  const setExperiencesHandler = (experiences) => {
    handler(experiences);
    localStorage.setItem("experiences", JSON.stringify(experiences));
  };

  const setEditID = editHandler;

  function handleSubmit(e) {
    e.preventDefault();
    const form = document.querySelector("#experience-form");

    if (editID !== null) {
      handleEdit(editID);
      form.reset();
      return;
    }
    const id = crypto.randomUUID();
    const schoolName = document.querySelector(
      'input[name="school-name"]'
    ).value;
    const studyTitle = document.querySelector(
      'input[name="study-title"]'
    ).value;
    const studyDate = document.querySelector('input[name="study-date"]').value;

    const expObj = { id, schoolName, studyTitle, studyDate };
    const newExperiences = [...experiences, expObj];

    setExperiencesHandler(newExperiences);

    form.reset();
  }

  function handleEdit(id) {
    const schoolName = document.querySelector(
      'input[name="school-name"]'
    ).value;
    const studyTitle = document.querySelector(
      'input[name="study-title"]'
    ).value;
    const studyDate = document.querySelector('input[name="study-date"]').value;

    const editedObj = { id, schoolName, studyTitle, studyDate };

    const newExperiences = experiences.map((exp) => {
      console.log("exp.id " + exp.id + " editId " + editID);
      if (exp.id == editID) return editedObj;
      return exp;
    });

    setExperiencesHandler(newExperiences);
    setEditID(null);
  }

  return (
    <div>
      <h2>Educational Experience</h2>
      <form onSubmit={handleSubmit} id="experience-form">
        <div>
          <label htmlFor="school-name">School Name:</label>
          <input type="text" name="school-name" required />
        </div>
        <div>
          <label htmlFor="study-title">Title of study:</label>
          <input type="text" name="study-title" required />
        </div>
        <div>
          <label htmlFor="study-date">Date of study:</label>
          <input type="date" name="study-date" />
        </div>
        <div className="btn-grp">
          <button type="submit">Submit</button>
          <button type="reset">Cancel</button>
        </div>
      </form>
    </div>
  );
}
