 import { createSlice } from '@reduxjs/toolkit';


 // initialisation du réduceur compteur (counter)
const initialState = {
        value : 0 ,
        
}

// création du réduceur compteur (counter)
export const counterSlice = createSlice({
        name:'counter',
        initialState,
        reducers:{
            increment: (state) => {
                // Incrémentation de la valeur
                console.log("cliqué")

                state.value += 1
            },
        
            decrement: (state) => {
                // Décrémentation de la valeur
                state.value -= 1
            },

            reset: (state) => {
                //Mise à zéro de la valeur
                state.value = 0
            },
        }
})

export const {increment, decrement, reset} = counterSlice.actions ;
export default counterSlice.reducer ;

