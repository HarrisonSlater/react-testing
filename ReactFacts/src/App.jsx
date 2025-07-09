import Navbar from "./components/Navbar"
import Main from "./components/Main"
import "./App.css"
import BusinessCard from "./components/BusinessCard"

export default function App() {
    return (
        <div class="app">
            <Navbar />
            <Main />
            <BusinessCard />
        </div>
    )
}