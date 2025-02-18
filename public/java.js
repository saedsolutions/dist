// Constructor function for inventory items
function Inv(name, price, category, pic) {
  this.name = name;
  this.price = price;
  this.category = category;
  this.pic = pic;
}

// Select the sidebar (or another container) to append the form
let sidebar = document.getElementById("sidebar");

// 1. Create a form
let form = document.createElement("form");
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.gap = "0.5rem";
form.style.marginTop = "1rem";

// 2. Create input fields and labels

// Name Field
let nameLabel = document.createElement("label");
nameLabel.textContent = "Name:";
let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.required = true;

// Price Field
let priceLabel = document.createElement("label");
priceLabel.textContent = "Price:";
let priceInput = document.createElement("input");
priceInput.type = "number";
priceInput.step = "0.01";
priceInput.required = true;

// Category Field
let categoryLabel = document.createElement("label");
categoryLabel.textContent = "Category:";
let categoryInput = document.createElement("input");
categoryInput.type = "text";
categoryInput.required = true;

// Image URL Field
let picLabel = document.createElement("label");
picLabel.textContent = "Image URL:";
let picInput = document.createElement("input");
picInput.type = "text";
picInput.required = true;

// 3. Append the fields to the form
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(priceLabel);
form.appendChild(priceInput);
form.appendChild(categoryLabel);
form.appendChild(categoryInput);
form.appendChild(picLabel);
form.appendChild(picInput);

// 4. Create a submit button
let submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Add Item";
form.appendChild(submitButton);

// 5. Append form to the sidebar (or main container)
sidebar.appendChild(form);

// 6. Add event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Retrieve input values
  let nameValue = nameInput.value.trim();
  let priceValue = parseFloat(priceInput.value);
  let categoryValue = categoryInput.value.trim();
  let picValue = picInput.value.trim();

  // Create a new inventory object
  let newProduct = new Inv(nameValue, priceValue, categoryValue, picValue);

  // Create a card element to display the new product
  let card = document.createElement("div");
  card.style.border = "1px solid #ccc";
  card.style.borderRadius = "4px";
  card.style.padding = "1rem";
  card.style.marginTop = "1rem";
  card.style.width = "200px";
  card.style.backgroundColor = "#fff";

  // Title (Name)
  let title = document.createElement("h3");
  title.textContent = newProduct.name;

  // Price
  let priceTag = document.createElement("p");
  priceTag.textContent = "Price: $" + newProduct.price.toFixed(2);
      
  // Category
  let categoryTag = document.createElement("p");
  categoryTag.textContent = "Category: " + newProduct.category;

  // Image
  let productImage = document.createElement("img");
  productImage.src = newProduct.pic;
  productImage.alt = newProduct.name;
  productImage.style.width = "100%";
  productImage.style.height = "auto";

  // Append elements to the card
  card.appendChild(title);
  card.appendChild(productImage);
  card.appendChild(priceTag);
  card.appendChild(categoryTag);

  // You can choose where to append the card. For example, directly under the form:
  sidebar.appendChild(card);

  // Clear form fields for next entry
  nameInput.value = "";
  priceInput.value = "";
  categoryInput.value = "";
  picInput.value = "";
});