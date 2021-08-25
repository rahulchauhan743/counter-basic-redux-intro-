import { useDispatch, useSelector } from "react-redux";
import { decrementCreator, incrementCreator, loginCreater, logoutCreater } from "./redux/action";
// import reducer from "./redux/reducers";

let App = () =>{

  //mene jho bhi state store me dale he vo state  useSelector ke andar jho function he usme use karsakta hu
  // state ko  modify ya update nhi kar sakhta function me

  let count = useSelector(function(state){
   
    return state.count;
  })

  let logged = useSelector(function(state){
  
    return state.logged;
  })

  // useDispatch() hook ko call karne par muje function milta he dispatch name ka   
  // using this dispatch function i can dispatch the action to store
  
  let dispatch = useDispatch();


  return(
      <>   

           <button
             onClick = {
               () => {
                 dispatch(loginCreater())
               }
             }
           >
              login
           </button>

           <button
             onClick = {
               () => {
                 dispatch(logoutCreater())
               }
             }
           >
              logout
           </button>
             
             <br></br>

             { 
               logged ? (
                <>
                  <button
                    onClick = {
                      () =>{
                        //yha par mene incrementCreator namak action ko dispatch kardiya  
                        // incrementCreator() ko call kiya jisne action object return kiya 
                        // ye action Object dispatch ko mila usne isse call kiya   
                        // and dispatched this to store in mystore 
                        //store gives this action object to reducer 
                        dispatch(incrementCreator(1));
                      }
                   }

                  >
                  + 1</button>


                  <button
                   
                    onClick = {
                      () =>{
                        //yha par mene incrementCreator namak action ko dispatch kardiya  
                        // incrementCreator() ko call kiya jisne action object return kiya 
                        // ye action Object dispatch ko mila usne isse call kiya   
                        // and dispatched this to store in mystore 
                        //store gives this action object to reducer 
                        dispatch(incrementCreator(10));
                      }
                    }

                  >+ 10</button> 

                  <p> {count} </p> 

                  <button
                    onClick = {
                      () =>{
                        //yha par mene decrementCreator namak action ko dispatch kardiya  
                        // decrementCreator() ko call kiya jisne action object return kiya 
                        // ye action Object dispatch ko mila usne isse call kiya   
                        // and dispatched this to store in mystore 
                        //store gives this action object to reducer 
                        dispatch(decrementCreator());
                      }
                    }

                  >-</button> 


               </>
                  

             ):("")
             }

           

      </>  
  )

}

export default App;