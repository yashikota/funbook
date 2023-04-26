import { Checkbox, FormControl, IconButton, InputAdornment, ListItemText, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { Autocomplete, TextField, Box } from "@mui/material";
import { SetStateAction, useRef, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const Languages = () => {
    return [
        { label: "C" },
        { label: "C++" },
        { label: "Java" },
        { label: "Python" },
        { label: "Go" },
        { label: "Rust" },
        { label: "JavaScript" },
    ];
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const languages = [
    "C",
    "C++",
    "Java",
    "Python",
    "Go",
    "Rust",
    "JavaScript",
];

export default function Search() {
    const isSmallScreen = window.innerWidth <= 830;

    const [fromLangValue, setFromLangValue] = useState("");
    const [funcValue, setFuncValue] = useState("");
    const [toLangValue, setToLangValue] = useState<string[]>([]);

    const [fromLangInputError, setFromLangInputError] = useState(false);
    const [funcInputError, setFuncInputError] = useState(false);
    const [toLangInputError, setToLangInputError] = useState(false);

    console.log(fromLangInputError, toLangInputError);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearchValueChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setFuncValue(event.target.value);
        if (inputRef.current) {
            const ref = inputRef.current;
            if (!ref.validity.valid) {
                setFuncInputError(true);
            } else {
                setFuncInputError(false);
            }
        }
    };

    const handleToLangChange = (event: SelectChangeEvent<typeof toLangValue>) => {
        const {
            target: { value },
        } = event;
        setToLangValue(
            typeof value === "string" ? value.split(",") : value,
        );
    };

    const FetchApi = async () => {
        const url = "https://nem-lab.net:9669/funbook/api/search";
        const [result, setResult] = useState("");
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState<Error | null>(null);

        console.log(result, loading, error)

        const fetchData = async () => {
            setLoading(true);
            try {
                const form = new FormData();
                form.append("language", "python");
                form.append("function", "print");
                form.append("response[]", "c");
                form.append("response[]", "c++");
                form.append("response[]", "java");
                form.append("response[]", "javascript");
                form.append("response[]", "rust");
                form.append("response[]", "go");
                form.append("response[]", "python");

                const res = await fetch(url, {
                    method: "POST",
                    body: form,
                });
                const json = await res.json();
                console.log(json);
                setResult(json);
            } catch (e: unknown) {
                if (e instanceof Error) {
                    setError(e);
                } else {
                    setError(new Error('Unknown error'));
                }
            }
            setLoading(false);
        }

        fetchData();
    }

    const handleSearch = () => {
        if (fromLangValue === "") {
            setFromLangInputError(true);
        } else {
            setFromLangInputError(false);
        }
        if (funcValue === "") {
            setFuncInputError(true);
        } else {
            setFuncInputError(false);
        }
        if (toLangValue.length === 0) {
            setToLangInputError(true);
        } else {
            setToLangInputError(false);
        }
        if (fromLangValue !== "" && funcValue !== "" && toLangValue.length !== 0) {
            FetchApi();
        }
    }

    return (
        <Box sx={{ flexGrow: 1, minHeight: 40 }}>

            {/* 変換元 言語選択 */}
            < Autocomplete
                disablePortal
                id="SearchLanguage"
                size="small"
                options={Languages()}
                sx={{
                    width: isSmallScreen ? "80%" : 300,
                    backgroundColor: "white",
                    borderRadius: "5px",
                    ml: isSmallScreen ? 0 : 1,
                    mr: isSmallScreen ? 0 : 1,
                    mb: isSmallScreen ? 1 : 0,
                }}
                renderInput={(params) => <TextField
                    {...params}
                    onChange={(event) => setFromLangValue(event.target.value)}
                    InputLabelProps={{ shrink: false }}
                />}
            />

            <Typography
                sx={{
                    color: "inherit",
                }}
                variant="h5"
            >
                言語の
            </Typography>

            {/* 変換元 関数名 */}
            <TextField
                sx={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    width: isSmallScreen ? "80%" : 300,
                    mr: isSmallScreen ? 0 : 1,
                    ml: isSmallScreen ? 0 : 1,
                    mb: isSmallScreen ? 1 : 0,
                }}
                id="search"
                InputLabelProps={{ shrink: false }}
                variant="outlined"
                size="small"
                value={funcValue}
                onChange={handleSearchValueChange}
                error={funcInputError}
                inputRef={inputRef}
                helperText={funcInputError ? "ASCII文字で入力してください" : ""}
                inputProps={{
                    pattern: "[\x20-\x7E]*",
                    endAdornment: (
                        <InputAdornment position="end">
                            {funcValue && (
                                <IconButton size="small" onClick={() => setFuncValue("")}>
                                    <ClearIcon />
                                </IconButton>
                            )}
                        </InputAdornment>
                    ),
                }}
            />

            <Typography
                sx={{
                    color: "inherit",
                }}
                variant="h5"
            >
                関数は
            </Typography>

            {/* 変換先 言語選択 */}
            <FormControl sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                width: isSmallScreen ? "80%" : 300,
                mr: isSmallScreen ? 0 : 1,
                ml: isSmallScreen ? 0 : 1,
                mb: isSmallScreen ? 1 : 0,
            }}>
                <Select
                    id="demo-multiple-checkbox"
                    multiple
                    value={toLangValue}
                    onChange={handleToLangChange}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                    size="small"
                >
                    {languages.map((language) => (
                        <MenuItem key={language} value={language}>
                            <Checkbox checked={toLangValue.indexOf(language) > -1} />
                            <ListItemText primary={language} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Typography
                sx={{
                    color: "inherit",
                }}
                variant="h5"
            >
                言語では？
            </Typography>

            {/* 検索アイコン */}
            <IconButton
                sx={{
                    color: "inherit",
                    variant: "outlined",
                    border: "1px solid black",
                    borderRadius: "5px",
                    width: isSmallScreen ? "80%" : 300,
                    ml: isSmallScreen ? 0 : 1,
                }}
                aria-label="search"
                onClick={handleSearch}
            >
                <SearchIcon />
                {isSmallScreen ? "検索" : ""}
            </IconButton>

        </Box>
    );
}
