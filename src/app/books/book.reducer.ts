import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook, AddBookSuccess, AddBookFailure } from "./book.actions";
import { Book } from "../models/book";
import { state } from "@angular/animations";


export const initalState : Book[] = [];

export const BookReducer = createReducer(
    initalState,

    on (AddBook, (state) => {return state}),
    on(AddBookSuccess, (state, {id, title, auther}) => [...state, {id, title, auther}]),

    on(AddBookFailure, (state, {error}) => {
        console.error(error);
        return state;
    }),

    on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId))
);