import { Link, TextField, Button, Autocomplete } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
    const isSmallScreen = window.innerWidth <= 800;

    const languages = [
        { label: "C" },
        { label: "C++" },
        { label: "Java" },
        { label: "Python" },
        { label: "Go" },
        { label: "Rust" },
        { label: "JavaScript" },
    ];

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
                            sx={{ textDecoration: "none", color: "white", mr: 1 }}
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

                    {/* 言語選択 */}
                    <Autocomplete
                        disablePortal
                        id="SearchLanguage"
                        size="small"
                        options={languages}
                        sx={{
                            width: 200,
                            backgroundColor: "white",
                            borderRadius: "5px",
                            mr: 1,
                        }}
                        renderInput={(params) => <TextField {...params} label="Language" />}
                    />

                    {/* 検索バー */}
                    <TextField
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "5px",
                            width: 350
                        }}
                        id="search"
                        label="Function"
                        variant="outlined"
                        size="small"
                    />
                    <Button
                        sx={{
                            color: "white",
                            variant: "outlined",
                            borderRadius: "5px",
                            border: "1px solid white",
                            margin: "0 0.5rem",
                            padding: "0.5rem 1rem",
                        }}
                        size="large"
                        // TODO: アイコンが少し左にずれている
                        startIcon={<SearchIcon />}
                    >
                    </Button>
                </Toolbar>
            </Box>
        </>
    );
}
