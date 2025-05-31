---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2025-05-31, 15:49
Last Date: 2025-05-31T16:38:18+08:00
References: 
draft: 
description: Learn the core concepts of React—including components, JSX, state, props, useEffect, and event handling—through clear examples and practical tips for building interactive UIs.
---
## Components 
---
- A React component is usually defined in its own file. This makes it easier to reuse via imports. We typically **import** what we need, and **export** our components
- That said, we can define multiple components in the same file if they’re only used locally
- **Components are just functions**, you can nest them to create parent-child structures. We can **compose** UI like writing HTML by embedding components inside other components’ [[#JSX|JSX]]


>[!tip]
> - `App.js` is usually the UI entry point,  which typically holds the **layout, routing, context providers** etc
> - Split components into separate files when a file gets too long or cluttered.

### Component Lifecycle 
- The `useEffect` hook gives us access to lifecycle behaviors (like `componentDidMount`, `componentDidUpdate` etc)
- You pass a function to `useEffect`, it runs after render and also on updates

>[!code] Run once on mount, pass an empty array 
> ```js /[]/
> useEffect(() => {
>   console.log("Component mounted");
> }, []);
> ```
> 
> If you want to trigger `console.log("Component mounted")` when a variable is updated, just put the variable into the `[]` array.

>[!important] Common use cases
> Logging, API calls, timers, etc.


## JSX
---
- JSX is a **syntax extension** we use to define component output aka what is displayed on the screen
- Behind the scenes, React **compiles JSX to JavaScript** that browsers can understand
- It makes building UIs much easier and more intuitive. You can import and embed components inside others.


>[!code] Expression evaluation 
> Inside `{ }`, you can embed any **JavaScript [[Expression|expression]]**, but only **one expression per block**. It must evaluate to something (like return a value).

>[!attention]
> JSX is strict. If you forget to close a tag, React will throw an error.
> 
> Since `class` is a reserved word in JS, we use `className` instead.

## State 
---
- Each component **owns its own state** , it’s like local memory. Think of state as the **data managed by the component**
- State allows a component to encapsulate data that other components can’t directly access

>[!code] We manage state using the `useState` hook 
> ```js
> import React, { useState } from 'react';
> 
> const [count, setCount] = useState(0);
> ```
> `useState` returns a pair: the current state value, and a function to update it. You **must** use the update function (`setCount` in this case) to change state, or React won’t re-render.

>[!example]
> - Inputs manage what's typed into them
> - Buttons know when they’re clicked or focused
> - Links know when the mouse is hovering

## Props
---

>[!important]
> A [[#Components|component]] either **manages data with [[#State]]**, or **receives data via props**.

- Props allow components to **receive data** from other components.

>[!code] Passing data to child component 
> Pass like HTML attributes from parent component's [[#JSX]]: ```html <WelcomeMessage myprop="somevalue" />```.
> 
> In the receiving component:
> ```js
>  function WelcomeMessage({ myprop }) {
>    return <p>Welcome, {myprop}!</p>;
>  }
> ```


>[!code] You can also pass `functions as props` so child components can trigger actions in parent components
> Data typically flows **top-down** (parent to child) via props. But if you pass a function down, child components can **update parent state**:
> 
> ```js
> const [count, setCount] = useState(0);
> <Counter setCount={setCount} />
> ```

>[!code] Special prop: `children`
> It represents content passed between opening and closing tags:
> 
> ```js
>  <WelcomeMessage> Here is some message </WelcomeMessage>
>  
>  function WelcomeMessage({ children }) {
>    return <p>{children}</p>;
>  }
> ```


>[!important]
> For more complex data handling, there’s Context API or Redux, but most of the time, props and [[#State|state]] are enough.

## Handling User Events in React
---
```js
<button onClick={(event) => {
  // handle the event
}}>
  Click here
</button>
```

- React supports many event types: `onClick`, `onKeyUp`, `onFocus`, `onChange`, `onMouseDown`, `onSubmit`, and more.

## References 
---
- [React for Beginners – A React.js Handbook for Front End Developers](https://www.freecodecamp.org/news/react-beginner-handbook/)