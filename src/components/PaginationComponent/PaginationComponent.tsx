import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";

type PaginationComponentProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

function PaginationComponent({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationComponentProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    onPageChange(page);
    event;
  };

  return (
    <Box>
      <Pagination
        shape="rounded"
        size="large"
        color="primary"
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
      />
    </Box>
  );
}

export default PaginationComponent;
