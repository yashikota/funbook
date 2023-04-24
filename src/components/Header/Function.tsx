import { SetStateAction, useRef } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { functionState, inputErrorState } from "../Recoil/State.tsx";

export default function Function({ isSmallScreen }: { isSmallScreen: boolean; }) {
    const [searchValue, setSearchValue] = useRecoilState(functionState);

    const inputRef = useRef<HTMLInputElement>(null);
    const [inputError, setInputError] = useRecoilState(inputErrorState);

    const handleClear = () => {
        setSearchValue("");
    };

    const handleSearchValueChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchValue(event.target.value);
        if (inputRef.current) {
            const ref = inputRef.current;
            if (!ref.validity.valid) {
                setInputError(true);
            } else {
                setInputError(false);
            }
        }
    };

    const width = isSmallScreen ? "100%" : "350px";

    return (
        <TextField
            sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                width: width,
                mr: isSmallScreen ? 0 : 1,
                mb: isSmallScreen ? 1 : 0,
            }}
            id="search"
            label={searchValue ? " " : "Function Name"}
            InputLabelProps={{ shrink: false }}
            variant="outlined"
            size="small"
            value={searchValue}
            onChange={handleSearchValueChange}
            error={inputError}
            inputRef={inputRef}
            inputProps={{
                pattern: "[\x20-\x7E]*",
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
    );
}
