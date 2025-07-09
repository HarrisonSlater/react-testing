import "./App.css"
import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import data from "./data.js";

    //const entries = data.map(({country, title, dates, text, img, googleMapsLink}) => {
export default function App() {
    const entries = data.map((props) => {
        return <Entry key={props.id} {...props}/>
    });

  return (
    <main>
        <Header />
        {entries}
    </main>
  );
}