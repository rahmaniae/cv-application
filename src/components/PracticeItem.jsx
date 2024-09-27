export default function PracticeItem({
  deleteHandler,
  practice,
  editIDhandler,
}) {
  const editID = practice.id;

  function handleEditClick() {
    editIDhandler(editID);
    fillEditInputs();
  }

  function fillEditInputs() {
    document.querySelector('input[name="company-name"]').value =
      practice.companyName;
    document.querySelector('input[name="position"]').value = practice.position;
    document.querySelector('input[name="responsibilities"]').value =
      practice.responsibilities;
    document.querySelector('input[name="date-from"]').value = practice.dateFrom;
    document.querySelector('input[name="date-to"]').value = practice.dateTo;
    document.querySelector('input[name="company-name"]').focus();
  }

  function handleDeleteClick() {
    deleteHandler(practice.id);
  }
  return (
    <div className="practice-item">
      <div className="company-name">
        <h4>{practice.companyName}</h4>
      </div>
      <div className="practice-position">
        <p>{practice.position}</p>
      </div>
      <div className="responsibilities">
        <p>{practice.responsibilities}</p>
      </div>
      <div className="practice-date">
        <p>
          <i>
            {practice.dateFrom} - {practice.dateTo}
          </i>
        </p>
      </div>
      <div className="btns">
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}
