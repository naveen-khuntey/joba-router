import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom';

// pages
import Home from './components/Home';
import About from './components/About';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Error from './components/ErrorPage';
import Careers, { CareersLoader } from './components/Career';
// layouts
import RootLayout from './layouts/RootLayout';
import Help from './layouts/HelpLayout';
import CareerLayout from "./layouts/CareerLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />} >
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='careers' element={<CareerLayout />}>
        <Route index element={<Careers />} loader={CareersLoader} />
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App