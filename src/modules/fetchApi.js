// // Make a request to the base API
// fetch('https://pokeapi.co/api/v2/pokemon/')
//   .then(response => response.json())
//   .then(baseData => {
//     // Make a request to the Involvement API
//     fetch('https://pokeapi.co/api/v2/pokemon')
//       .then(response => response.json())
//       .then(involvementData => {
//         // Combine the data from both APIs
//         const combinedData = baseData.map(item => {
//           const involvementItem = involvementData.find(i => i.itemId === item.id);
//           return {
//             ...item,
//             likes: involvementItem ? involvementItem.likes : 0
//           };
//         });

//         // Now you have the combined data, you can do further processing or display it on your web app
//         console.log(combinedData);
//       })
//       .catch(error => {
//         console.error('Error fetching involvement data:', error);
//       });
//   })
//   .catch(error => {
//     console.error('Error fetching base data:', error);
//   });
