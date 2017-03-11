var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
 ]

for (var i = 0; i < products.length; i++) {

  console.log("name: " + products[i].name);

  console.log("description: " + products[i].description);

  console.log("price: " + products[i].price);

}

function selValue(){
    console.log(document.getElementById('selection').value);
    event.preventDefault();
}

/*loops through the product array and adds the prices together*/

function sumPrices(cartArray) {
  var sum = 0;
  for (var i = 0; i < cartArray.length; i++) {
    sum = sum + cartArray[i].price;
  }
  console.log(sum);
}

/*calls the sumPrices function with the products array*/

sumPrices(products);

//Define a global variable in JS, array “cart”.\
//
var cart = [{name: "Reversible Plaid"}, {name: "Wool Cable Knit"}, {name: "Northern Lights"}, {name: "Ombre Infinity"}, {name: "Fringed Plaid"}, {name: "Multi Color"}, {name: "Etro Paisley-Print Silk"}, {name: "Ashby Twill"}];


//////////////////////////////////////

/*add item to cart*/

function addItem(item) {
  var index = cart.indexOf(item);
  if (index == -1) {
    cart.push(item);
  }
  console.log(cart);
}


// remove item from cart //

function remove(item) {
  var index = cart.indexOf(item);
  if (index != -1) {
    cart.splice(index, 1);
  }
  console.log(cart);
}
  

////////////////////////////////////
  
// Sort products by Name //


products.sort(function (a,b) {
  var nameA = a.name.toLowerCase();
  var nameB = b.name.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
console.log(products);


  ///////////////////////////////////
  
// Sort products by Price //
  
products.sort(function (a,b) {
  return a.price - b.price;
  return 0;
});
console.log(products);

