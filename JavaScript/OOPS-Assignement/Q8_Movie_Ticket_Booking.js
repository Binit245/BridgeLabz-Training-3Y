
class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Adding method to MovieTicket prototype
MovieTicket.prototype.printTicket = function() {
    console.log("Movie:", this.movieName);
    console.log("Seat Number:", this.seatNo);
    console.log("Ticket Price:", this.price);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

// Creating OnlineTicket objects
const ticket1 = new OnlineTicket(
    "Avengers", "A10", 250, 30
);

const ticket2 = new OnlineTicket(
    "Avatar", "B12", 300, 40
);

// Calling inherited prototype method
console.log("Ticket 1 Details:");
ticket1.printTicket();
console.log("Convenience Fee:", ticket1.convenienceFee);
console.log("Total Amount:", ticket1.getTotalAmount());

console.log("--------------------");

console.log("Ticket 2 Details:");
ticket2.printTicket();
console.log("Convenience Fee:", ticket2.convenienceFee);
console.log("Total Amount:", ticket2.getTotalAmount());

// Prototype chain demonstration
console.log(
    "Prototype Chain:",
    MovieTicket.prototype.isPrototypeOf(OnlineTicket.prototype)
);
