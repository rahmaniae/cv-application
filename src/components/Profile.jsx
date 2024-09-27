import AddProfile from "./AddProfile";
import DisplayProfile from "./DisplayProfile";
import { useState } from "react";
export default function Profile() {
  const defaultValue = JSON.parse(localStorage.getItem("profile")) || {};
  const [profile, setProfile] = useState(defaultValue);

  return (
    <>
      <AddProfile handler={setProfile} profile={profile}></AddProfile>
      <DisplayProfile
        name={profile.name}
        email={profile.email}
        phone={profile.phone}
      ></DisplayProfile>
    </>
  );
}
