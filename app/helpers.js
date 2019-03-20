module.exports = class Helpers {

    constructor(req , res){
        this.reg = req;
        this.res = res;
    }

    getObjects(){
        return{
            auth : this.auth()
        }
    }

    auth() {
        return {
            check : this.reg.isAuthenticated(),
            user : this.reg.user
        }
    }
    
}