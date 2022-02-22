import logo from "./logo.svg";
import "./App.css";
import First_Section from "./components/First_Section";
import Second_Section from "./components/Second_Section";
import Third_Section from "./components/Third_Section";
import Fourth_Section from "./components/Fourth_Section";
import Header_Section from "./components/Header_Section";

export default function App() {
  return (
    <>
      <Header_Section />
      <div className="bg-combined-section-bg bg-cover bg-no-repeat">
        <First_Section />
        <Second_Section />
      </div>
      <Third_Section />
      <Fourth_Section />
    </>
  );
}
