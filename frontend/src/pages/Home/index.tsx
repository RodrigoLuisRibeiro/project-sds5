import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <br/>
                    <h1 className="display-4">DSVendas</h1>
                    <hr />
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <br/>
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                   <br/>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Acessar o dashboard
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;