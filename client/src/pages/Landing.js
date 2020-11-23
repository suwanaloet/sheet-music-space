import React from 'react';


const Landing = () => {
    return (
        <section className="landingSection">
        

        <div className="container">
            <div id="landingContent" className="row">
            <div className="bannerImage">
                <img className="bannerlink" alt="piano and christmas tree" src="https://raw.githubusercontent.com/suwanaloet/portfolio-assets/master/piano-3775191_1920.jpg" />
            </div>
                <div className="landingText">
                    <h3>Welcome to the Sheet Music Space!</h3>
                    <p>
                    This website was created to give music enthusiasts a place to save the sheet music they have found on the open web, to easily find again later. 
                   
                    </p>
                    <p>
                    Head over to the Sign-Up page to get started with an account to begin storing your beloved sheets! 
                    </p>
                    <p>
                    You can also head over to the homepage to see what other sheet music others have found and wanted to keep and share.
                    </p>
                    <h4>Looking ahead:</h4>
                    <p>
                        This project has achieved exactly what we wanted it to, but there are always more things 
                        that the development team is willing to add. Feel free to reach out to us at:
                    </p>
                    <ul>
                        <li>Email: suwanaloet@wisc.edu</li>
                        <li>Phone: 626-378-7040</li>
                    </ul>
                    <h5>List of things to be added if enough people ask:</h5>
                    <ul>
                        <li>Search feature for all posts (not relevant yet, but soon enough perhaps!)</li>
                        <li>Delete function for posts</li>
                    </ul>
                </div>

            </div>
        </div>

    </section>
    )
}

export default Landing;