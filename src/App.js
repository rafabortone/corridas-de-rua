import Home from "./pages/home";
import AppContextProvider from './context/AppContext'

function App() {
  
  return (
    <main data-testid="main">
      <AppContextProvider>
        <Home />
      </AppContextProvider>
        
    </main>
  );
}

export default App;
