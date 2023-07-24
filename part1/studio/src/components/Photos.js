import styles from './Description.module.css';

function RecipePhoto() {
    let photoUrl = 'https://www.hummingbirdhigh.com/wp-content/uploads/2021/03/baileys-tres-leches-cake_01_IMG_0083-672x800.jpg';

    return (
        <img src={photoUrl} alt="recipe photo" className = {styles.imageUpdates} />
    );
}

export default RecipePhoto;
