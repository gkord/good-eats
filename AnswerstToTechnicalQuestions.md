1. How long did you spend on the coding assignment? What would you add to your solution if you had more time?

In total I put around 8 hours into the assignment. I figured it would take some time scaffolding out the Redux components and I also chose to use styled components as opposed to a single CSS stylesheet. I probably could have saved some time by bootstrapping with something like the recently updated Redux Toolkit but I wanted to approximate more closely what I think a production implementation of Redux would look like.

I would have liked to have dove deeper into the API to see if I could receive more results and create some pagination to display more. I would have also liked to spend more time tightening up the styling. Lastly I was unable to implement tests. I am able to do testing in React, but was not able to keep it in scope for this assignment

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

I think a useful feature that was added in recently in JavaScript is Module Namespace Exports. I really like the efficient way it shortens exports. I've not used it in this particular application however in a previous production application I was able to employ it like so:

```
// previous module exports
import * as module1 from './module1.js'
import * as module2 from './module2.js'
import * as module3 from './module3.js'

export { module1, module2, module3  }

// with module namespace exports
export * from './module1.js'
export * from './module2.js'
export * from './module3.js'
```

3. How would you track down a performance issue in production? Have you ever had to do this?

I'm often keeping track of performance as I develop and looking out for inefficiencies such as extra dependencies, multiple unnecessary renders and extraneous code that slows down performance. Aside from developing with this mindset using things like webpack or rollup can help minify code and make it more efficient and I had to use both in production.

4. How would you improve the API that you just used?

It's not my favourite API for a few reasons outside of development (largely due to the information being out of date and formerly working in the hospitality industry, but I digress). Back on topic, the images are empty, but I chose to use the placeholders that were there as they made for a better UI. Also it would be cool if the results included ratings of restaurants, perhaps in conjunction with Google ratings. Currently it seems like it returns restaurants in order of price whihc is not really indicative of any sort of rating. Also the total results are paginated to the first 25 results so when the filtering is applied, it's not filtering through all results from the API call.

5. Please describe yourself using JSON.
```
{
"firstName": "Gabe",
"lastname": "Kugelmass",
"age": "Just a number :P",
"birthCity": "Toronto",

"skills": [
"HTML",
"CSS",
"JavaScript",
"React",
"Responsive Web Development",
"Web Accessibility"
],

"interests": [
"Guitar",
"Live Music",
"Sports",
"Lutherie"
],
}
```
