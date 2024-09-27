export default function AddProfile(props) {
  const setProfile = props.handler;
  const profile = props.profile;

  function handleSubmit(e) {
    e.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const obj = { name, email, phone };
    setProfile({ ...obj });
    localStorage.setItem("profile", JSON.stringify(obj));
  }

  function handleChange(e) {
    const value = e.target.value;
    const field = e.target.name;
    setProfile({ ...profile, [field]: value });
  }

  function handleCancellation(e) {
    e.preventDefault()
    const storedProfile = JSON.parse(localStorage.getItem("profile"));
    setProfile(storedProfile);
  }
  return (
    <div>
      <h2>Personal Informations</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="phone"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </div>

        <div className="btn-grp">
          <button type="submit">Submit</button>
          <button type="reset" onClick={handleCancellation}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
