export default function AddPractice({
  practices,
  handler,
  editID,
  editIDHandler,
}) {
  const setPracticesHandler = (newPractices) => {
    handler(newPractices);
    localStorage.setItem("practices", JSON.stringify(newPractices));
  };

  function handleEdit(practiceObj) {
    const newPractices = practices.map((practice) => {
      if (practice.id === editID) return practiceObj;
      return practice;
    });

    setPracticesHandler(newPractices);
    editIDHandler(null);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const form = document.querySelector("#practice-form");

    const id = editID !== null ? editID : crypto.randomUUID();
    const companyName = document.querySelector(
      'input[name="company-name"]'
    ).value;
    const position = document.querySelector('input[name="position"]').value;
    const responsibilities = document.querySelector(
      'input[name="responsibilities"]'
    ).value;
    const dateFrom = document.querySelector('input[name="date-from"]').value;
    const dateTo = document.querySelector('input[name="date-to"]').value;

    const practiceObj = {
      id,
      companyName,
      position,
      responsibilities,
      dateFrom,
      dateTo,
    };

    if (editID !== null) {
      handleEdit(practiceObj);
      form.reset();
      return;
    }

    const newPractices = [...practices, practiceObj];
    setPracticesHandler(newPractices);

    form.reset();
  }

  return (
    <div>
      <h2>Practical Experience</h2>
      <form onSubmit={handleSubmit} id="practice-form">
        <div>
          <label>Company Name:</label>
          <input type="text" name="company-name" required />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" name="position" required />
        </div>
        <div>
          <label>Responsabilities:</label>
          <input type="text" name="responsibilities" />
        </div>
        <div className="date-grp">
          <label>from:</label>
          <input type="date" name="date-from" required />
          <label>to:</label>
          <input type="date" name="date-to" required />
        </div>
        <div className="btn-grp">
          <button type="submit">Submit</button>
          <button type="reset">Cancel</button>
        </div>
      </form>
    </div>
  );
}
