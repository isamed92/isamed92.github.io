import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { BlogScreen } from '../blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/blog',
    element: <BlogScreen />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
