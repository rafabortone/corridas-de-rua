import Header from "./components/header";
import AppContextProvider from './context/AppContext'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <main data-testid="main">
      <AppContextProvider>
        <Router>
          <Header />
          <Routes />
        </Router>
      </AppContextProvider>
    </main>
  );
}

export default App;
