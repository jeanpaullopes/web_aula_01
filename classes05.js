class Pessoa {
    constructor(jsonObj) {
        this.id = jsonObj.id
        this.nome= jsonObj.nome
        this.cargo = jsonObj.cargo
        this.unidade = jsonObj.unidade
        this.digital = jsonObj.digital
        this.sincrono = jsonObj.sincrono
    }
    descricao() {
        return this.nome + " ("+this.cargo+")"
    }
}

class TodoView {
    static toHTML(todo) {
        return  "<div>"+
        "<p>ID: "+todo.id+"</p>"+
        " <p>"+todo.title+"</p>"+
        "<p>"+ (todo.completed ? 'Finalizado' : 'Aberto') +"</p>"+
        "</div>"
    }
}

class Todo {
    constructor(json) {
        this.userId = json.userId
        this.id = json.id
        this.title = json.title
        this.completed = json.completed
    }

    


}


class Repo {
    constructor() {
        this.todos = new Map()
        this.pessoas = new Map()
    }

    addTodo(todo) {
        if (todo.id === 0) {
            todo.id = this.todos.size+1
        }
        this.todos.set(todo.id, todo)
    }
    getTodo(id) {
        return this.todos.get(Number(id))
    }
}