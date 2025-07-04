import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from "../../../../components";

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
  return (
    <div className={className}>
      <Button disabled={page === 1} onClick={() => setPage(1)}>В начало</Button>
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Предыдущая</Button>
      <div className="current-page">Страница: {page}</div>
      <Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>Следующая</Button>
      <Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>В конец</Button>
    </div>
  )
};

export const Pagination = styled(PaginationContainer)`
margin: 40px 0 40px;
display: flex;
justify-content: center;
gap: 40px;

& .current-page {
  width: 100%;
  height: 32px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  border: 1px solid #000000;
}
`;

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
}