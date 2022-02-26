import Routing from 'routes'
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Routing/>
      <Outlet />

    </div>
  );
}

export default App;
