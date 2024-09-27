export default function DisplayProfile({ name, phone, email }) {
  return (
    <div className="profile">
      <h2>General Informations</h2>
      <div className="personal-details">
        <div className="name">
          <h3>Name: </h3>
          <p>{name}</p>
        </div>
        <div className="email">
          <h3>E-mail: </h3>
          <p>{email}</p>
        </div>
        <div className="phone">
          <h3>Phone: </h3>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
}
