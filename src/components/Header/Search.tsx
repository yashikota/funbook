import { Checkbox, FormControl, IconButton, InputAdornment, ListItemText, MenuItem, Select, SelectChangeEvent, Typography, Grid, Autocomplete, TextField } from "@mui/material";
import { SetStateAction, useRef } from "react";

import { useRecoilState } from "recoil";
import { languageState, functionState, responseState, resultState, loadingState } from "../Store/State";
import { LanguageErrorState, FunctionErrorState, ResponseErrorState, ResultErrorState } from "../Store/State";

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
        { label: "TypeScript"}
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
    "TypeScript",
];

export default function Search() {
    const isSmallScreen = window.innerWidth <= 1500;
    const url = "https://nem-lab.net:9669/funbook/api/search";

    const [fromLangValue, setFromLangValue] = useRecoilState(languageState);
    const [funcValue, setFuncValue] = useRecoilState(functionState);
    const [toLangValue, setToLangValue] = useRecoilState<string[]>(responseState);
    const [result, setResult] = useRecoilState(resultState);
    const [loading, setLoading] = useRecoilState(loadingState);

    console.log(result);

    const [languageError, setLanguageError] = useRecoilState(LanguageErrorState);
    const [functionError, setFunctionError] = useRecoilState(FunctionErrorState);
    const [responseError, setResponseError] = useRecoilState(ResponseErrorState);
    const [resultError, setResultError] = useRecoilState<Error | null>(ResultErrorState);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearchValueChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setFuncValue(event.target.value);
        if (inputRef.current) {
            const ref = inputRef.current;
            !ref.validity.valid ? setFunctionError(true) : setFunctionError(false);
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
        setLoading(true);
        setResultError(null);
        try {
            const form = new FormData();
            form.append("language", fromLangValue);
            form.append("function", funcValue);
            form.append("response[]", fromLangValue);
            toLangValue.forEach(element => {
                if (element !== fromLangValue) {
                    form.append("response[]", element);
                }
            });

            const res = await fetch(url, {
                method: "POST",
                body: form,
            });
            const json = await res.json();
            setResult(json);
        } catch (e: unknown) {
            if (e instanceof Error) {
                setResultError(e);
            } else {
                setResultError(new Error("Unknown error"));
            }
        }
        setLoading(false);
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">

            <Grid item xs={12} md={6} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* 変換元 言語選択 */}
                <Autocomplete
                    disablePortal
                    id="SearchLanguage"
                    size="small"
                    options={Languages()}
                    sx={{
                        width: isSmallScreen ? "80%" : 300,
                        backgroundColor: "white",
                        borderRadius: "5px",
                        m: 1,
                    }}
                    onChange={(_, newValue) => {
                        setFromLangValue(newValue?.label ?? "");
                        if (newValue?.label === "") {
                            setLanguageError(true);
                        } else {
                            setLanguageError(false);
                        }
                    }}
                    renderInput={(params) => <TextField
                        {...params}
                        error={languageError}
                        helperText={languageError ? "言語を選択してください" : ""}
                        label="変換元"
                    />}
                />

                <Typography
                    sx={{
                        width: 80,
                        color: "inherit",
                        fontSize: "1.5rem",
                    }}
                >
                    言語の
                </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* 変換元 関数名 */}
                <TextField
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        width: isSmallScreen ? "80%" : 300,
                        m: 1,
                    }}
                    id="search"
                    label="関数名"
                    variant="outlined"
                    size="small"
                    value={funcValue}
                    onChange={handleSearchValueChange}
                    error={functionError}
                    inputRef={inputRef}
                    helperText={functionError ? "ASCII文字で入力してください" : ""}
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
                        width: 80,
                        color: "inherit",
                        fontSize: "1.5rem",
                    }}
                >
                    関数は
                </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* 変換先 言語選択 */}
                <FormControl sx={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    width: isSmallScreen ? "80%" : 300,
                    m: 1,
                }}>
                    <Select
                        id="demo-multiple-checkbox"
                        multiple
                        value={toLangValue}
                        onChange={handleToLangChange}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                        size="small"
                        error={responseError}
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
                        width: 155,
                        color: "inherit",
                        fontSize: "1.5rem",
                    }}
                >
                    言語では？
                </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* 検索アイコン */}
                <IconButton
                    sx={{
                        color: "inherit",
                        variant: "outlined",
                        border: "1px solid black",
                        borderRadius: "5px",
                        width: "96%",
                        m: 1,
                    }}
                    aria-label="search"
                    onClick={() => {
                        fromLangValue === "" ? setLanguageError(true) : setLanguageError(false);
                        funcValue === "" ? setFunctionError(true) : setFunctionError(false);
                        toLangValue.length === 0 ? setResponseError(true) : setResponseError(false);
                        if (fromLangValue !== "" && funcValue !== "" && toLangValue.length !== 0) {
                            FetchApi();
                        }
                    }}
                    size="small"
                >
                    <SearchIcon />
                    検索
                </IconButton>
            </Grid>

            {resultError && <p style={{ color: "red" }}>{resultError.message}</p>}
            {loading && <p>検索中...</p>}

        </Grid>
    );
}
