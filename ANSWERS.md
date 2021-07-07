- [ ] Why would you use class component over function components (removing hooks from the question)?
 		One reason of why we would use class components over functional components is class components are older and have been used more in development than functional components. So if we are working with an older codebase class components may be the standard. I also think class components are bit easier to manage and know what is exactly going on with your components using the lifecycle methods.

- [ ] Name three lifecycle methods and their purposes.
		componentDidMount, this method allows us to load additional material/data into the component. An axios calls, and/or loading localStorage, or adding event listeners are great to use in this method.

   		componentDidUpdate(prevProps, prevState), the purpose of this method is to be able to change state of an object that in the component. This state change usually occurs when the user fires an event or an axios call is made.

   		componentDidUnmount(), this method is for clean up purposes. If any event listeners were added to the component, they must be unregistered or there could create possible memory leaks.

- [ ] What is the purpose of a custom hook?
		custom hooks allow us to create a reusable hook that can be used by other components that need the same behavior.

- [ ] Why is it important to test our apps?
		It's important to test our applicaiton because unexpected behaviors could crop up in development and may never be found. Use casese could come up that we may not have thought about. Having a suite of tests can help cover most of the application and we can then add more those tests later. We must becareful as developers though to not gain tunnel vision when buiding unit tests. Having a top down approach (behavior driven development or an End to End testing) will help evade bugs and allow us to find bugs quicker.