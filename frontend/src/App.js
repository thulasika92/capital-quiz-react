
import './App.css';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">
           Capital Quiz
        </h1>
        <Quiz/>
      </div>
    </div>
  );
}

export default App;
