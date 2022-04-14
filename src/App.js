import React ,{useState} from 'react';
import ToDoList from './ToDoList';
import reactDom from 'react-dom';
//import { useState } from 'react/cjs/react.production.min';
const App=()=>{
    const [inputList,newInputList]=useState("buy apple");
    const[items,setItems]=useState([]);
const inputEvent=(event)=>{
    newInputList(event.target.value);
}
const deleteItems=(id)=>{
   // console.log("deleted");
   setItems((oldItems)=>{
       return oldItems.filter((arrayElement,index)=>{
           return id!=index;
       });
   });
};
const listOfItems=()=>{
setItems((temarr)=>{
    return [...temarr,inputList];
    newInputList("");
});
}
return (
    <>
        <div className='app'>
            <div className='center__div'>
            <br></br>
                <h1>TODO_LIST</h1>
                <br></br>
                <input type="text"
                 placeholder='Enter the item'
                 value={inputList}
                 onChange={inputEvent}  />
                <button onClick={ listOfItems}>+</button>
                <ol>
                   
                     {  items.map((itemval,index)=>{
                           return (
                               <ToDoList key={index}
                                text={itemval}
                                    id={index}
                                    onSelect={deleteItems}
                                />
                              // <li>{itemval}</li>
                           )
                       }


                       )}
                   
                </ol>

            </div>
        </div>
    </>
)

}
export default App;