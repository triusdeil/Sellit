import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Private from "../layout/PrivatedLayout";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'dashboard',
        element: <Private />,
        children: [
          {
            index: true,
            element: <Dashboard />
          }
        ]
      }
    ]
  }
])