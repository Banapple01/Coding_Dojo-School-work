import './App.css';
import Tabs from './components/tabs';
import { useState } from 'react';

function App() {
  const [tabs, setTabs] = useState([
    {
      title: "Tab 1",
      content: "Tab 1 Content"
    },
    {
      title: "Tab 2",
      content: "Tab 2 Content"
    },
    {
      title: "Tab 3",
      content: "Tab 3 Content"
    }
  ])
  return (
    <div className="container">
      <Tabs tabs={tabs}/>
    </div>
  );
}

export default App;
