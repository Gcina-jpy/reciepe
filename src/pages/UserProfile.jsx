import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { username } = useParams(); 
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);

        
        const fetchedProfile = {
          name: username || 'Anonymous',  
          bio: 'An expert chef specializing in Italian cuisine.',
          profilePicture: '/path/to/profile-pic.jpg',
          specialty: 'Italian Dishes',
          socialLinks: {
            instagram: 'https://instagram.com/chef-profile',
            twitter: 'https://twitter.com/chef-profile'
          },
          reviews: [
            { reviewer: 'John Doe', rating: 5, comment: 'Outstanding pasta!' },
            { reviewer: 'Jane Smith', rating: 4, comment: 'Delicious desserts!' }
          ]
        };

        setProfile(fetchedProfile); 
        setLoading(false); 
      } catch (error) {
        setError('Error fetching profile data'); 
        setLoading(false);
      }
    };

    fetchProfile(); 
  }, [username]);

  
  if (loading) {
    return <div>Loading profile...</div>;
  }

  
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{profile.name}'s Profile</h1> 
      <img
        src={profile.profilePicture}
        alt={`${profile.name}'s profile`}
        style={{ width: '150px', borderRadius: '50%' }}
      />
      <p><strong>Bio:</strong> {profile.bio}</p>
      <p><strong>Specialty:</strong> {profile.specialty}</p>

      <div style={{ margin: '20px 0' }}>
        <h3>Follow on Social Media</h3>
        <a href={profile.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
          Instagram
        </a> | 
        <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>

      <h2>Reviews</h2>
      {profile.reviews.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {profile.reviews.map((review, index) => (
            <li key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', padding: '10px' }}>
              <strong>{review.reviewer}</strong> - Rating: {review.rating}/5
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}

export default UserProfile;
