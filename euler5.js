/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

// check 2520 in code first to make sure I get the correct answer


function productOfMultiples(n) {
    
    let product = 1
    let usedNums = []

    for (let i = 2; i <= n; i++) {
        let isDivisible = usedNums.some(u => Number.isInteger(i / u))
        
        if (isDivisible === false) {
            
            product *= i
            usedNums.push(i)
        }
    }

    return product

}

console.log(productOfMultiples(10))




/*

step 1: start with the variable x = 1
step 2: start with the number 2520
step 3: take the first number and divide by 2.
step 4: if the answer is an integer, then divide the original number by 3 and see if it is an integer. 
step 5: continue to divide the original number by numbers 3-20 and see if you get an integer quotient
step 6: if at any point a non-integer value is received, move on to the next number and repeat steps 3-5
step 7: correct answer is the number that can be divided into an integer by 2 through 20 

let x be the smallest positive number

the following needs to be true for value x

a = x / 2
b = x / 3
c = x / 4
d = x / 5
e = x / 6
f = x / 7
g = x / 8
h = x / 9
i = x / 10
j = x / 11
k = x / 12
l = x / 13
m = x / 14
n = x / 15
o = x / 16 
p = x / 17
q = x / 18
r = x / 19
s = x / 20

function smallestPositNumb(z) {

    for (let x = 0; x >= 2520; x++)

        let a = x / 2
        let b = x / 3
        let c = x / 4
        let d = x / 5
        let e = x / 6
        let f = x / 7
        let g = x / 8
        let h = x / 9
        let i = x / 10
        let j = x / 11
        let k = x / 12
        let l = x / 13
        let m = x / 14
        let n = x / 15
        let o = x / 16 
        let p = x / 17
        let q = x / 18
        let r = x / 19
        let s = x / 20

        if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && Number.isInteger(d) && Number.isInteger(e) && Number.isInteger(f) && Number.isInteger(g) && Number.isInteger(h) && Number.isInteger(i) && Number.isInteger(j) && Number.isInteger(k) && Number.isInteger(l) && Number.isInteger(m) && Number.isInteger(n) && Number.isInteger(o) && Number.isInteger(p) && Number.isInteger(q) && Number.isInteger(r) && Number.isInteger(s))





*/