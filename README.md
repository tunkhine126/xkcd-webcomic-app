## New Story Charity: Code Challenge!
This app will use the XKCD API to display a web comic. The goal is to always have a finished product ready to be improved upon with new features.

This web application uses the XKCD API to build two distinct features.

- It displays the latest comic from XKCD on the home page. 

- It also has a "Latest" search page where a user can search for a specific XKCD comic and display it. 

## Frameworks
 Front end - [React](https://reactjs.org)
 
 Styling - [Bootstrap](https://react-bootstrap.github.io/) and custom CSS

## The process and challenges
For this challenge, I tried to be diligent with coding best practices. Usually I would follow a TDD best practices but I had an issue with implementing Cypress off the bat. I believe it was due to particular packages that were missing from the cloned build. Never the less I moved of. 

I practiced the mantra of "Commit early, commit often". This allowed me to work feature by feature. 
After reading the readme a few times to really digest what was being asked of me, I jotted a few notes down and drew out my simple tree to stay on track. 

I started with the simply adding react router and bootstrap dependencies. Next I focused on getting the basic routing working, with "/" and "/search". This also required me to create my first two components, `Home` and `Search` respectively. 

Afterwards I implemented a basic Bootstrap NavBar and got the `href` routes working to display my respective components. 

Once completed, I went on to get my fetch working in the `Home` component. I initally tested the API using one of my favorite tools, Postman! After having a good idea of what type of `JSON` would be returned. I created my initial state and fetch. Once I `console.log`d the results I worked on displaying the image. At this point I noticed there was no `.css` file. I went on to create that and import it in `index.js`.

After I knew the basic Home component was working, I moved onto the Search component. My goal was to get a simple form rendered, create a `userSearched` state, create an `onSubmit` function, and finally simply display image 303. 

At this step, I had reached basic MVP. My next task took me back to the `Home` page to render a few more elements returned from the `JSON`. Once I got those working I went on to implement the same in the `Search` page. 

I felt like I was on a roll at this point. I pondered on how I could get the app a bit more buttoned up. This led me to creating validations in the form. The way I implemented this was to edit my `fetchSearch` function. I implemented validations around making sure the user input was first a number and then making sure that number was between 1 - 2221(the latest comic). If these conditions were not met an alert would be presented to the user asking them to kindly make sure the parameters were met. 

Finally I worked on a few personal styling touches that are subtle but I felt added to my own personal touch. 

## Additions and future learning
- Separate functions into a services file in an effort to keep components as simple as possible

## Acknowledgements 
I'm appreciative of the Engineering team at New Story Charity for allowing me the opportunity to showcase some of my knowledge acquired at Flatiron School. Additionally, big big thanks to my Wife for her support and encouragement. 
