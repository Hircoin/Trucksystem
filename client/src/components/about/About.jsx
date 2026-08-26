
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
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

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Stockimia</Typography>
                <Text variant="h5">
                    <h1>Welcome to Stockkimia </h1>
                    <p>At Stockkimia , our mission is to make advanced financial data and predictive analytics accessible and affordable for everyone. We believe that informed decisions lead to better financial outcomes, and we're here to empower you with the tools and knowledge you need to navigate the complex world of finance.</p>

                    <h2>Our Target</h2>
                    <p>At Stockkimia , we strive to democratize financial information. Our goal is to provide you with comprehensive data and predictive insights that are not only accurate but also easy to understand. We’re committed to educating our users about risk management, helping you make informed choices that enhance your trading performance.</p>

                    <h2>Our Vision</h2>
                    <p>We envision a world where individuals are equipped to make confident financial decisions. By fostering trust and building long-term relationships, we aim to empower you to take control of your financial future. Your success is our priority, and we’re dedicated to supporting you every step of the way.</p>

                    <h2>Our Mission</h2>
                    <p>Our mission is to deliver a user-friendly platform that offers cost-effective access to accurate data and predictions. We focus on enhancing your profitability while providing educational resources that deepen your financial knowledge. We believe that an informed user is an empowered user.</p>

                    <h2>Our Benefits</h2>
                    <p>When you choose Stockkimia , you gain access to improved trading performance, increased financial knowledge, and greater financial freedom. We prioritize building a trustworthy relationship with our users, ensuring that you have the support you need to succeed.</p>

                    <p>Join us on this journey to financial empowerment. Together, we can unlock new opportunities and pave the way for a brighter financial future. Thank you for being part of our community!</p>

                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltygi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/codeforinteview/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        mail 
                        <Link href="mailto:codefornterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;