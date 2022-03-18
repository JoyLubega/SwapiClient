import "./App.css";
import People from "./components/People";
// import Person from "./components/Person";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, useRoutes,} from "react-router-dom";

const client = new ApolloClient({
  uri: "https://serverswapi.herokuapp.com/",
  cache: new InMemoryCache(),
});


const Links = () => {
  let routes = useRoutes([
    { path: "/", element: <People /> },
    // { path: "component2", element: <Component2 /> },
    // ...
  ]);
  return routes;
};
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Links/>
      </Router>
    </ApolloProvider>
  );
}

export default App;