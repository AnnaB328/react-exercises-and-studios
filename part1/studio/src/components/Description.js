import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    const authorLink = "https://www.hummingbirdhigh.com/2021/03/baileys-tres-leches-cake.html"
    const authorPhoto = "https://www.hummingbirdhigh.com/wp-content/uploads/2020/08/homepage_bio-pic_IMG_0074-500x700.jpg"
    const authorName = "Michelle Lopez"
    
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     )
};

const RecipeDescription = () => {
    return(
          <div>
            <div>
              <h1>Baileys Tres Leches Cake</h1>
              <p>A boozy spin on tres leches cake, a classic Latin American dessert</p>
            </div>
            <RecipeAuthor />
          </div>
        );
      };

export default RecipeDescription;
