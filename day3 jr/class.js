class Car{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }

    showdata(){
        console.log("my car name is "+this.name+" and its color is "+this.color);
    }

    start(){
        console.log("car is started")
    }

    stop(){
        console.log("car is stoped")
    }
}

let car1=new Car("brezza","White")
car1.showdata();
car1.start();
car1.stop();

let car2=new Car("Swift","blue")
car2.showdata();
car2.start();
car2.stop();