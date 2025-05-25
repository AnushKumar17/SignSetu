import { WordProvider } from './context/WordContext';
import Home from './components/Home';
import CreateWord from './components/CreateWord';

function App() {
  return (
    <WordProvider>
      <div className="m-8 mx-auto w-[80%]">
        <h1 className="text-6xl font-bold text-center my-4 p-4">📖 Dictionary App</h1>
        <hr></hr>
        <CreateWord />
        <Home />
      </div>
    </WordProvider>
  );
}

export default App;
