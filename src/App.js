import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './components/Home';
import About from './components/About';
import Faq from './components/Faq';
import Contact from './components/Contact';
// layouts
import RootLayout from './layouts/RootLayout';
import Help from './layouts/HelpLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />} >
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App