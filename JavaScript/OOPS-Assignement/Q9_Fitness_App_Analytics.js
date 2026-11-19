
const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(data) {
        this.data = data;
    }

    // 1. Get active users using filter()
    getActiveUsers() {
        this.checkData();

        return this.data.filter(user => user.steps > 7000);
    }

    // 2. Calculate average calories using reduce()
    getAverageCalories() {
        this.checkData();

        const totalCalories = this.data.reduce(
            (total, user) => total + user.calories,
            0
        );

        return totalCalories / this.data.length;
    }

    // 3. Get user summary using map()
    getUserSummary() {
        this.checkData();

        return this.data.map(user =>
            user.user + " walked " +
            user.steps + " steps and burned " +
            user.calories + " calories."
        );
    }

    // Check whether dataset is empty
    checkData() {
        if (!Array.isArray(this.data) || this.data.length === 0) {
            throw new Error("Workout dataset is empty!");
        }
    }
}

// Creating object
const analytics = new FitnessAnalytics(workoutData);

try {
    console.log("Active Users:");
    console.log(analytics.getActiveUsers());

    console.log("Average Calories:");
    console.log(analytics.getAverageCalories());

    console.log("User Summary:");
    console.log(analytics.getUserSummary());

} catch (error) {
    console.log("Analytics Error:", error.message);
}
