import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";
import ShoppingList from "../components/ShoppingList";

const testData = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Swiss Cheese", category: "Dairy" },
  { id: 6, name: "Cookies", category: "Dessert" },
];

// Filter
const noop = () => {};
test("uses a prop of 'search' to display the search term in the input field", () => {
  


});

test("calls the onSearchChange callback prop when the input is changed", () => {
  const onChange = jest.fn();
  



  });





  

  
  
  

  

// Shopping List

  
  
    testData.length
  


test("the shopping filters based on the search term to include full matches", () => {

  
    
  });

  
  expect(screen.queryByText("Lettuce")).not.toBeInTheDocument();

  
  


  
  expect(screen.queryByText("Yogurt")).not.toBeInTheDocument();


test("the shopping filters based on the search term to include partial matches", () => {
  

  
    
  });

  
  
  expect(screen.queryByText("Lettuce")).not.toBeInTheDocument();
  expect(screen.queryByText("Yogurt")).not.toBeInTheDocument();

