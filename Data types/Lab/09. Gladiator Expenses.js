function solve(lostFights, helmet, sword, shild, armor) {
    
    let expenses = 0;
    let brokenShild = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            expenses += helmet;
        }
        if (i % 3 == 0) {
            expenses += sword;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            expenses += shild;
            brokenShild++;
            if (brokenShild == 2) {
                expenses += armor;
                brokenShild = 0;
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
solve(7, 2, 3, 4, 5)