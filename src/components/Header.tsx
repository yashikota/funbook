import { SetStateAction, useState } from "react";
import { Link, TextField, Autocomplete, Box, AppBar, Toolbar, Typography, Collapse, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

export const Header = () => {
    const isSmallScreen = window.innerWidth <= 830;

    const [searchValue, setSearchValue] = useState("");

    const handleClear = () => {
        setSearchValue("");
    };

    const handleSearchValueChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchValue(event.target.value);
    };

    const languages = [
        { label: "C" },
        { label: "C++" },
        { label: "Java" },
        { label: "Python" },
        { label: "Go" },
        { label: "Rust" },
        { label: "JavaScript" },
    ];

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <>
            <Box>
                <AppBar position="static">
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

                        {/* 検索ボタン */}
                        {isSmallScreen ? (
                            // 端末のサイズが小さい場合
                            <IconButton
                                onClick={handleClick}
                                aria-label="menu"
                                sx={{
                                    color: "white",
                                    variant: "outlined",
                                    border: "1px solid white",
                                    borderRadius: "5px",
                                    ml: 1,
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            // 端末サイズが大きい場合
                            <>
                                {/* 言語選択 */}
                                < Autocomplete
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

                                <IconButton
                                    sx={{
                                        color: "white",
                                        variant: "outlined",
                                        border: "1px solid white",
                                        borderRadius: "5px",
                                        ml: 1,
                                    }}
                                    aria-label="search"
                                >
                                    <SearchIcon />
                                </IconButton>
                            </>
                        )}
                    </Toolbar>
                </AppBar>

                <Collapse in={open}>
                    <Box sx={{ p: 2, backgroundColor: "#424242" }}>
                        <>
                            {/* 言語選択 */}
                            < Autocomplete
                                disablePortal
                                id="SearchLanguage"
                                size="small"
                                options={languages}
                                sx={{
                                    width: "100%",
                                    backgroundColor: "white",
                                    borderRadius: "5px",
                                    mb: 1,
                                }}
                                renderInput={(params) => <TextField {...params} label="Language" />}
                            />

                            {/* 検索バー */}
                            <TextField
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: "5px",
                                    width: "100%",
                                    mb: 1,
                                }}
                                id="search"
                                label="Function"
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

                            <IconButton
                                sx={{
                                    color: "white",
                                    variant: "outlined",
                                    border: "1px solid white",
                                    borderRadius: "5px",
                                    width: "100%"
                                }}
                                aria-label="search"
                            >
                                <SearchIcon /> 検索
                            </IconButton>
                        </>
                    </Box>
                </Collapse>

            </Box>
        </>
    );
}
