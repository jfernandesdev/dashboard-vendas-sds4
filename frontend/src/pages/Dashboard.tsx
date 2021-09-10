import Navbar from 'components/Navbar';
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutChart';
import DataTable from 'components/DataTable';
import Footer from 'components/Footer';

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-md-6 col-12">
            <h5 className="text-center text-secondary mb-4">Taxa de Sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-md-6 col-12">
            <h5 className="text-center text-secondary mb-4">Todas as vendas</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas as vendas</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}