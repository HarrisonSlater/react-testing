/* Inital design by https://www.figma.com/community/file/1134435607082521788/business-card-design */

export default function BusinessCard(props) {
    return (
        <div class="business-card-container" style={props.style}>
            <section class="business-card">
                <div class="business-card-content" >
                    {/* <img src="/src/assets/business-card/backing-curve-blue.svg" draggable="false" select/> */}
                    <div class="left-container">
                        <div class="name-container">
                            <span class="name">{props.name}</span>
                            <span class="role">{props.role}</span>
                        </div>
                        <div class="details-container">
                            <div class="detail">
                                <span>{props.phone}</span>
                            </div>
                            <div class="detail">
                                <span>{props.email}</span>
                            </div>
                            <div class="detail">
                                <span>{props.address}</span>
                            </div>
                        </div>
                    </div>
                    <div class="logo-container">
                        <img class="company-logo" src={props.companyLogo}/>
                        <span class="company-name">{props.companyName}</span>
                        <span class="company-tagline">{props.companyTagline}</span>
                    </div>
                </div>


            </section>
        </div>
    )
}