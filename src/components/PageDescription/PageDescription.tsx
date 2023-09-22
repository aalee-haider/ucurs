import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function PageDescription() {
  return (
    <Box
      sx={{
        paddingTop: "110px",
        paddingBottom: "40px",
        background:
          "linear-gradient(180deg, rgba(236, 92, 42, 0.10) 0%, rgba(236, 92, 42, 0) 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          component="span"
          style={{
            color: "#1F2937",
            fontSize: "64px",
            fontFamily: "Roboto",
            fontWeight: "700",
            lineHeight: "76.80px",
            wordWrap: "break-word",
          }}
        >
          Claim Your
        </Typography>
        <Typography
          component="span"
          style={{
            fontSize: "64px",
            fontFamily: "Roboto",
            fontWeight: "700",
            lineHeight: "76.80px",
            wordWrap: "break-word",
            paddingLeft: "10px",
          }}
          color="primary"
        >
          Referral Royalties
        </Typography>
      </Box>
      <Box
        sx={{
          color: "#4B5563",
          fontSize: "16px",
          fontFamily: "Roboto",
          fontWeight: "400",
          lineHeight: "19.20px",
          wordWrap: "break-word",
        }}
      >
        Empower your connections and enjoy the rewards. Grab your link and start
        claiming your share of success!
      </Box>
    </Box>
  );
}

export default PageDescription;
