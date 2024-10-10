import React from 'react';
import reciepe1 from "../images/reciepe1.png";


function About() {
  return (
    <div style={{ backgroundColor: '#f4f4f9', padding: '50px', minHeight: '100vh' }}>
      {}
      <h1 style={{ textAlign: 'center', color: '#333', fontSize: '36px', marginBottom: '20px' }}>
        About Us
      </h1>

      {}
      <p style={{ textAlign: 'center', color: '#555', fontSize: '18px', margin: '0 auto', maxWidth: '600px' }}>
        Welcome to FEASTMODE, your go-to platform for discovering amazing recipes from around the world. Whether you’re a home cook, food enthusiast, or professional chef, we have something delicious waiting for you.
      </p>

      {}
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <img
          src={reciepe1} 
          alt="About us"
          style={{ width: '80%', maxWidth: '600px', borderRadius: '10px' }}
        />
      </div>

      {}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#333', textAlign: 'center', fontSize: '28px', marginBottom: '20px' }}>Our Mission</h2>
        <p style={{ color: '#555', fontSize: '18px', lineHeight: '1.6', margin: '0 auto', maxWidth: '700px', textAlign: 'center' }}>
          At FEASTMODE, we aim to bring people closer to the joy of cooking. We believe that cooking should be an enjoyable and rewarding experience, no matter your skill level. By providing easy-to-follow recipes, helpful tips, and a community of food lovers, we strive to make cooking accessible and fun for everyone.
        </p>
      </div>

      {}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#333', fontSize: '28px', marginBottom: '20px' }}>Meet the Team</h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          
          <div style={{ width: '200px', textAlign: 'center' }}>
            <img
              src="https://via.placeholder.com/150" 
              alt="Team Member"
              style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }}
            />
            <h3 style={{ color: '#333', fontSize: '20px', marginBottom: '5px' }}>Gcina Ngxowa</h3>
            <p style={{ color: '#777', fontSize: '16px' }}>Head Chef</p>
          </div>

       
          <div style={{ width: '200px', textAlign: 'center' }}>
            <img
              src="https://via.placeholder.com/150" 
              alt="Team Member"
              style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }}
            />
            <h3 style={{ color: '#333', fontSize: '20px', marginBottom: '5px' }}>Lwandile Chat Toto</h3>
            <p style={{ color: '#777', fontSize: '16px' }}>Recipe Developer</p>
          </div>

        
          <div style={{ width: '200px', textAlign: 'center' }}>
            <img
              src="https://via.placeholder.com/150" 
              alt="Team Member"
              style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }}
            />
            <h3 style={{ color: '#333', fontSize: '20px', marginBottom: '5px' }}>Njabulo Mini Nxumalo</h3>
            <p style={{ color: '#777', fontSize: '16px' }}>Food Blogger</p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <h2 style={{ color: '#333', fontSize: '28px', marginBottom: '20px' }}>Join Our Community</h2>
        <p style={{ color: '#555', fontSize: '18px', marginBottom: '30px', maxWidth: '600px', margin: '0 auto' }}>
          Whether you're looking to learn new recipes or share your own culinary creations, FEASTMODE is the perfect place for you. Join our growing community of food lovers today!
        </p>
        
      </div>

      <footer style={{ marginTop: '40px', textAlign: 'center', color: '#777' }}>
        <p>&copy; 2024 FEASTMODE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
