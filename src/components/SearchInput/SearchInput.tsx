import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
function SearchInput() {
  return (
    <Box>
      <TextField
        label="Search"
        variant="outlined"
        color="primary"
        sx={{ borderRadius: "8px", width: "490px" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default SearchInput;
