import { createBrowserRouter, Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
// import Banner from '../components/Banner.jsx'
import Homepage from '../pages/Homepage.jsx'
import ApartmentPage from '../pages/ApartmentPage.jsx'
import AboutPage from '../pages/AboutPage.jsx'


export const Layout = () => {
    return (
    <>
        <Header />
        {/* <Banner /> */}
        <Outlet />
        <Footer />
    </>
    )
}

const routes = [
    {
        element: <Layout />,
        errorElement: <h1>404 not found</h1>,
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

