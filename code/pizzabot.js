
/* 
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

    //Welcome msg
    alert("Hey! Happy to serve your pizza :) On our menu we have " + vegetarian + ", " + hawaiian + ", and " + pepperoni + ".");

    // Function to check if the entered pizza is on the menu
    function checkOrderName(orderName) {
    return orderName === vegetarian || orderName === hawaiian || orderName === pepperoni;
  }
  
    // Ask the user which pizza they want to order
    const orderName = prompt("Enter the name of the pizza you want to order today:");
  
    // Check if the entered pizza is on the menu
    if (checkOrderName(orderName)) {
    // Ask the user how many of the selected pizza they'd like
    const orderQuantity = prompt("How many of " + orderName + " do you want?");
  
    // Function to calculate the total price of the order
    function totalCost(orderQuantity) {
      return orderQuantity * pizzaPrice ;
    }
  
    // Function to calculate cooking time based on the number of pizzas
    function cookingTime(orderQuantity) {
      if (orderQuantity >= 1 && orderQuantity <= 2) {
        return "The pizzas will take 10 minutes.";
      } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        return "The pizzas will take 15 minutes.";
      } else {
        return "The pizzas will take 20 minutes.";
      }
    }
  
    // Calculate the total price of the order
    const orderTotal = totalCost(orderQuantity);
  
    // Calculate cooking time
    const timeToCook = cookingTime(orderQuantity);
  
    // Display a message with the order details, total cost, and cooking time
    alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + " kr. " + timeToCook);
  } else {
    alert("Sorry, we don't have " + orderName + " on the menu.");
  }

 */