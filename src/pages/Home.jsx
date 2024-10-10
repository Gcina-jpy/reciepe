import React, { useState } from "react";
import one from "../images/one.png";

function Home() {
  
  const [recipes] = useState([
    {
      name: 'Spaghetti Carbonara',
      recipe: 'Ingredients: Spaghetti, eggs, pancetta, Parmesan, black pepper. Instructions: Cook pasta, fry pancetta, mix eggs and cheese, combine everything and serve.'
    },
    {
      name: 'Chicken Tikka Masala',
      recipe: 'Ingredients: Chicken, yogurt, cream, tomato sauce, spices. Instructions: Marinate chicken, cook sauce, combine and simmer.'
    },
    {
      name: 'Chocolate Chip Cookies',
      recipe: 'Ingredients: Flour, butter, sugar, eggs, chocolate chips. Instructions: Mix ingredients, bake at 350°F for 12 minutes.'
    },
    {
      name: 'Vegetable Stir-fry',
      recipe: 'Ingredients: Bell peppers, broccoli, soy sauce, garlic, tofu. Instructions: Sauté vegetables, add tofu, stir-fry with soy sauce.'
    },
    {
      name: 'Beef Stroganoff',
      recipe: 'Ingredients: Beef, onions, mushrooms, sour cream, pasta. Instructions: Cook beef, sauté onions and mushrooms, add sour cream, serve over pasta.'
    },
    {
      name: 'Vegan Brownies',
      recipe: 'Ingredients: Flour, cocoa powder, coconut oil, almond milk, sugar. Instructions: Mix ingredients, bake at 350°F for 25 minutes.'
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null); 


  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div style={{ backgroundColor: '#333333', padding: '20px', minHeight: '100vh' }}>
        <h1 style={{ textAlign: 'center', color: '#fff' }}>WELCOME TO FEASTMODE</h1>
        <p style={{ textAlign: 'center', color: '#aaa' }}>Your one stop destination for delicious recipes.</p>

        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <img
            src={one}
            alt="delicious recipe"
            style={{
              width: '300px',
              borderRadius: '10px',
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <div>
            <h2>Search Recipes</h2>
            <input
              type="text"
              placeholder="Search for recipes..."
              style={{ padding: '12px', width: '300px' }}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <button style={{ padding: '10px', marginLeft: '5px' }}>Search</button>
          </div>
        </div>

    
        {selectedRecipe ? (
          <div style={{ textAlign: 'center', margin: '20px 0', color: '#fff' }}>
            <h2>{selectedRecipe.name} Recipe</h2>
            <p>{selectedRecipe.recipe}</p>
            <button onClick={() => setSelectedRecipe(null)} style={{ padding: '10px', marginTop: '10px' }}>
              Back to Recipes
            </button>
          </div>
        ) : (
          <div>
            <h2>Most Liked Recipes</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {filteredRecipes.map((recipe, index) => (
                <li key={index} style={{ marginBottom: '10px', color: '#black' }}>
                  <strong>{recipe.name}</strong> - 
                  <button
                    onClick={() => setSelectedRecipe(recipe)}
                    style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}
                  >
                    Learn more
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h2>Categories</h2>
          <ul style={{ listStyleType: 'none' }}>
            <li style={{ marginBottom: '10px' }}>Appetizers</li>
            <li style={{ marginBottom: '10px' }}>Main Courses</li>
            <li style={{ marginBottom: '10px' }}>Desserts</li>
            <li style={{ marginBottom: '10px' }}>Vegetarian</li>
            <li style={{ marginBottom: '10px' }}>Gluten-Free</li>
          </ul>
        </div>

        <footer style={{ marginTop: '40px', textAlign: 'center', color: '#777' }}>
          <p>&copy; 2024 FEASTMODE. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
