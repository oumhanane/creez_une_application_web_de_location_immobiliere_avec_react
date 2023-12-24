import { createBrowserRouter, Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Homepage from '../pages/Homepage.jsx'
import ApartmentPage from '../pages/ApartmentPage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import Page404 from '../pages/Page404.jsx'

export const Layout = () => {
    return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
    )
}

const routes = [
    {
        element: <Layout />,
        errorElement: < Page404 />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/Apartments",   
                element: <ApartmentPage />
            },
            {
                path: "/About",
                element: < AboutPage />
            }
        ]   
    }
]
export const Router = createBrowserRouter(routes)

