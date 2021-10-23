import Navbar from "./Navbar"

function Layout({children}) {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    )
}

export default Layout
