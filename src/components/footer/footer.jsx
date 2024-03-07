import "./footer.css"

const Footer = () =>{
    return (
        <div>
            <div className="footersDiv">
                <p>© 2024 Name Your Company</p>
                <div className="footersPages">   
                    <a href="/PrivacyPolicy">Privacy Policy</a>
                    <a href="/TermsOfService">Terms of Service</a>
                    <a href="/ContactUs">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Footer