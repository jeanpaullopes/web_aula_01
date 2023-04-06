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