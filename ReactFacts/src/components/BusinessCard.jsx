/* Inital design by https://www.figma.com/community/file/1134435607082521788/business-card-design */

export default function BusinessCard() {
    return (
        <div class="business-card-container">
            <section class="business-card">
                <div class="business-card-content" >
                    {/* <img src="/src/assets/business-card/backing-curve-blue.svg" draggable="false" select/> */}
                    <div class="left-container">
                        <div class="name-container">
                            <span class="name">John Doe</span>
                            <span class="role">Designer</span>
                        </div>
                        <div class="details-container">
                            <div class="detail">
                                <span>000-123-456-7890</span>
                            </div>
                            <div class="detail">
                                <span>email@yourdomain.com</span>
                            </div>
                            <div class="detail">
                                <span>Your address goes here 125 Street, USA</span>
                            </div>
                        </div>
                    </div>
                    <div class="logo-container">
                        <img class="company-logo" src="/src/assets/business-card/logo.svg"/>
                        <span class="company-name">Company Name</span>
                        <span class="company-tagline">Your tagline here</span>
                    </div>
                </div>


            </section>
        </div>
    )
}