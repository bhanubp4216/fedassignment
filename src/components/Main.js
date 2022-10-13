import React from "react";
import Sidebar from "./Sidebar";
import MyImage from "./image.png";
import MyImage2 from "./image1.png";

const Main = () => {
    return (

    <div>

  <div className="article">
    <p className="mycontainer">
      <h2>overview:</h2>
      <p>React lets you define components as classes or functions.
         Components defined as classes currently provide more features which are described in detail on this page.
          To define a React component class, you need to extend React.Component

          </p>
          
      <h2>Types Of Components in React</h2>
      <p>A Component is one of the core building blocks of React. 
        In other words, we can say that every application you will develop in React
         will be made up of pieces called components. Components make the task of building UIs much easier.
          You can see a UI broken down into multiple individual pieces called components and work on them 
          independently and merge them all in a parent component which will be your final UI. 
        </p>
 <p><span>In React, we mainly have two types of components:</span> </p>
 

  <p><span><b>Class Components:</b></span> Class components are sometimes categorized as smart or 
  stateful components because they implement logic and state. They’re ES6 classes and contain the Component
   class in React. Lifecycle methods can be used inside these components
    ( componentDidUpdate, componentDidMount, etc.). Class components are a bit more complex because you have to
     keep track of not only lifecycle methods but also their side effects such as re-rendering, and data flow 
     management.

Below example shows a valid class-based component in React: 
 </p>
 <p> <img src={MyImage} height="150" width="250" alt="Class Component" />
   </p>
   <p><span><b>Functional Components:</b> </span>Functional components are JavaScript (or ES6) functions that 
   return React elements. They’re a bit easier to understand because there isn’t as much going on as there would
    be in a class component. They can also be written as a simple JS functions or as an arrow function using ES6 
    syntax, 
   and their props are passed in as arguments (if any).Below example shows a valid Functional component in React:
   </p>
   <p> <img src={MyImage2} height="150" width="250" alt="Class Component" /></p>
   <p>Unlike class components, functional components are stateless, which means that there are no lifecycle methods or state management. However, with React Hooks, there are provided functions 
    for us to do so, such as useState() & useEffect().</p>
   <p><span ><b>Pros of Functional Components:</b></span>
   <br></br>
<span><b>Easier to test:</b></span> You don’t have to worry about hidden state and there aren’t as many side effects when it comes to functional components, so for every input, the functions will have exactly one output.
Easier to read/write: The syntax is less complex than that of class components, and it’s easier to 
read due to knowing how much you can’t do with functional components already. The use of prop destructuring makes
 it really beneficial to see what’s going on and what’s 
coming out of the component.
<br></br>
<br></br>
<span><b>Easier to debug:</b></span> Again, functional components depend on the props they are given and don’t reply on state. 
There isn’t a reason to console.log() your state to constantly understand the changes that are going on.
<br></br>
<br></br>
<p ><span><b>Cons of Functional Components:</b></span></p>
<span><b>Relearning new syntax:</b></span>
 The syntax could be unusual at first glance and difficult to pick up because of how

 long class components have been around. In classes, you declare a render function. With functions, you don’t. 
 For passing around props in classes, you could either send them as class properties to the component or declare
  default props below the component. In contrast, functional components send props as arguments.
   Differences like 
  
  these can be challenging for other devs to understand if they’re not used to writing their apps this way.
  <br></br>
<span><b>Performance optimization:</b></span> There isn’t really a difference in terms of which components benefit you more 
performance-wise; however, since functional components don’t have access to methods like shouldComponentUpdate
 and PureComponent, it could be a bit of an inconvenience to optimize them for performance.</p>
 <p>
 <span><b>Conclusion:</b></span>
Functional components are sort of becoming equal to class components in terms of functionality. 
Developers usually used functional components if they were just rendering something and didn’t need to pass
 state around or use lifecycle methods.
 <br></br>

Although, as mentioned before, hooks were introduced with React version 16.8. 
This has allowed developers to use lifecycle methods and state with functional components! It’s not 
recommended to go back into your apps and convert your classes to functional components because there’s a
 difference between how state is manipulated and how lifecycles work.
<br></br>


</p>
 </p>
   </div>
    <Sidebar />
   </div>
    )
};

export default Main;
    
        
        
      
      
   
    

 
 
  
     
   




   