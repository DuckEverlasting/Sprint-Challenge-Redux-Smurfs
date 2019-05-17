In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  Actions are objects created to send information into Redux's store. They contain an identifier (type) and any data that needs to be sent out of the application (payload).
  Reducers take in actions and process the data before sending it on to Redux's store. They check to see which action is coming in, and handle the input accordingly before sending it out again.
  The store is where Redux keeps the shared state data an app will be using. Information from it can be called from anywhere inside an application. (This is especially helpful in React.)

What is the difference between Application state and Component state? When would be a good time to use one over the other?
  Application state should contain data that is needed in more than one place within the app, and which applies to the app as a whole. Component state should contain data that is only relevant to the component that contains it (or possibly its children, if it's not too complicated a setup). A good example: an application uses a form to gather input and display it in an array on the screen. Data submitted through the form should be stored on the application level. However, if the current input on the form is bound to state (as a controlled component) that data can probably be stored at the component level.


Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  Redux-thunk lets us pass functions as actions instead of objects. Essentially, this means Redux with Redux-thunk can handle asynchronous code.