import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import Api from "../Api/Api.tsx";

export default function Search({ isSmallScreen }: { isSmallScreen: boolean; }) {
    const width = isSmallScreen ? "100%" : "auto";

    const [data, setData] = useState<any>(null);

    const handleSearch = () => {
        Api().then((data) => {
            setData(data);
            console.log(data);
        });
    }

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
