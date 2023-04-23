import { Link, TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
    return (
        <>
            <Box>
                <Toolbar
                    sx={{
                        minHeight: 64,
                        backgroundColor: "#424242",
                    }}>

                    {/* ロゴ */}
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ flexGrow: 1 }}>
                        <Link
                            sx={{ textDecoration: "none", color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://funbook.pages.dev">
                            <img
                                src="https://1.bp.blogspot.com/-BYOigKcBTGY/VkxLkKfHwWI/AAAAAAAA0n0/7Mb5mGxI6L8/s800/dictionary.png"
                                alt="logo"
                                width="32"
                                height="32"
                                style={{ verticalAlign: "middle" }}
                            />
                            &nbsp;FunBook
                        </Link>
                    </Typography>

                    {/* 検索バー */}
                    <TextField
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "5px",
                            width: "13vw",
                        }}
                        id="search"
                        variant="outlined"
                        size="small"
                    />
                    <Button
                        sx={{
                            color: "white",
                            borderRadius: "5px",
                            ml: 1,
                            width: "2vw",
                            display: "inline-block",
                            minHeight: 0,
                            minWidth: 0,
                        }}
                        size="large"
                        startIcon={<SearchIcon />}
                        style={{ height: "2.3rem" }}
                    >
                    </Button>
                </Toolbar>
            </Box>
        </>
    );
}
