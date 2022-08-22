console.log('CodeFlow Übung lev1_1: Math.PI')

console.log(Math.PI)

const PI = Math.PI
const roundedPI = PI.toFixed(2)
console.log(roundedPI)

console.log('===================')



console.log('CodeFlow Übung lev1_2: Math.round()')

let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
]

const rounded = () => {
    for (let i = 0; i < array.length; i++) {
        console.log(Math.round(array[i])) 
    }
}

rounded()
