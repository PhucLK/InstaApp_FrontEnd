import Routing from 'routes'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routing />
      <Outlet />
    </div>
  );
}

export default App;
