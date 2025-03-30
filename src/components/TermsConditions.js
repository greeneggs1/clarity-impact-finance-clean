import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './TermsConditions.css';

const TermsConditions = () => {
  // Scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="terms-container">
        <div className="terms-content">
          <h1>Terms & Conditions</h1>
          
          <section>
            <h2>1. Introduction</h2>
            <p>Welcome to Clarity Impact Finance. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.</p>
          </section>
          
          <section>
            <h2>2. Services</h2>
            <p>Clarity Impact Finance provides financial consulting, impact assessment, and CDFI support services. Our services are subject to change without notice.</p>
          </section>
          
          <section>
            <h2>3. User Eligibility</h2>
            <p>Our services are available to users who are at least 18 years of age and can form legally binding contracts under applicable law.</p>
          </section>
          
          <section>
            <h2>4. Account Registration</h2>
            <p>Some portions of our site require registration. You are responsible for maintaining the confidentiality of your account information and password.</p>
          </section>
          
          <section>
            <h2>5. Intellectual Property</h2>
            <p>All content, including text, graphics, logos, and software, is the property of Clarity Impact Finance and is protected by copyright and other intellectual property laws.</p>
          </section>
          
          <section>
            <h2>6. Privacy Policy</h2>
            <p>Your use of our services is also governed by our Privacy Policy, which outlines how we collect, use, and protect your information.</p>
          </section>
          
          <section>
            <h2>7. User Conduct</h2>
            <p>When using our services, you agree not to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Interfere with the operation of our services</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>
          
          <section>
            <h2>8. Limitation of Liability</h2>
            <p>Clarity Impact Finance is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of our services.</p>
          </section>
          
          <section>
            <h2>9. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Continued use of our services after such modifications constitutes your acceptance of the revised Terms.</p>
          </section>
          
          <section>
            <h2>10. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at contact@clarityimpactfinance.com.</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditions; 