import Menu from "../components/Menu";
import Header from "../components/Header";
import './Dashboard.css'

const Dashboard = () => {


    return (
        <>
            <header className="header-container">
                <Header/>
            </header>
            <body>
                <Menu />
                <h1>Dashboard</h1>
                <hr />
            </body>
        </>
    )
}

export default Dashboard;