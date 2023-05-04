// Using import keyword to connect to and bring in CSS from app.css
import './App.css';
// Importing the Header component
import Header from './components/header/Header';
// Import Footer
import Footer from './components/footer/Footer';
// Import AboutMe
// import AboutMe from "./components/aboutMe/AboutMe";
// import Employees from './components/employeeInformation/Employees';
import PresidentVotes from './components/Presidents/PresidentVotes';

// This is a functional component: it is declared with the function keyword, the name of the function is the component name(App)
function App() {
  // Functional Components have a single return
  return (
    // JSX will only allow ONE JSX element to be returned(that element can contain child elements)
    <div className="App">
      {/* To use an imported component it gets called as a self closing tag */}
      <Header />
      <PresidentVotes />
      <Footer />
    </div>
  );
}

// This is how the functional components gets exported: export default component name (needs to match)
export default App;
