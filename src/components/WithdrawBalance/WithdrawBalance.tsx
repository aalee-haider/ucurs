import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

type BalanceProps = {
  balance: number;
};

function WithdrawBalance({ balance }: BalanceProps) {
  return (
    <Box
      sx={{
        display: "flex",
        FlexDirection: "column",
        width: "266px",
        height: "100%",
        padding: "24px",
        background: "#F9FAFB",
        borderRadius: "12px",
        border: "1px #E5E7EB solid",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        marginTop: "80px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            width: "100%",
            textAlign: "center",
            color: "#1F2937",
            fontSize: "24px",
            fontFamily: "Roboto",
            fontWeight: "700",
            lineHeight: "28.80px",
            wordWrap: "break-word",
          }}
        >
          Avalible Balance
        </span>
        <span
          style={{
            width: "100%",
            marginTop: "8px",
            textAlign: "center",
            color: "#4B5563",
            fontSize: "16px",
            fontFamily: "Roboto",
            fontWeight: "400",
            lineHeight: "24px",
            wordWrap: "break-word",
          }}
        >
          Withdraw your balance today and start making the most of your
          earnings.
        </span>
      </Box>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          color: "#1F2937",
          fontSize: "36px",
          fontFamily: "Roboto",
          fontWeight: "700",
          lineHeight: "43.20px",
          wordWrap: "break-word",
        }}
      >
        {balance} PKR
      </Box>
      <Box sx={{ width: "100%" }}>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          sx={{ borderRadius: "8px" }}
        >
          Withdraw
        </Button>
      </Box>
    </Box>
  );
}

export default WithdrawBalance;
