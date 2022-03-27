const Names = ['Sam', 'Percy', 'Luke', 'Liz', "Mark", 'Alicia','Kristoph']

console.log(Names.length)

for(let i = 0; i < Names.length; i++){
	console.log("People going to Wacken 2022:" + Names[i])
}

let userPresent = Names.find(element => element === 'Joe')

if(userPresent){
	console.log("user has been found")
}
else if(!userPresent){
	console.log("user has not been found")
}

console.log(Names.findIndex(element => element === 'Luke'))

console.log(Names.filter(element => element.length >= 5))

const Numbers = [1,2,3,4,5] 

let reversedNumbers = Numbers.reverse()

console.log(reversedNumbers)
