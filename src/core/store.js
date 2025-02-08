import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import charactersListReducer from "../common/CharactersList/charactersListSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        characters:charactersListReducer
    },
    middleware:[sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;