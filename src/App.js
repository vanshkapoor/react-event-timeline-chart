import './App.css';
import {VerticalTimeline} from './lib/index';
import {data} from "./lib/sampledata/data"

function App() {
  return (
    <div className="App">
      <VerticalTimeline data={data[0]}/>
    </div>
  );
}

export default App;
