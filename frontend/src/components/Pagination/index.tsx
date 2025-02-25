import { SalePage } from "types/sale";

type PaginationProps = {
  page: SalePage;
  onPageChange: Function;
}

const Pagination = ({ page, onPageChange }: PaginationProps) => {
  return (
    <div className="row d-flex justify-content-center">
      <nav className="d-flex justify-content-end">
        <ul className="pagination">
          <li className={`page-item ${page.first ? 'disabled' : ''} `}>
            <button className="page-link" onClick={() => onPageChange(page.number - 1)}>Anterior</button>
          </li>

          <li className="page-item disabled">
            <span className="page-link">{page.number + 1}</span>
          </li>

          <li className={`page-item ${page.last ? 'disabled' : ''} `}>
            <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
          </li>

        </ul>
      </nav>
    </div >
  );
}

export default Pagination;