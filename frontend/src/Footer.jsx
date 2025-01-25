import logo from "./assets/logos.svg";

export default function Footer() {
    return (
        <>
            <div className="container13">
                <h1>Become a contributor?</h1>
                <p>Join us and get tips & tricks to become a great Designer and Developer</p>
                <div className="email">
                    <input type="text" placeholder="Enter your email..."/>
                    <button>Join Us</button>
                </div>
            </div>

            <div className="container15">
                <div className="point">
                    <div className="logo">
                        <img src={logo} alt=""/>
                        <p>antools.</p>
                    </div>
                    <p>Copyright 2021. Antools</p>
                    <p>Antool is a web collection of information on paid or free Design and Development tools</p>

                </div>
                <div className="point">
                    <h1>Contact Us</h1>
                    <p>+621987463</p>
                    <p>M Building, No.10 A</p>
                    <p>antools@awesome.com</p>
                </div>
                <div className="point">
                    <h1>Categories</h1>
                    <p>Design</p>
                    <p>Development</p>
                </div>
                <div className="point">
                    <h1>Company Info</h1>
                    <p>About Us</p>
                    <p>Our Partners</p>
                    <p>Blog</p>
                </div>
            </div>
        </>
    )
}