
import './App.css';
import qr from './assets/images/image-qr-code.png';

function App() {
  return (
    <div className="App">
      <card className="card">
        <img src={qr}/>
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </card>
    </div>
  );
}

export default App;
