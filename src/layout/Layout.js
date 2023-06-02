import Header from "../components/templet/Header";


const Layout = ({children}) => {
    return ( 
        <div>
            <Header />
            {children}
        </div>
     );
}
 
export default Layout;