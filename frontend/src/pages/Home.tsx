import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container p-5">
        <div className="jumbotron">
          <h1 className="display-4">Dashboard de Vendas - SDS#4</h1>
          <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
          <hr />
          <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back-end construído com Spring Boot.</p>
          <Link className="btn btn-danger btn-lg my-3" to='/dashboard'>Ir para o Dashboard</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}