React Server Side Rendering Example
==============================================
Why should we do Server Side Rendering?
-----------------------------------------------
## 1. What happens when we use Client Side Rendering?
(1) Client makes request to server.

(2) Server responds with 

    a. a mostly blank html file
    
    b. a bundled .js file containing the application code

(3) Files fully loaded => components rendered

(4) Optional - Asynchronous Data Fetching 

(5) User can view loaded data and interat with the application

## 2. What happens when we use Server Side Rendering?
(1) Client makes request to server

(2) Server renders components into .html and responds with:

    a. An .html file containing rendered components and initial stored state
    
    b. A bundled .js file containing the application code
    
(3) Page content is visible as html loads

    a. No waiting for bundle.js to display content
    
(4) Page becomes interactive when bundle.js loads/runs


## 3. Pros/Cons

Advantages:

    Search Engine Optimization (SEO)
    
    Page content is visible more quickly for the first load
    
Disvantages:

    Increased application complexity: the server can only render the components once
    
    => servr must execute asynchronous data fetching before calling renderToString, which will complicate the structure
    
    Increased Server Load: For some versions of ReactJS, renderToString() is synchronous, not friendly for NodeJS

