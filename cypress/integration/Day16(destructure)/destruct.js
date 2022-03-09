

let numbers = [11, 22, 33, 44, 55]
console.log(typeof numbers)

let a = numbers[1]
let b = numbers[2]
let c = numbers[3]

console.log(a)
console.log(b)
console.log(c)

console.log('-----------------')
// ---------------Destructure-------------

let [aa, bb, cc, dd, ee] = numbers
console.log(aa)
console.log(ee)

console.log('-----------------')
// Object

let person = {
    fullName: "shubham",
    age: 26,
    roll_No: 30
}

let { fullName: fn, age: ag, roll_No: rn } = person

console.log(fn)
console.log(rn)


// More Examples

// Program 1

let person1 = {
    fullName: "shubham rahujade",
    roll_No: 30,
    skills: ['python', 'java']
}

let { fullName: fnm, roll_No: rln, skills: [ae, ea] } = person1

console.log(ae)
console.log(ea)

// Program 2

let person2 = [
    {
        fName: 'Rahul Dua',
        age: 33
    },
    {
        fName: 'Sara Khan',
        age: 44
    }
]

let [{fName:fn1,age:ag1},{fName:fn2,age:ag2}] = person2

console.log(ag2)
console.log(fn1)

// Program 3

let vehicle = {

    color:'red',
    type:['sedan','suv'],
    startType:{
        one:'automatic',
        two:'manual'
    }
}

let {color:clr,type:[eee,fff],startType:{one:o,two:t}} = vehicle

console.log(o)
console.log(t)
console.log(eee)

console.log('-------------------------')
// ------------------REST---------------------

function addition(...add) {
    console.log(add)
    let sum = add.reduce((acc,el)=>{
        return acc + el 
    })
    return sum
}
let total = addition(11,22,33,44)
console.log(total)



// ------------------Spread------------------

let numb = [22,33,44,55,66,77,88]

function add(m,n,o,p) {
    console.log(m+n+o+p)
}

add(...numb)



// New Spread


let ages = [18,20,21,22,23,24,43,23,33,44,55]

function add(q,w,e,r,t) {
    console.log(q+w+e+r+t)
}

add(...ages)