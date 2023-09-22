import Box from "@mui/material/Box";
import PageDescription from "../components/PageDescription/PageDescription";
import HeaderFooterTemp from "../templates/HeaderFooterTemp";
import DataStore from "../components/ReferralTable/ReferralTable";
import WithdrawBalance from "../components/WithdrawBalance/WithdrawBalance";
function Page() {
  const data = [
    // Sample data as an array of objects
    {
      id: 1,
      logo: "shop-logo",
      name: "pkstore",
      subscription: "Pending",
      link: "http://NewYorssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssk.com",
      date: "11-10-23",
      amount: "50,000",
    },
    {
      id: 2,
      logo: "shop-logo",
      name: "pkstore",
      subscription: "Pending",
      link: "http://NewYork.com",
      date: "11-10-23",
      amount: "50,000",
    },
    {
      id: 3,
      logo: "shop-logo",
      name: "pkstore",
      subscription: "Subscribed",
      link: "http://NewYork.com",
      date: "11-10-23",
      amount: "50,000",
    },
    {
      id: 4,
      logo: "shop-logo",
      name: "pkstore",
      subscription: "Pending",
      link: "http://NewYork.com",
      date: "11-10-23",
      amount: 50000,
    },
    {
      id: 5,
      logo: "shop-logo",
      name: "pkstore",
      subscription: "Pending",
      link: "http://NewYork.com",
      date: "11-10-23",
      amount: 50000,
    },
    {
      id: 6,
      logo: "shop-logo",
      name: "pkstore",
      subscription: "Pending",
      link: "http://NewYork.com",
      date: "11-10-23",
      amount: 50000,
    },
    {
      id: 7,
      logo: "shop-logo",
      name: "pkstore",
      subscription: "Pending",
      link: "http://NewYork.com",
      date: "11-10-23",
      amount: 50000,
    },
    {
      id: 8,
      logo: "shop-logo",
      name: "pkstore",
      subscription: "Pending",
      link: "http://NewYork.com",
      date: "11-10-23",
      amount: 50000,
    },
  ];
  return (
    <Box>
      <HeaderFooterTemp>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <PageDescription />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              marginTop: "68px",
            }}
          >
            <DataStore data={data} />
            <WithdrawBalance balance={20000} />
          </Box>
        </Box>
      </HeaderFooterTemp>
    </Box>
  );
}

export default Page;
