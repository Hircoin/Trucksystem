import React, { useState } from 'react';

import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

    
const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
        });
    
        const [submitted, setSubmitted] = useState(false);
    
        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        };
    
        const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form Submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
        };
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">text here</Typography>
                    <div className="contact-page">
                <h1>Contact Us</h1>
                {submitted && <p>Thank you for your message!</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    </div>
            <button type="submit">Send Message</button>
        </form>
            <h2>Main Features</h2>
        <ul>
            <li>
            <strong>Low Cost:</strong> Affordability, Cost-Benefit Advantage.
            <p>We offer exceptional value at a fraction of traditional costs, ensuring you invest in your financial education without breaking the bank.</p>
            </li>
            <li>
            <strong>High Accessibility:</strong> Broad Reach, Ease of Use.
            <p>Access our platform anytime, anywhere, with a user-friendly interface designed for all levels of experience.</p>
            </li>
            <li>
            <strong>User Interface (UI):</strong> Intuitive Design, Customizable Dashboards.
            <p>Enjoy a clean layout with customizable dashboards that enhance your productivity and help you make informed decisions.</p>
            </li>
            <li>
            <strong>Open 24/7:</strong> Continuous Access, Non-Stop Market Analysis.
            <p>Monitor market trends and access critical information whenever you need it, ensuring you never miss an opportunity.</p>
            </li>
            <li>
            <strong>Learning Course on How to Use the Application:</strong> Educational Resources, Onboarding Support.
            <p>Comprehensive tutorials and resources help you navigate our platform confidently and leverage its full potential.</p>
            </li>
            <li>
            <strong>Classes and Learning on Risk Management:</strong> Risk Management Education, Informed Decision-Making.
            <p>Learn essential risk management strategies to trade with confidence and enhance your financial strategy.</p>
            </li>
        </ul>
        </div>    
                <Text variant="h5">
                    instagram
                    <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    or send me an Email 
                    <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;