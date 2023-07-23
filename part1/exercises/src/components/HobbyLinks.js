export default function HobbyLinks() {
    let hobbyLinks = [
        "https://theimprovshop.com/",
        "https://the1870studio.com/shop",
        "https://rollercon.com/"
    ]
    return (
        <div>
           <h3>My Hobbies</h3>
           <a href = {hobbyLinks[0]} target = "blank">Improv Comedy</a>
           <a href = {hobbyLinks[1]} target = "blank">Fun Crafts and Art</a>
           <a href = {hobbyLinks[2]} target = "blank">Roller Derby</a>
        </div>      
    );
}