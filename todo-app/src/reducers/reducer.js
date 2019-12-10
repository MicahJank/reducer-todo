
// export const initialState = [
//     {
//         item: 'Learn about reducers',
//         complete: false,
//         id: 3892987589
//     }
// ]


// export const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'ADD':
//             return [...state, {
//                 item: action.payload,
//                 complete: false,
//                 id: Date.now()
//             }];
//         case 'TOGGLE_COMPLETE':
//             return state.map(todo => {
//                 if(todo.id === action.id) {
//                     return {...todo, complete: !todo.complete}
//                 } else {
//                     return todo;
//                 }
//             });
//         case 'CLEAR_COMPLETED':
//             return state.filter(todo => todo.complete === false);
//         case 'FILTER_COMPLETED':
//             return state.filter(todo => todo.complete === true);
//         case 'FILTER_ALL':
//             return state;
//         case 'FILTER_ACTIVE':
//             return state.filter(todo => todo.complete === false);
            
        
//         default:
//             return state;
//     }

    
// }






export const initialState = {
    todos: [  {
        item: 'Learn about reducers',
        complete: false,
        id: 3892987589
    }],
    activeTodos: [],
    completedTodos: []
};


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                todos: [...state.todos, {
                item: action.payload,
                complete: false,
                id: Date.now()
                }] 
            };

        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.id) {
                        return {...todo, complete: !todo.complete}
                    } else {
                        return todo;
                    }
                })
            };

        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.complete === false)
            };

        case 'FILTER_COMPLETED':
            return {
                ...state,
                completedTodos: state.todos.filter(todo => todo.complete === true)
            }

        case 'FILTER_ALL':
            return {
                ...state
            }

        case 'FILTER_ACTIVE':
            return {
                ...state,
                activeTodos: state.todos.filter(todo => todo.complete === false)
            };
            
        default:
            return state;
    }

    
}




// export const initialState = {
//     allTodos: [],
//     displayTodos: []
// }

// export const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'ADD':
//             return {
//                 ...state,
//                 allTodos: [...state.allTodos, {
//                     item: action.payload,
//                     complete: false,
//                     id: Date.now()
//                 }],
//             }
//         case 'TOGGLE_COMPLETE':
//             return state.allTodos.map(todo => {
//                 if(todo.id === action.id) {
//                     return {...todo, complete: !todo.complete}
//                 } else {
//                     return todo;
//                 }
//             });
//         case 'CLEAR_COMPLETED':
//             return {
//                 ...state,
//                 allTodos: state.allTodos.filter(todo => todo.complete === false)
//             }
//         case 'FILTER_COMPLETED':
//             return {
//                 ...state,
//                 displayTodos: state.allTodos.filter(todo => todo.complete === true)
//             }
//         case 'FILTER_ALL':
//             return {
//                 ...state,
//                 displayTodos: state.allTodos
//             }
//         case 'FILTER_ACTIVE':
//             return {
//                 ...state,
//                 displayTodos: state.allTodos.filter(todo => todo.complete === false)
//             }
        
//         default:
//             return state.allTodos;
//     }

    
// }

