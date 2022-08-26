# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### 
This application is a shopping cart where you can add your desired list of shopping items to the cart.

=>the add button functionality helps you add new products to the product list
fields such as product name,Product Image, Description, Price, Category, Ratings are added 

=>here the category is a dropdown where it has to be chosen from given options to which category the product belongs

=>Each product list is fetched or rendered in the form of a card 
    Here it is done with the help of map function
=>trhe card consists of a the details of the product including buttons namely "ADD TO CART","EDIT" icon,"DELETE" icon

ADD TO CART button helps the user choose the product to get added to cart with the help of "handleClick functionality"
DELETE button on the card removes the particular product from the shopping list

There is a serch bar included which helps the user search according to the name of the product or the category of the product with the help of filter function.

the PRICE BUTTON with ICON helps to sort or filter the products 
by both ascending and descending order.

the RATING button placed next to it filters or sorts the products
by highest rating i.e., the highest rating product will be shown first

onclicking the CART icon user is taken to the cart where the selected products is displayed with the price

the "+" icon can be used to increase the quantity of the product,
the "-" icon can be used to decrease the quantity of the product.
the "REMOVE" button removes the selected item from cart.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
