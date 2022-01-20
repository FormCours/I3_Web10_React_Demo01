import './App.css';
import Message from './components/message/message';
import Welcome from './components/welcome/welcome';

function App() {
  return (
    <div className="App">
      <Welcome name="Zaza" />

      <Message author="Riri"
               content="Hello!" />

      <Message author="Della"
               content="Test" />

      <Message content="Bonjour"  />
    </div>
  );
}

export default App;
