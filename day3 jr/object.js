const car={
    color:"red",
    name:"brezza",
    start(){
        console.log("the is car is started")
    },
    stop(){
        console.log("the car is stopped")
    },
    showdata(){
        console.log("The name of my car is "+this.name+" with color "+this.color)
    }
}

car.start();
car.showdata();
car.stop();