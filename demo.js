class User{
    static name="sunil";
    lastname="kumar"
    #age=12;
    print(){
        console.log(this,this.name,this.fun,this.dat,this.#age,User.name,this.lastname);
        return;
    }
    set event(name){
        this.fun=name.name;
        this.dat=name.dat;
    }
    static create(){
        console.log(User.name,this.lastname);
    }
}
const user=new User();
user.event={name:"wedding",dat:"22"};
console.log(user.print(),User.name);
User.create()