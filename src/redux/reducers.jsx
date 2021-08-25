
//reducer function take two argument
//1. state ,we give it a intial state or value as 0
//2. action ,object on which basis it changes state

//so when store gives action to reducer we get that in action variable
export const counterReducer = (state = 0, action) =>{
 
      switch (action.type) {
          //when state changes re-render() occurs
          case "INCREMENT":
              return state + action.payload;

          case "DECREMENT":
            return state - 1;   
              
      
          default:
            return state;
      }


}


export const loginReducer = (state = false , action) => {

    switch (action.type) {
        //when state changes re-render() occurs
        case "LOGIN":
            return true;

        case "LOGOUT":
          return false;   
            
    
        default:
          return state;
    }

} 


