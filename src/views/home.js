
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Navbar8 from '../components/navbar8';
import Hero17 from '../components/hero17';
import Features24 from '../components/features24';
import CTA26 from '../components/cta26';
import Features25 from '../components/features25';
import Steps2 from '../components/steps2';
import Testimonial17 from '../components/testimonial17';
import Footer4 from '../components/footer4';

import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Trusty Passionate Narwhal</title>
        <meta property="og:title" content="Trusty Passionate Narwhal" />
      </Helmet>

      <Navbar8
        // page1={<span>Home</span>}
        // page2={<span>About Us</span>}
        // page3={<span>Services</span>}
        // page4={<span>Contact</span>}
        // link1={<span>home</span>}
        // link2={<span>about</span>}
        // link3={<span>services</span>}
        // link4={<span>contact</span>}
        // // page1Description={<span>Welcome to AI for Women Entrepreneurs</span>}
        // page2Description={<span>Learn more about our mission and team</span>}
        // page3Description={<span>Explore the AI services we offer</span>}
        // page4Description={
        //   <span>Get in touch with us for collaborations and inquiries</span>
        // }
        // action1={<span>Sign Up</span>}
        // action2={<span>Learn More</span>}
      />

      <Hero17
        heading1={<span>Empowering Women Entrepreneurs with AI</span>}
        content1={
          <span>
            Unlock the potential of artificial intelligence to drive your
            business forward. Join us in revolutionizing the way women
            entrepreneurs leverage AI technology.
          </span>
        }
        action1={<span>Get Started</span>}
        action2={<span>Learn More</span>}
      />

      <Features24
        feature1Title={<span>AI Solutions</span>}
        feature1Description={
          <span>
            Utilize cutting-edge AI tools to enhance your business operations.
          </span>
        }
        feature2Title={<span>Innovative Technology</span>}
        feature2Description={
          <span>Leverage the latest innovations for your business growth.</span>
        }
        feature3Title={<span>Empowering Women</span>}
        feature3Description={
          <span>Support women entrepreneurs in their AI journey.</span>
        }
      />

      <CTA26
        heading1={<span>Join the AI revolution for women entrepreneurs</span>}
        content1={
          <span>
            Empower your business with cutting-edge AI technology tailored for
            women entrepreneurs.
          </span>
        }
        action1={<span>Get Started Now</span>}
      />

      <Features25
        feature1Title={<span>AI-Powered Business Insights</span>}
        feature1Description={
          <span>Gain valuable insights with AI-driven analytics.</span>
        }
        feature2Title={<span>Personalized Marketing Strategies</span>}
        feature2Description={
          <span>
            Develop tailored marketing strategies using AI technology.
          </span>
        }
        feature3Title={<span>Efficient Customer Support</span>}
        feature3Description={
          <span>Enhance customer experience with AI solutions.</span>
        }
      />

      <Steps2
        step1Title={<span>Identify Your Business Needs</span>}
        step1Description={
          <span>
            Determine how AI can address your business goals and challenges.
          </span>
        }
        step2Title={<span>Explore AI Solutions</span>}
        step2Description={
          <span>Research AI tools that align with your business.</span>
        }
        step3Title={<span>Implement AI Strategies</span>}
        step3Description={
          <span>Integrate AI into your business processes for success.</span>
        }
        step4Title={<span>Measure Success</span>}
        step4Description={
          <span>Track and analyze the impact of AI on your business.</span>
        }
      />

      <Testimonial17
        heading1={<span>Testimonials</span>}
        content1={<span>What our clients say about us</span>}
        author1Name={<span>Sara Johnson</span>}
        author1Position={<span>Founder & CEO, TechSavvy Solutions</span>}
        review1={
          <span>
            AI for Women Entrepreneurs has transformed the way we approach
            business.
          </span>
        }
        author2Name={<span>Emily Chen</span>}
        author2Position={<span>Co-founder, InnovateHer Labs</span>}
        review2={
          <span>
            The tools and resources offered have helped us streamline operations.
          </span>
        }
      />

      <Footer4
        link1={<span>About Us</span>}
        link2={<span>Services</span>}
        link3={<span>Blog</span>}
        link4={<span>Contact Us</span>}
        link5={<span>FAQs</span>}
        termsLink={<span>Terms of Service</span>}
        privacyLink={<span>Privacy Policy</span>}
        cookiesLink={<span>Cookies Policy</span>}
      />
    </div>
  );
};

export default Home;
