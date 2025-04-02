import { BrowserRouter, Route, Routes } from "react-router"
import WelcomePage from "./pages/WelcomePage"
import Login from "./pages/Login"
import PrivateDashboard from "./pages/PrivateDashboard"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { ToastContainer } from "react-toastify"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ProtectedRoutes from "./features/guard/ProtectedRoutes"

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={
            <ProtectedRoutes>
              <PrivateDashboard />
            </ProtectedRoutes>}>
              <Route index element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </Provider>
    </QueryClientProvider>
  )
}

export default App
