# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    A stateful component holds state. A functional component may consume/display state through props. 

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    I don't think we're supposed to use these anymore....
    componentDidMount is called after a componenet is rendered to the dom. componentDidUpdate is called after state is updated and component is rerendered to the dom

3. Define stateful logic.
    logic that manipulates state

4. What are the three step of creating a successful test? What is done in each phase?
 Arrange - render component
 Act - find and manipulate data on the page
 Assert - test the desired behavior from your actions 