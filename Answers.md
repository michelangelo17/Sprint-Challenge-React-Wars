# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a UI library that gives us a variety of tools in the form of functions and classes to quickly build out component based user interfaces. 

2. What does it mean to think in react?

To think in terms of breaking apart a UI into reusable components or pieces. To do this you first start with your expected data, break it down into boxes, use these boxes to give you your heierachy and then build out an application where the topmost box is the App component and the components within that are the indivdual boxes you drew out on your screen, who in turn could contain smaller components.

3. Describe state.

State is a way of keeping track of what our data currently is on our application. You can use this information to display differnet things on the page as the data changes. For instance, you could click a next button, which could change the state of a variable called pageNumber which would then mean the variable on the API call would also change. Although to make this work you'd also need useEffect as I discuss below. 

4. Describe props.

Props are properties that we can use to set HTML properties, or pass arguments through them to sub elements using a little jsx magic. The main way we have used them thus far is to share data between parent and child components.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are when a change in one component prompts a change in another, such as the example I described above with the API call and the useEffect hook. When the state of the pageNumber changes, useEffect will notice that change and rerun the API call with the new value. This allows you to update the data displayed on the page with the new data from the API call. (Didn't get around to the pagination stretch, but I know how to do it since it's essentially the same as the PotD changing I did earlier this week.)
