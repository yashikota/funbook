import { SetStateAction, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton, InputAdornment, TextField } from "@mui/material";

export default function Function({ isSmallScreen }: { isSmallScreen: boolean; }) {
    const [searchValue, setSearchValue] = useState("");

    const handleClear = () => {
        setSearchValue("");
    };

    const handleSearchValueChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchValue(event.target.value);
    };

    const width = isSmallScreen ? "100%" : "350px";

    return (
        <TextField
            sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                width: width,
                mr: isSmallScreen ? 0 : 1,
                mb: isSmallScreen ? 1 : 0,
            }}
            id="search"
            label={searchValue ? " " : "Function Name"}
            InputLabelProps={{ shrink: false }}
            variant="outlined"
            size="small"
            value={searchValue}
            onChange={handleSearchValueChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        {searchValue && (
                            <IconButton size="small" onClick={handleClear}>
                                <ClearIcon />
                            </IconButton>
                        )}
                    </InputAdornment>
                ),
            }}
        />
    );
}
