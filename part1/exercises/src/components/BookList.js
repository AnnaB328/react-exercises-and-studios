export default function BookList() {
   let pageTitle = "BookList";
   let book1 = "https://i.pinimg.com/originals/06/90/a8/0690a876e760e9c14ab2dc3ae21aac94.jpg";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHapGtgQa5r1h5-bw24OniPr6AP_1iObB4XysobHhKdIcuyE6FaMUDcTFq0ikwaZKpSG8&usqp=CAU";
   let book3 = "https://2.bp.blogspot.com/-H7S7OjCnTJs/XFpPaTdytdI/AAAAAAAASC8/6ea1HoGBHb8cA85tUwJ5yf5J-HpvUJRnACLcBGAs/s1600/2E1E7DE0-F439-467C-B9E7-D138857AFB49.jpeg";

   return (
      <div>
         <h3>{bookList}</h3>
         <img src={book1} alt="Verity" />
         <img src={book2} alt="The Wives" />
         <img src={book3} alt="The Silent Patient" />
      </div>      
   );
}