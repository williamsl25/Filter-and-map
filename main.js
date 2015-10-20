// Can't figure out how to display using $

// question 1
var averagePrice = function(array){
    // parse arguments into an array
    var total = 0;
    _.each(items, function(item, idx, arr){
      total+= item["price"];
    })
     return total/items.length;
};

console.log(averagePrice('items'));

document.getElementById('answer1').innerHTML = averagePrice('items');

// 2. Show me an array of items that cost between $14.00 and $18.00 USD?

// filter price range
var filteredPrice= items.filter(function (item){
  return item["price"] <= 18.00 && item["price"] >= 14.00;
});
// filter only USD
var filteredPriceCurr = filteredPrice.filter(function(item){
  return item["currency_code"] === "USD";
});

// map iterates over customized objects you create
var mappedPrice = filteredPriceCurr.map(function(item){
  return {
    title: item.title,
    price: item.price
  };
});
console.log(mappedPrice);
document.getElementById('answer2').innerHTML = mappedPrice;
// can't figure out how to display

// 3. Which item has a "GBP" currency code? Display it's name and price.
var gbp = _.chain(items).filter(function(item){
  return item["currency_code"] === "GBP";
});
var gbpTitle = _.chain(gbp).pluck('title').value();
var gbpPrice = _.chain(gbp).pluck('price').value();

document.getElementById('answer3').innerHTML = gbpTitle + " $" + gbpPrice;

// 4. Display a list of all items who are made of wood.

var woodMaterial = _.chain(items).filter(function(item){
  return _.contains(item.materials, 'wood')
}).pluck('title').value();
var woodMaterialList = function(array){
  var str= "";
  _.each(array, function(item, idx, arr){
    str += item + "<br>";
  });
  return str;
}

document.getElementById('answer4').innerHTML = (woodMaterialList(woodMaterial));

// 5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

var eightPlus = _.chain(items).filter(function(item){
  return item.materials.length >= 8;
}).map(function(item){
  return {
    title: item.title, materials: item.materials
  }
}).value();

var listeightPlus = function(array){
var str= "";
_.each(array,function(item, idx, arr){
    str+= item.title + "<br>" + "Number of Materials: " + item.materials.length + "<br>" + "Materials: " + item.materials + "<br>" + "<br>";
  });
  return str;
}
console.log(listeightPlus(eightPlus));
document.getElementById('answer5').innerHTML = (listeightPlus(eightPlus));

// 6. How many items were made by their sellers?
var madeBy = function(array){
  var total = 0;

  _.each(array,function(item, idx, arr){
    if(item["who_made"] === "i_did"){
      total+= 1;
    }
  });

  return total;
}
document.getElementById('answer6').innerHTML = (madeBy(items));


console.log("Your code goes in this document.");


_.times(100, function() {
  console.log("hi");
});
