- [ ] Why would you use class component over function components (removing hooks from the question)?

Most likely the only way you would use class components over function components is if you're working with legacy code or if the team you're working with is more comfortable with class components. Class components used to be able to give developers more control over component management with lifecycle methods, but since hooks came out function components can do everything that class components can do.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount() - fires as soon as a component is mounted. Great place to do things like making an API call (so that the user doesn't have to wait for the API call to resolve before they see something in the UI).

componentDidUpdate() - fires after a component updates (but not after the first render). If there's anything you need to do when state or props update, you'd write the logic for it here.

componentWillUnmount() - fires before a component is destroyed. If you had any event listeners or counters, this lifecycle method is where you would clean them up to ensure they dont stick around and eat up computer memory after the component is gone.

- [ ] What is the purpose of a custom hook?

Custom hooks allow us to remove stateful logic from a component, meaning that the component can focus on one job - displaying something to the UI. Having stateful logic in a hook also makes it easy to share code between components, which translates to less code to write and rewrite for the developers. 

- [ ] Why is it important to test our apps?

We test our apps to increase confidence in our code - its stability, reliability, and that it does what it's supposed to do even in edge cases. It helps us to surface bugs faster and acts as a safety net when making changes to our code.