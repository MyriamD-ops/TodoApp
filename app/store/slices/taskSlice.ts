import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'task',
    initialState: [],
    reducers: {
        ajouter: (state, actions) => {
            console.log('state :', state)




            // Création d'un nouveau state
            const newState = [...state, actions.payload];
            // Mise à jour du state de task
            return newState
        },

        modifier: (state, actions) => {
            console.log('Modifier une tache')
            const id = actions.payload

            return state.map(item =>
item.id === id ? { ...item, completed: !item.completed } : item
)
},

supprimer: (state, actions) => {
    console.log('Supprimer la tache:', actions.payload)
    const newState = state.filter(item => item.id != actions.payload);
    return newState;
},
}
});

export const { ajouter, modifier, supprimer } = taskSlice.actions;
export default taskSlice.reducer