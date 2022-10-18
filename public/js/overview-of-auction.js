// // front end page




// // id s of the forum
// // {/* <form>
// //     <input>
// //     </input>
// // </form> */}
// <div class="forum">
//     <div class="forum-header">
//         <h1>Forum</h1>
//     </div>
//     <div class="forum-body">
//         <div class="forum-body-header">
//             <h2>Forum</h2>
//             <h2>Forum</h2>
//             <h2>Forum</h2>
//             <h2>Forum</h2>
//             <h2>Forum</h2>
//         </div>
//     </div>
//     <div class="forum-body-content">
//         <div class="forum-body
//             -content-header">
//             <h2>Forum</h2>
//             <h2>Forum</h2>
//             <h2>Forum</h2>
//             <h2>Forum</h2>
//             <h2>Forum</h2>
//         </div>
//     </div>
//     <div class="forum-body-content-body">
//         <div class="forum-body
//                 -content-body-header">
//             <h2>Forum</h2>
//             <h2>Forum</h2>
//             <h2>Forum</h2>
//             <h2>Forum</h2>
//             <h2>Forum</h2>
//         </div>
//     </div>
// </div>



// // Like above we will have to able to post our input into api/Auction
// // compare all the data of user inputed the price. 
// // compare the data of the user inputed the price to the data of the user inputed the price

// // api/auctionBid 
// // id (primary key)
// // price (input by user)
// // user_id (foriegn key)/
// // auctionItem_id (foreignKey)



// //Auction page, of several auction going on
// // findAll (Serialize data and then use #each for handlebars


// // after selecting that auction card
// // then we will be able to see the auction page


// // *****  this is the frontend js part
// // we will have to fetch GET or get fetch from api/auction. 
// // receiving the data about the auction..
// // we will have to use the data to display the auction card
// const { Auction } = require("../../models")

// const auction = async (req, res) => {
//     try {
//         const auctionData = await Auction.findOne({
//             where: {
//                 active: true
//             },
//         });

//         const auctions = auctionData.get({ plain: true });

//         res.render('auction', {
//             auctions
//         });
//     }
//     catch (err) {
//         res.status(500).json(err);
//     }
// }

// module.exports = auction;







// // const startingPrice = data
// const startingPrice = DataTransferItem
// const bidPrice = document.querySelector('#bidPrice').value.trim();
// // const bidPrice = document.querySelector('#bidPrice').value

// // var endingPrice = startingPrice
// var endingPrice = startingPrice


// // use moment.js to calculate the seconds between current time, and ending time
// moment().format('MMMM Do YYYY, h:mm:ss a'); // March 3rd 2021, 7:00:00 pm
// var endingTime = moment().format('MMMM Do YYYY, h:mm:ss a'); // March 3rd 2021, 7:00:00 pm
// var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a'); // March 3rd 2021, 7:00:00 pm
// var secondsLeft = moment(endingTime).diff(moment(currentTime), 'seconds');

// // there will form tag in frontend, so that user can input their price. 
// // we will have to use the data to display the auction card



// // everytime users input their data into that api/auctionbid
// // we will have to compare the data of user inputed the price.
// // if the price is higher than the current price, then we will have to update the price
// // if the price is lower than the current price, then we will have to display the message that the price is lower than the current price
// // if the price is equal to the current price, then we will have to display the message that the price is equal to the current price
// // if the price is not a number, then we will have to display the message that the price is not a number

// // if the price is higher than the current price, then we will have to update the price
// if (bidPrice > endingPrice) {
//     endingPrice = bidPrice

//     // if the price is lower than the current price, then we will have to display the message that the price is lower than the current price
// } else if (bidPrice < endingPrice) {
//     alert('The price is lower than the current price')

//     // if the price is equal to the current price, then we will have to display the message that the price is equal to the current price
// } else if (bidPrice === endingPrice) {
//     alert('The price is equal to the current price')

//     // if the price is not a number, then we will have to display the message that the price is not a number
// } else {
//     alert('The price is not a number')
// }

// // if the secondsLeft is 0, then we will have to display the message that the auction is over
// if (secondsLeft === 0) {
//     alert('The auction is over')
// }

// // if the secondsLeft is not 0, then we will have to display the message that the auction is not over
// if (secondsLeft !== 0) {
//     alert('The auction is not over')
// }

// // if the secondsLeft is less than 0, then we will have to display the message that the auction is over
// if (secondsLeft < 0) {
//     alert('The auction is over')
// }

// // if the secondsLeft is greater than 0, then we will have to display the message that the auction is not over
// if (secondsLeft > 0) {
//     alert('The auction is not over')
// }

// // if the secondsLeft is less than or equal to 0, then we will have to display the message that the auction is over
// if (secondsLeft <= 0) {
//     alert('The auction is over')
// }

// // if the secondsLeft is greater than or equal to 0, then we will have to display the message that the auction is not over
// if (secondsLeft >= 0) {
//     alert('The auction is not over')
// }

// // if the secondsLeft is greater than or equal to 0, then we will have to display the message that the auction is not over
// if (secondsLeft >= 0) {
//     alert('The auction is not over')
// }

// // that data will keep getting inforamtion from user. 


// // setTimeout function, 
// // compare all the data of user inputed the price.

// //GEt request from api/auctionbid
// // get all the prices by individual user_id , 
// // make iterate functionm, to find greatest price entered by that USER ID
// // we get final data of ending Price,
// // const winner = user.ID or username or email
// // 
// // Modal page, of congraulation to that user. 
// // DELETE Request of that data. 








