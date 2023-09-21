import Header from "../../components/Header/index.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer/index.jsx";

const Layout = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
export default Layout;