import ImgDsDark from 'assets/img/ds-dark.svg'

export default function Navbar() {
  return (
    <div className="d-flex d-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light shadow-sm">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          <img src={ImgDsDark} alt="Logo DevSuperior" width="180" />
        </nav>
      </div>
    </div>
  );
}