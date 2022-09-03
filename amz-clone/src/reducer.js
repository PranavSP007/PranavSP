export const initialState = {
  basket: [], //empty basket
  user: null,
};

// Selector
//reduce is a function which maps through the basket and tally the amount
//to calculate the total prize of items in the basket

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//here amount,0 where '0' is the initial value

const reducer = (state, action) => {
  //state=current state
  //action=what u r trying to do i.e.,adding or removing from the basket.
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        //returning the originally was

        ...state,
        basket: [...state.basket, action.item],

        //updating basket to current state and
        // the item stored in action (pushing the item into the basket)
      };

    case "REMOVE_FROM_BASKET":
      //this goes thorugh the basket item to match the action that we passed in.
      //it will find the first match and then returns to you but not all
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //this is the state of the basket after adding products
      let newBasket = [...state.basket];
      if (index >= 0) {
        //hence it found the id
        newBasket.splice(index, 1);
        //splice syntax (index,delete count)
      } else {
        console.warn(
          `cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    // return {
    //this piece of code deletes the product having that id but if a product
    //is added twice this removes both the products which is not what we want to do
    //   ...state,
    //   basket: state.basket.filter((item) => item.id !== action.id),
    // };
    default:
      return state;
  }
};

export default reducer;

//   Let’s see what’s happening in this piece of code.

// The reducer is a place where you declare all the application level states which can be used later by the application.
// In initialState, we declare the states we are going to use. In this case, basket and user.

// The actual reducer function takes in a state and action. The state and action is provided so that the reducer can perform operations on the state.
// We export the reducer.
//reducer puts the data(dispatch) into data layer when we click on add to basket
