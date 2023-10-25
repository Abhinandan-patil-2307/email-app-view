import { configureStore } from "@reduxjs/toolkit";

import reducerX from "./slice.js";
import splitInfo from "./splitInfo.js";

const store = configureStore({
    reducer: {
        emailStore: reducerX,
        splitInfo: splitInfo,
    },
});

export default store;