import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{},
    userAppointments: []
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loginUser: (state, action)=> {
            state.user = action.payload.login
        },
        logoutUser: (state, action) => {
            state.user = action.payload[0]
            state.userAppointments = [...action.payload[1]]
        },
        loadingTurns:(state,action) => {
            state.userAppointments = [...action.payload]
        },
        createTurn:(state,action) => {
            state.userAppointments.push(action.payload)
        },
        cancelTurn:(state,action) => {
            let indice = state.userAppointments.findIndex(objeto => objeto.id === action.payload.id);
            state.userAppointments.splice(indice, 1, action.payload);
        },

    }
})

export const {loginUser, logoutUser, createTurn, cancelTurn, loadingTurns} = userSlice.actions;