export default function ExperienceItem({ item, editHandler, handleDelete }) {
  const setEditID = editHandler;
  const editID = item.id;

  function handleEditClick() {
    setEditID(editID);
    fillEditInputs();
  }

  function fillEditInputs() {
    console.log("edit fired");
    const editItem = item;
    console.log(editItem);
    document.querySelector('input[name="school-name"]').value =
      editItem.schoolName;
    document.querySelector('input[name="study-title"]').value =
      editItem.studyTitle;
    document.querySelector('input[name="study-date"]').value =
      editItem.studyDate;
  }

  function handleDeleteClick() {
    handleDelete(item.id);
  }
  return (
    <div className="experience-item">
      <div className="school-name">
        <h4>{item.schoolName}</h4>
      </div>
      <div className="study-title">
        <p>{item.studyTitle}</p>
      </div>
      <div className="study-date">
        <p>
          <i>{item.studyDate} - 2024-11-23</i>
        </p>
      </div>
      <div className="btns">
        <button className="edit-experience" onClick={handleEditClick}>
          Edit
        </button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}
