# ud-springboot3-spring6-react-vscode
Jay's proj repo for Springboot 3, Spring Framework 6, React Training (in vscode). List below ARE NOT NOTES. They are topics covered as of latest

proj: react-todoapp-demo

- updated AuthContext.js to use basic auth; generate token and send token to REST API 
- updated TodoDetails compo to call createTodo API (post), updateTodo API (put); added new Route for createTodo
- added formik validation and error handling/display
- added dep: formik, moment(date); displayed data in formik elements, defined handler in formik element instead of submit button
- created handlers/function for SpringBoot REST API for RetrieveTodo; new Component to display TodoDetails; declared useParams for (id) passed in thru router (useNavigate); displayed description 
- created handlers/function for SpringBoot REST API for deleteTodo; pass in variable to onClick to handler; added message field
- called SpringBoot REST API retrieveTodosByUser; displayed in listtodo component; added user to authcontext
- refactored; used functional type function call; used axios.create to create constant of baseURL
- refactored; moved api call to separate function in separate module
- display AxiomResponse values from REST API call, in Component
- call REST API from SpringBoot REST API app; add axios dep; create handler function
- implement Authentication on Routes
- moved login logic to AuthContext; modify login, logout and header compo
- refactored context; passed in context setter; display/hide URL based on state
- implemented context APIs, created AuthContext module; createContext(), AuthProvider, useContext() 
- refactored todoapp.jsx; moved components into their own module
- refined bootstrap use in Header, Footer; refined css
- added dep: bootstrap; used className container, table
- added Header, Footer, Logout components
- added date, boolean attributes, Date(), getFullYear(), getMonth(); used <Link> instead of <a> to access another compo via URL
- displayed js obj arr (todos) in table; .map(), 'key' attrib
- passed variable through Router; useParams hook
- added error routing for invalid endpoint
- added routing; dep: react-router-dom; BrowserRoutes, Routes, Route, useNavigate hook
- added basic authentication, conditional element display in return block using {} and &&
- started todo app components; login form, backed form fields with state, Event handler function, event listener
- refactored removed state from child component; moved all function definitions in parent component
- moved child component to external module
- added parent component to demo global variable, function, accessed in child component
- added Properties/props, constraints using propTypes(import from prop-types'), default properties (defaultProps)
- added increment, decrement, reset
- added state to compo; useState hook
- started counter app; create jsx, define return block, component function, css; cleaned-up folders
- create dynamic obj, const, var, var obj, array, arrow function in obj, map
- moved components to own module; differentiate default/non default component(import)
- connect local branch master to remote master
- explored react app structure; components; created function, class components
- ran: npx create-react-app react-todoapp-demo, npm install -g create-react-app

proj:testproject

- used npx package executer
- created testproject in vscode; initialized via npm and added dependency via npm, install, init
- setup vscode workspace and new gh repo; installed Node.js (20.11.1), NPM (10.2.4)