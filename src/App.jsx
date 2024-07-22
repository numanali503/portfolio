import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './components/hero/Hero';
import AppLayout from './components/ui/AppLayout';
import About from './components/about/About';
import Sevices from './components/services/Sevices';
import Projects from './components/projects/Projects';
import ContactUs from './components/contact/ContactUs';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Hero />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/services',
        element: <Sevices />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <ContactUs />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
