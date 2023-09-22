import PaginationComponent from "../PaginationComponent/PaginationComponent";
import SearchInput from "../SearchInput/SearchInput";
import {
  Typography,
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { useState } from "react";
type DataStoreProps = {
  data: Array<{
    id: number;
    logo: string;
    name: string;
    subscription: string;
    link: string;
    date: string;
    amount: string | number;
  }>;
};

function DataStore({ data }: DataStoreProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Adjust this to your desired number of items per page
  const totalItems = data.length; /* Total number of items in your data */
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // You can fetch and display the data for the new page here
  };
  const tableCellContentStyle = {
    maxWidth: "147px",
    maxHeight: "38px",
    overflow: "hidden",
    color: "#4B5563",
    fontSize: "16px",
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: "19.20px",
    wordWrap: "break-word",
    paddingBottom: "24px",
    paddingTop: "24px",
    paddingLeft: "16px",
    paddingRight: "16px",
  };

  const headerNames = [
    "Shop log",
    "Name",
    "Subscription",
    "Referral link",
    "Date",
    "Amount",
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "110px",
      }}
    >
      <Box sx={{ marginBottom: "24px" }}>
        <SearchInput />
      </Box>

      <TableContainer
        sx={{
          border: "1px solid #E5E7EB",
          maxWidth: 887,
          borderRadius: "12px",
        }}
      >
        <Table size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
              {headerNames.map((name) => (
                <TableCell
                  sx={{
                    width: "147px",
                    padding: "16px",
                    color: "#1F2937",
                    fontSize: "16px",
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    lineHeight: "19.20px",
                    wordWrap: "break-word",
                  }}
                >
                  {name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  maxHeight: "38px",
                }}
              >
                <TableCell sx={tableCellContentStyle}>
                  <img src={`./images/${row.logo}.png`} alt="Shop Logo" />
                </TableCell>

                <TableCell sx={tableCellContentStyle}>{row.name}</TableCell>
                <TableCell sx={tableCellContentStyle}>
                  <Chip
                    label={row.subscription}
                    color={
                      row.subscription === "Pending"
                        ? "info"
                        : row.subscription === "Subscribed"
                        ? "success"
                        : "default"
                    }
                  >
                    {row.subscription}
                  </Chip>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      maxWidth: "110px",
                      alignSelf: "stretch",
                      maxHeight: "20px",
                      overflow: "hidden",
                      fontSize: "16px",
                      fontFamily: "Roboto",
                      fontWeight: 400,
                      lineHeight: "19.20px",
                      wordWrap: "break-word",
                      paddingBottom: "24px",
                      paddingTop: "24px",
                      paddingLeft: "16px",
                      paddingRight: "16px",
                    }}
                    color="primary"
                  >
                    {row.link}
                  </Typography>
                </TableCell>
                <TableCell sx={tableCellContentStyle}>{row.date}</TableCell>
                <TableCell sx={tableCellContentStyle}>{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          marginTop: "32px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PaginationComponent
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}
export default DataStore;
