
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (
            this.distance === undefined ||
            this.distance === null ||
            this.distance === "" ||
            !Number.isFinite(this.distance) ||
            this.distance < 0
        ) {
            throw new Error("Invalid trip distance!");
        }

        const farePerKm = 12;
        return this.distance * farePerKm;
    }
}

// Creating user and driver
const user1 = new User("Rahul", 4.5);
const driver1 = new Driver("Amit", 4.8, "Car");

// Valid trip
try {
    const trip1 = new Trip("Delhi", "Noida", 20);

    console.log("User:", user1.name);
    console.log("Driver:", driver1.name);
    console.log("Vehicle:", driver1.vehicle);
    console.log("Fare: Rs.", trip1.calculateFare());

} catch (error) {
    console.log("Trip Error:", error.message);
}

// Invalid trip
try {
    const trip2 = new Trip("Delhi", "Agra", -10);
    console.log("Fare:", trip2.calculateFare());

} catch (error) {
    console.log("Trip Error:", error.message);
}
