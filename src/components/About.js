import about from '../images/about.jpeg';

const About = () => {
        return (
            <section id="hero" style={{display: 'flex', alignItems: 'center', marginTop: '50px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Fixing Issues 😉</h2>
                            <p>
                                Here you ll find all the issues concerning the packaging,
                                processing
                                <br />
                                and cleaning machinery. Engineers can Upload current issues in
                                various areas in Lusaka,
                                <br /> and can also indicate whether they have been resolved or
                                still pending to be fixed. <br />
                                Supervisors can also monitor the current status of the issues
                                that have been previously raised.
                            </p>
                            <button type="button" className="btn btn-dark btn-large">
                                Learn more
                            </button>
                        </div>

                        <div className="col img-col">
                            <img src={about} className="img-fluid" alt="about" />
                        </div>
                    </div>
                </div>
            </section>
        );
}
 
export default About;