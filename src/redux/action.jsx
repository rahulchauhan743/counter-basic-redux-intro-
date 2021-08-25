//actions are just objects

//when writing actions in redux we create something called action creater function

//we used creater functions so that we can pass some data to that function and change state according to that passed data

export const incrementCreator = (value) =>{
       
    //it returns object which has type "INCREMENT" which tell karna kya he state me change
     return {
           type : "INCREMENT", 
           payload : value
     };

}

export const decrementCreator = (value) =>{
       
    //it returns object which has type "DECREMENT" which tell karna kya he state me change
     return {
           type : "DECREMENT", 
           payload : value
     };

}

export const loginCreater = () =>{
    return {
        type : "LOGIN",
    }
}

export const logoutCreater = () =>{
    return {
        type : "LOGOUT",
    }
}