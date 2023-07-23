function HobbyLinks() {
    let hobbyLinks = [
        "https://theimprovshop.com/",
        "https://the1870studio.com/shop",
        "https://rollercon.com/"
    ]
    return (
        <div>
           <h3>{hobbyLinks}</h3>
           <a href = {hobbyLinks[0]}>Improv Comedy</a>
           <a href = {hobbyLinks[1]}>Fun Crafts and Art</a>
           <a href = {hobbyLinks[2]}>Roller Derby</a>
        </div>      
    )
};

export default HobbyLinks;