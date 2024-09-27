import Profile from "./Profile";
import Experience from "./Experience";
import Practice from "./Practice";
import "../styles/index.css";

export default function App() {
  return (
    <div className="wrapper">
      <Profile></Profile>
      <Experience></Experience>
      <Practice></Practice>
    </div>
  );
}
