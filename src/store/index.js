import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {id: '1', text: 'Resolver la intriga de la familia Lannister.', completed: false},
      {id: '2', text: 'Partir hacia Kings Landing.', completed: true},
      {id: '3', text: 'Buscar al bastardo del rey.', completed: true},
      {id: '4', text: 'Averiguar quien es el verdadero padre del principe Baratheon.', completed: false},
      {id: '5', text: 'Rifarse un tiro con Jamie Lannister.', completed: false},
      {id: '6', text: 'Visitar los calabozos.', completed: false},
      {id: '7', text: 'Perder la cabeza.', completed: false},
    ]
  },
  mutations: {
    toggleTodo(state, id) {
      const todoIndx = state.todos.findIndex(todo => todo.id === id)
      state.todos[todoIndx].completed = !state.todos[todoIndx].completed
    }
  },
  actions: {
  },
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter(todo => !todo.completed)
    },
    allTodos: (state, getters, rootState) => {
      console.log({state, getters, rootState})
      return state.todos
    },
    completedTodos: (state, getters, rootState) => {
      return state.todos.filter(todo => todo.completed)
    },
    getTodosByTab: (_, getters) => (tab) => {
      switch (tab) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completedTodos  
      }
    } 
  },
  modules: {
  }
})
