import React from 'react'
import eyes from '../images/eyes.png'

function About() {
    return (
        <>
            <div className='about d-flex  justify-content-center flex-column'>

                <div className='section mt-5' style={{ border: "2px solid grey", height: "50vh", width: "80vw", margin: "auto" }}>
                    <h1>About Us</h1>
                    <p>We are founded by a leading academic and researcher in the field of Industrial Systems Engineering.</p>
                </div>
                <div className='story' style={{ height: "50vh", width: "40vw" }}>
                    <h3>Our Story</h3>
                    <p>Our story
                        Our focus is always on finding the best people to work with. Our bar is high, but you look ready to take on the challenge.
                        We design and implement creative solutions to everyday business problems.

                        We are a team of creative consultants who help bridge the digital gap between companies and their clients with websites that not only serve as marketing platforms but also provide solutions to online business problems and digital marketing strategies that connect you with the ideal client and help create a loyal customer.</p>
                </div>

{/* Team Section */}

    <div className='team_head d-flex flex-column justify-content-center align-items-center' >
        <h3>
            Our Team
        </h3>
        <h2>
            Small Dreams Big hearts
        </h2>


                <div className='team d-flex gap-5 flex-wrap mb-5' >
                    <div className='card p-3 d-flex flex-row justify-content-around' style={{ height: '150px', width: '600px' }}>
                        <img src={eyes} alt='' style={{ height: '90px', width: '90px' }}>
                        </img>
                        <div className=''>
                            <h3>Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>

                    <div className='card p-3 d-flex flex-row justify-content-around' style={{ height: '150px', width: '600px' }}>
                        <img src={eyes} alt='' style={{ height: '90px', width: '90px' }}>
                        </img>
                        <div className=''>
                            <h3>Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>

                    <div className='card p-3 d-flex flex-row justify-content-around' style={{ height: '150px', width: '600px' }}>
                        <img src={eyes} alt='' style={{ height: '90px', width: '90px' }}>
                        </img>
                        <div className=''>
                            <h3>Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>

                    <div className='card p-3 d-flex flex-row justify-content-around' style={{ height: '150px', width: '600px' }}>
                        <img src={eyes} alt='' style={{ height: '90px', width: '90px' }}>
                        </img>
                        <div className=''>
                            <h3>Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>

                    <div className='card p-3 d-flex flex-row justify-content-around' style={{ height: '150px', width: '600px' }}>
                        <img src={eyes} alt='' style={{ height: '90px', width: '90px' }}>
                        </img>
                        <div className=''>
                            <h3>Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>

                    <div className='card p-3 d-flex flex-row justify-content-around' style={{ height: '150px', width: '600px' }}>
                        <img src={eyes} alt='' style={{ height: '90px', width: '90px' }}>
                        </img>
                        <div className=''>
                            <h3>Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>


                            </div>
                </div>
            </div>
        </>
    )
}

export default About