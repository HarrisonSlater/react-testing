import Navbar from "./components/Navbar"
import Main from "./components/Main"
import "./App.css"
import BusinessCard from "./components/BusinessCard"

export default function App() {
    return (
        <div class="app">
            <Navbar />
            <Main />
            <BusinessCard name="Harrison" role="Designer" phone="000-123-456-7890" 
                email="email@yourdomain.com" address="Your address goes here 125 Street, USA" companyName="Company Name"
                companyTagline="Your tagline here" companyLogo="/src/assets/business-card/logo.svg" />
            <BusinessCard style={{"--color1": "blue", "--color2": "red", "--color3": "white", "--color4": "black"}} name="Harrison" role="Designer" phone="000-123-456-7890" 
                email="email@yourdomain.com" address="Your address goes here 125 Street, USA" companyName="Company Name"
                companyTagline="Your tagline here" companyLogo="/src/assets/business-card/logo.svg" />
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                <BusinessCard style={{"font-size":"0.5em", display: "inline"}}name="Harrison" role="Designer" phone="000-123-456-7890" 
                    email="email@yourdomain.com" address="Your address goes here 125 Street, USA" companyName="Company Name"
                    companyTagline="Your tagline here" companyLogo="/src/assets/business-card/logo.svg" />
                <BusinessCard style={{"font-size":"0.5em", display: "inline"}}name="Harrison" role="Designer" phone="000-123-456-7890" 
                    email="email@yourdomain.com" address="Your address goes here 125 Street, USA" companyName="Company Name"
                    companyTagline="Your tagline here" companyLogo="/src/assets/business-card/logo.svg" />
                <BusinessCard style={{"font-size":"0.5em", display: "inline"}}name="Harrison" role="Designer" phone="000-123-456-7890" 
                    email="email@yourdomain.com" address="Your address goes here 125 Street, USA" companyName="Company Name"
                    companyTagline="Your tagline here" companyLogo="/src/assets/business-card/logo.svg" />
                <BusinessCard style={{"font-size":"0.5em", display: "inline"}}name="Harrison" role="Designer" phone="000-123-456-7890" 
                    email="email@yourdomain.com" address="Your address goes here 125 Street, USA" companyName="Company Name"
                    companyTagline="Your tagline here" companyLogo="/src/assets/business-card/logo.svg" />
            </div>
            <BusinessCard style={{"font-size": "calc(4vw)"}} name="Harrison" role="Designer" phone="000-123-456-7890" 
                email="email@yourdomain.com" address="Your address goes here 125 Street, USA" companyName="Company Name"
                companyTagline="Your tagline here" companyLogo="/src/assets/business-card/logo.svg" />
        </div>
    )
}