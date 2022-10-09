import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NaveSection from "./Components/NaveSection/NaveSection";
import Home from "./Components/Home/Home";
import Review from './Components/Review/Review'
import About from './Components/About/About'
import Login from "./Components/Login/Login";
import { productsAndCart } from "./Components/ProductsAndCart";


function App() {
  const router = createBrowserRouter([
    {path:'/', element: <NaveSection/>, children: [
      {path:'/', element: <Home/>,
      loader: productsAndCart,
    },
      {path:'home', element: <Home/>,
        loader: productsAndCart,
     // loader: () => fetch('books.json')
      },
      {path:'review',
      loader: productsAndCart,
       element: <Review/>},
      {path:'about', element: <About/>},
      {path:'login', element: <Login/>},
    ]}
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
