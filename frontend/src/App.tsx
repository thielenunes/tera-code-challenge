import { Routes } from './route';
import { GlobalContextProvider } from './context';

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Routes />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
