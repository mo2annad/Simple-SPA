import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import './App.css';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/page2", element: <Page2 /> }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
