//Classes

//Intiate with class keyword, use pascal not camel case, add properties or variable by 
// using something called a constructor
class RaceDriver {
    constructor(firstname, lastname, car, group) {               //constructor activated, parameters
        this.firstname = firstname;      //listed properties are called an instance and are intialized
        this.lastname = lastname;      //Dont list just values, not dynamic. Name parameters and then arguments
        this.car = car;                //.this is way to refer to a property 
        this.group = group;
    }
    introduce() {      //introduce method
        console.log(this.firstname, this.lastname, this.car);
    }
}

//making more instances of this class
let racer1 = new RaceDriver('Billy','Drakkar','Evo 8','Group A'); //Instance of class with 'new' keyword 
let racer2 = new RaceDriver('Tim','Johnbuck','240sx','Group A');

//call method on each student
racer1.introduce();
racer2.introduce();

//When to create a class? Good rule to follow is that each class should be in charge of one thing


//Inheritance
class NotificationSender {
    constructor(status) {
        this.status = status;
    }
    sendNotification(notification) {
        console.log('Sending' + notification);
    }
    findUserWithStatus(status) {
        let users = getUsers(status);
        return users;
    }


}


class PromotionSender extends NotificationSender {          //This very similiar with CollectionSender
    constructor(status) { 
        super(status);             //When they are similiar, we can exract that common code into a parent class and then inherit that 
                                 //Into our children classes, and that provides us with the ability to manage that code in one place
    }                            //Instead of managing them separately 
 //   sendNotification(notification) {
 //       console.log('Sending' + notification);
 //   }
 //   findUserWithStatus(status) {
 //       let users = getUsers(status);
 //       return users;
 //   }
    calculateDiscount(status){
        if(status === 'GOLD'){
            return .3;
        } else if (status === 'SILVER'){
            return .15;
        }
        return 0;
    }
}

class CollectionSender extends NotificationSender {    //The 'extends' keyword is used to inherit from another class
    constructor(status) {
        super(status);                                 //the call key word 'super' refers to the parents class, when followed by () it is refering to the instructor,'super' is like the .this keyword
                                                       // 'super' refers to the specific parent class you inherit from
    }                                                  // You must always call the parents constructor in a class that extends another class
 //   sendNotification(notification) {         //We dont need this 
 //       console.log('Sending' + notification);
 //   }
 //   findUserWithStatus(status){
 //       let users = getUsers(status);
 //       return users;
 //   }
    calculateFee(status) {
        if (status === 'OVERDUE') {
            return 10;
        } else if (status === 'DELIQUENT') {
            return 25;
        }
        return 5;
    }
}

let collectionSender = new CollectionSender("OVERDURE"); //instance of collection sender. Because these classes inherit from the sender class they have access to the methods to the senders classes
collectionSender.sendNotification('This is a test collections notification');



