function HobbyLinks() {
    HobbyLinks = [
        "https://theimprovshop.com/",
        "https://the1870studio.com/shop",
        "https://rollercon.com/"
    ]
    return (
        <div>
           <h3>{HobbyLinks}</h3>
           <a href = {HobbyLinks[0]}>Improv Comedy</a>
           <a href = {HobbyLinks[1]}>Fun Crafts and Art</a>
           <a href = {HobbyLinks[2]}>Roller Derby</a>
        </div>      
    )
};

export default HobbyLinks;