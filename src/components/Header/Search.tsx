import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import Api from "../Api/Api.tsx";

export default function Search({ isSmallScreen }: { isSmallScreen: boolean; }) {
    const width = isSmallScreen ? "100%" : "auto";

    const api = Api();

    const handleSearch = async () => {
        try {
            api;
        } catch (error) {
            console.error(error);
        }
    };

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
            onClick={handleSearch}
        >
            <SearchIcon />
            {isSmallScreen ? "検索" : ""}
        </IconButton>
    );
}
