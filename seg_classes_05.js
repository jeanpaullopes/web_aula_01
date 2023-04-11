class User {
    constructor(json) {
        this.id = json.id
        this.name = json.name
        this.username = json.username
        this.email = json.email
        this.address = new Address(json.address)
        this.phone = json.phone
        this.website = json.website
        this.company = json.company.name
         
    }
    get dados() {
        return this.toString()
    }
    toString() {
        return "id: "+this.id+"\n"+
        "name: "+this.name+"\n"+
        "username: "+this.username
    }
}

class Address {
 constructor(jason) {
    this.street = jason.street
    this.suite = jason.suite
    this.city = jason.city
    this.zipcode = jason.zipcode
    this.geo = new Geo( jason.geo)
    }
}

class Geo {
    constructor(obj) {
        this.lat = obj.lat
        this.lng = obj.lng
    }
}

class UserView {
    static toHTML(user) {
       return "<div>"+
        user.name+" <button onclick='detalheUser("+user.id+")'>detalhe</button>"+
        "<div id='detalhe"+user.id+"'></div>"+
        "</div>"
    }
}

class TodoView {
    static toHTML(todo) {
        return  "<div>"+
        "<p>ID: "+todo.id+"</p>"+
        " <p>"+todo.objUser.name+"</p>"+
        
        " <p>"+todo.title+"</p>"+
        "<p>"+ (todo.completed ? 'Finalizado' : 'Aberto') +"</p>"+
        "</div>"
    }
    static toHTMLLista(arrTodos) {

    }
}

class Todo {
    constructor(json) {
        this.userId = json.userId
        this.objUser = repositorio.getUser(this.userId)
        this.id = json.id
        this.title = json.title
        this.completed = json.completed
    }
}


class Repositorio {
    constructor() {
        this.todos = new Map()
        this.users = new Map()
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
    getTodosByUser(idUser) {
// aqui filtra e devolve todos os todos de um usuário em um array

    }
    addUser(user) {
        this.users.set(user.id, user)
    }
    getUser(id) {
        return this.users.get(id)
    }
}