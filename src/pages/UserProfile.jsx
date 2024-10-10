import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { username } = useParams();  
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchProfile = async () => {
      setLoading(true);
      const fetchedProfile = {
        name: username,
        bio: 'A passionate food enthusiast and recipe creator.',
        favoriteCuisine: 'Italian',
        favoriteRecipes: ['Spaghetti Carbonara', 'Tiramisu', 'Margherita Pizza']
      };
      setProfile(fetchedProfile);
      setLoading(false);
    };

    fetchProfile();
  }, [username]);

  if (loading) {
    return <div>Loading profile...</div>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{profile.name}'s Profile</h1>
      <p><strong>Bio:</strong> {profile.bio}</p>
      <p><strong>Favorite Cuisine:</strong> {profile.favoriteCuisine}</p>

      <h2>Favorite Recipes</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {profile.favoriteRecipes.map((recipe, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {recipe}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
