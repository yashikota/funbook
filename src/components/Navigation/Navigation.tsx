import { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function Navigation() {
    const [value, setValue] = useState(0);

    return (
        <Box sx={{ width: "auto", position: "fixed", bottom: 0, left: 0, right: 0, flexGrow: 1 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{ backgroundColor: "#424242" }}
            >
                <BottomNavigationAction
                    label="Ranking"
                    icon={<TrendingUpIcon />}
                    sx={{
                        color: "#fff",
                        "&.Mui-selected": { color: "#90caf9" }
                    }}
                />
                <BottomNavigationAction
                    label="Search"
                    icon={<SearchIcon />}
                    sx={{
                        color: "#fff",
                        "&.Mui-selected": { color: "#90caf9" }
                    }}
                />
                <BottomNavigationAction
                    label="Bookmark"
                    icon={<BookmarkIcon />}
                    sx={{
                        color: "#fff",
                        "&.Mui-selected": { color: "#90caf9" }
                    }}
                />
            </BottomNavigation>
        </Box>
    );
}
