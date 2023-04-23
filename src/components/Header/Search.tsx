import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

export default function Search({ isSmallScreen }: { isSmallScreen: boolean; }) {
    const width = isSmallScreen ? "100%" : "auto";

    return (
        <IconButton
            sx={{
                color: "white",
                variant: "outlined",
                border: "1px solid white",
                borderRadius: "5px",
                width: width,
            }}
            aria-label="search"
        >
            <SearchIcon />
            {isSmallScreen ? "検索" : ""}
        </IconButton>
    );
}
