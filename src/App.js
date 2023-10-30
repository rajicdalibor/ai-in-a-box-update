import Layout from "./components/Layout";
import ReactGA from "react-ga4";

function App() {
    ReactGA.initialize("G-FEVJ710W9C");

    return (
        <div>
          <Layout/>
        </div>
  );
}

export default App;
