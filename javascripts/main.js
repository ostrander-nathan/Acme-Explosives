"use strict";
// wrapper for jquery is ready to fire
$(document).ready(function() {
  // console.log("jquery is ready");
  var contentEl = $("#catSelect");
  var typeData = $("#productType");
  var categories = [];
  var products = [];
// GET CATEGORIES FUNCTION
function getCat(){
  return new Promise ((resolve, reject) => {
    $.ajax({
      url:"../categories.json"
    }).done(function(data){
      resolve(data);
    }).fail(function(xhr, status, error){
      reject(error);
    })
  });
};
// Function to show Categories in Dom
getCat().then(function(data){
  return getProducts(data);
}).then(function(){
    var currentCat;
      $.each(categories, (key, categories) => {
    $('#productCategory').append(`<div class=catContent><h1>${categories.name}</h1>`);
  });
  
});
// GET PRODUCTS FUNCTION
function getProducts(resultProductsAjax){
  return new Promise ((resolve, reject) => {
    $.ajax({
      url:"../products.json"
    }).done(function(data3){
      categories = resultProductsAjax.categories;
      resolve(data3);
    }).fail(function(xhr3, status3, error3){
      reject(error3);
    });
  });
};
getCat().then(function(data3){
  return getTypes(data3);  
}).then(function(){
  var currentProduct;
    $.each(products, (key, products) => {
      $('#productProducts').append(`<div class=proContent><h1>${products.name}</h1>`);
    });
});
// GET TYPES FUNCTION
function getTypes(resultsOfTypesAjax){
  return new Promise ((resolve, reject) => {
    $.ajax({
      url:"../types.json"
    }).done(function(data2){
      categories = resultsOfTypesAjax.categories;
      resolve(data2);
    }).fail(function(xhr2, status2, error2){
      reject(error2);
    });
    console.log("resultsOfTypesAjax",resultsOfTypesAjax );
  });
};
  $("#catSelect").change(function(){
    alert( "Handler for .change() called.");
    getCat().then(function(catDataPass){
    console.log("catDataPass",catDataPass);
    getCat();
      
    })
  });



// getCat().then(function(dataPass){ 
//   // console.log("dataPass",dataPass );

//   return getTypes(dataPass);
// })
// .then(function(dataPass2){
//   // console.log("song 2nd then", Cat); // 3Cat from 1st ajax
//   // console.log("dataPass2",dataPass2 ); // 2nd json obj
//   return getProducts(dataPass2);

//         var typeString = "";
//         var currentType;
        
//         dataPass2.Cat.forEach(function(type){
//           Cat.push(type);
//         // console.log("Cat", Cat);
//         });

//         $(function() {
//           $("productDisplay").each(function() {
//             var


//         })
//         // for (var i = 0; i < Cat.length; i++) {
//         //   currentType = Cat[i];
//         //   console.log("currentType",currentType );
//         //   typeString += "<div class='type-block'>";
//         //     typeString += "<h1>" + currentType.name + "</h1>";
//         //     // typeString += "<div class='artist'>Performed by ";
//         //     //   typeString += currentType.artist;
//         //     // typeString += "</div>";
//         //     // typeString += "<div class='album'>On the album ";
//         //     //   typeString += currentType.album;
//         //     typeString += "</div>";
//         //   typeString += "</div>";
//         // }

//         // // console.log("typeData", typeData);
//         // typeData.html(typeString);
// })
// getCat().then(function(dataPass3){
  // console.log("dataPass3",dataPass3 );
// });
});