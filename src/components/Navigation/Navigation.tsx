import { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function Navigation() {
    const [value, setValue] = useState(1);

    return (
        <Box sx={{ width: "auto", position: "fixed", bottom: 0, left: 0, right: 0, flexGrow: 1 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(_, newValue) => {
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
                    onClick={() => window.location.href = "/ranking"}
                />
                <BottomNavigationAction
                    label="Home"
                    icon={<HomeIcon />}
                    sx={{
                        color: "#fff",
                        "&.Mui-selected": { color: "#90caf9" }
                    }}
                    onClick={() => window.location.href = "/"}
                />
                <BottomNavigationAction
                    label="Bookmark"
                    icon={<BookmarkIcon />}
                    sx={{
                        color: "#fff",
                        "&.Mui-selected": { color: "#90caf9" }
                    }}
                    onClick={() => window.location.href = "/bookmarks"}
                />
            </BottomNavigation>
        </Box>
    );
}
