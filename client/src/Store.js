// import redux from 'redux';
var redux  = require('redux')
var oldState = {
    search: {
        searchList: [],
        searchText: '',
    },
    sort: {
        sort: 'Mặc định',
        typeSort: 'default',
    },
    sortSerch: {
        searchList: [],
        sortType: '',
        productText: '',
    }, 
    checkOut: {
        checkOutProduct: [],
    },
    productOfCart: 0,
  
}
var reducer = (state=oldState, action) => {
    if(action.type ===  "SEARCHRS")  {
         state = {...state,search: action.searchrs}
         console.log(state);
     return state;
    }
     else if(action.type == "SORT") {
         state = {...state, sort: action.sort}
         console.log(state);
         return state;
     }

     else if(action.type == "SORTSEARCH") {
         state = {...state, sortSerch: action.searchrsort}
         console.log(state)
         return state;
     } 
     else if(action.type == "CHECKOUT"){
         state = {...state, checkOut: action.checkout}
         console.log(state)
         return state;
     } 
     else if(action.type == "ADDTOCART") {
        state = {...state, productOfCart: state.productOfCart+1}
        console.log(state)
        return state;
     }
     
    return state;
}


var store = redux.createStore(reducer);

export default store;
