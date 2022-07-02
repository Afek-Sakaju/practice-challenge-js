/* Q3: "Josephus problem"
Given the total number of persons n and a number k 
which indicates that k-1 persons are skipped 
and k'th person is killed in circle in a fixed direction.
The task is to choose the safe place in the circle so that 
when you perform these operations starting from 1st place 
in the circle, you are the last one remaining and survive. 
Expected Time Complexity: O(N).
Expected Auxiliary Space: O(N). */

module.exports.josephusProblem = function (personAmount, killNumber) {
    if (personAmount === 1) return -1; //returns -1 if there is no safe place

    killNumber %= personAmount; /* to skip useless gun rolls 
    (in case the killNum > personAmount) */

    let current = 0;

    function rollTheGun(current) {
        return current === killNumber ? current + 1 : rollTheGun(current + 1);
    }

    return rollTheGun(current);
};
