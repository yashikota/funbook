/* eslint-disable react-refresh/only-export-components */
import { atom } from "recoil";

import initData from "../../json/init.json";

export const languageState = atom({
    key: "languageState",
    default: "",
});

export const functionState = atom({
    key: "functionState",
    default: "",
});

export const responseState = atom({
    key: "responseState",
    default: [""],
});

export const resultState = atom({
    key: "resultState",
    default: initData,
});

export const loadingState = atom({
    key: "loadingState",
    default: false,
});

export const LanguageErrorState = atom({
    key: "LanguageErrorState",
    default: false,
});

export const FunctionErrorState = atom({
    key: "FunctionErrorState",
    default: false,
});

export const ResponseErrorState = atom({
    key: "ResponseErrorState",
    default: false,
});

export const ResultErrorState = atom<Error | null>({
    key: "ResultErrorState",
    default: null,
});
