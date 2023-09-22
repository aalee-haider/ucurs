import React from "react";
import TestHeader from "../components/TestHeader/TestHeader";
import TestFooter from "../components/TestFooter/TestFooter";
import Box from "@mui/material/Box";

function HeaderFooterTemp({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <TestHeader />

      <Box>{children}</Box>
      <TestFooter />
    </Box>
  );
}

export default HeaderFooterTemp;
