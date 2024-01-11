
		//promise chaining amstrong

		// let number = 371
		// let count = 0
		// let sum = 0
		// let number1 = number
		// let number2 = number1

		// function counts() {
			
		// 	return new Promise((res,rej)=>{
		// 		while(number!=0){
		// 			let rem = number%10
		// 			number=(number-rem)/10
		// 			count++
					
		// 		}
		// 		res(count)
		// 	})
		// }

		// function sums(jegan) {
			
		// 	return new Promise((reso,reje)=>{
		// 		while(number1!=0){
		// 			let rem = number1%10
		// 			number1=(number1-rem)/10
		// 			sum+=(rem**jegan)
		// 		}
		// 		reso(sum)

		// 	})

		// }

		// function check(raja) {
				
		// 		return new Promise((resol,rejec)=>{
					
		// 			if (raja==number2) {
		// 				resol(number2)
		// 			} else {
		// 				rejec(number2)
		// 			}

		// 		})
		// }
		
 
		// promie chaining............


		// counts().then((res)=>{
		// 		console.log(res)

		// sums(res).then((reso)=>{
		// 		console.log(reso)
		
		// check(reso).then((resol)=>{
		// 		console.log(resol)
		// })

		// })

		// })

		// .catch((rejec)=>{
		// 	console.log("error")
		// })


		//async await ...........

		// async function tick(argument) {
		// 	try{
		// 		let x = await counts()
		// 		let y = await sums(x)
		// 		let z = await check(y)
		// 		console.log(y)
		// 	}
		// 	catch{
		// 		console.log("error")
		// 	}
		// }
		// tick()

	//....................accending order...............................................


	// let a = [1,3,4,5,2]

	// for (var i =0; i < a.length; i++) {
		
	// 	for (var j = i+1; j < a.length; j++) {
				
	// 			if (a[i]>a[j]) {

	// 				let x =a[i]
	// 				a[i]=a[j]
	// 				a[j]=x

	// 			}
	// 	}
	// 	console.log(a);
	// }

// console.log(a)


			
			// left triangle pattern........................................................................

	// 	let a=5
	// 	var b=""
	

	// for (i = 0 ; i < a; i++) {
		
	// 	for (j = 0; j < i; j++) {
	// 			b+=" *"
	// 		console.log(b)
	// 	}
	// }


	// let a =10

	// for (var i = 0; i < a; i++) {
		
	// 	for (var j = 0; j < (a-i); j++) {
			
	// 		document.write(" *")
	// 	}
	// 	document.write("<br>")
	// }



//...........................center triangle pattern..........................
		

	// let a = 0
	// let b = 10

	// for (var i = 0; i <= b; i++) {

	// 		for (var j = 1; j <= a; j++) {
	// 			document.write("&nbsp")
	// 		}
	// 		for (var k = 0; k <= (b-i); k++) {
	// 			document.write(" * ")
	// 		}
	// 		document.write("<br>")
		
	// 		a++
	// }



	// let a=10

	// for (var i = 0; i < a; i++) {
		
	// 	for (var j = 0; j < (a-i); j++) {
	// 		document.write("&nbsp")
	// 	}
	
	// 	for (var k = 0; k <=i ; k++) {
	// 		document.write(" * ")
	// 	}
	// 	document.write("<br>")
	
	// }


//....................right triangle pattern.............................................


	// let a=10

	// for (var i = 0; i < a; i++) {
		
	// 	for (var j = 0; j <= (a-i); j++) {
	// 		document.write("&nbsp &nbsp")
	// 	}

	// 	for (var k = 0; k <=i ; k++) {
	// 		document.write("* ")
	// 	}
	// 	document.write("<br>")
	// }


//...............alphabetical left pattern.............................................



// let a = 69

// 	for (var i = 65; i < a ; i++) {

// 			for (var j = 65; j <= i; j++) {
// 				document.write("&nbsp",String.fromCharCode(j))	
// 			}
// 				document.write("<br>")
// 	}


//....................................small letter center pattern.......................
	
	// let a = 102
	// let b=a

	// for (var i = 97; i < a; i++) {
		
	// 	for (var j = 97; j <= b ; j++) {
			
	// 		document.write("&nbsp")
	// 	}

	// 	for (var k = 97; k <= i ; k++) {
	// 		document.write(String.fromCharCode(k))
	// 	}
	// 	document.write("<br>")
	// 	b--
	// }



	//......................................square pattern...........................................


	// let a =10
	// let b = 10
	// let count=0

	// for (var i = 0; i < a; i++) {
		
	// 	for (var j = 0; j < (b-i); j++) {
	
	// 		document.write(" *")
	// 	}
	// 	document.write("<br>")


	// 	for (var k = 0; k < 1 ; k++) {
	// 		document.write(" * ")
	// 		document.write("&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp")
	// 		document.write(" * ")
	// 		b=0
	// 		count++
	// 	}
		
	// 	if (count==a) {

	// 		document.write("<br>")

	// 		for (var l = 0; l < 10 ; l++) {
				
	// 			document.write(" *")	
	// 		}
	// 	}

	// }




	// let a =10
	// let b = a
	// let count=0

	// for (var i = 0; i < a; i++) {
		
	// 	for (var j = 0; j < b; j++) {
	
	// 		document.write(" * ")
	// 	}
	// 	document.write("<br>")


	// 	for (var k = 0; k < 1 ; k++) {
	// 		document.write(" * ")			
		
		
	// 	}
	
	// 	for (var l = 0; l < (a+2) ; l++) {
	// 		document.write(" &nbsp ")			
	// 	}


	// 	for (var m = 0; m < 1 ; m++) {
	// 		document.write(" * ")			
	// 		b=0
	// 		count++
	// 	}

	// 	if ( count==a) {
	// 		document.write("<br>")
	// 			for (var n = 0; n < a; n++) {
		
	// 			document.write(" * ")
	// 		}
	// 	}
	// }

	//...........................array push number convert and push............................. 


	// let a="fed19pcm"
	// let b=[]
	
	// for (var i = 0; i < a.length; i++) {
		
	// 	if (a[i]>0) {
	// 		let c=parseInt(a[i])
	// 		b.push(c)
	// 	}
	
	// 	else{
	// 		b.push(a[i])
	// 	}
	
	// }
	
	// console.log(b)




		//out put 21.................................................................................



	// 	var a="rajajegan948@gmail.com"
	// 	var sum=0
	// 	var char=""
	// 	for (i =0 ; i < a.length; i++) {
			
	// 		if (a[i]>=0) {
	// 			sum+=parseInt(a[i])
	// 		} 	
			
	// 		else {
	// 			char+=a[i]
	// 		}
	// 	}

	// console.log(sum +" number")
	// console.log(char)





	//output three two one .............................................................................


	// var a=parseInt(prompt(""))
	// var num=["zero","one","two","three","four","five","six","seven","eight","nine"]
	// var count=0
	// var sum=0
		
	// 	while(a!=0){
	// 		let rem=a%10
	// 		a=(a-rem)/10
	// 		sum=rem
	// 	console.log(num[sum])
	// }


		//class......................................................................



	// class Detail{
	// 	constructor(names){
	// 		this.a=names
	// 	console.log(this.a)
	// 	}
		
	// }

	// class Details extends Detail{
	// 	constructor(name,age){
	// 		super(name)
	// 		this.b=age

	// 	}
	// 	hi(){
	// 		return console.log("rajasasas")
	// 	}	
	// }	

	// let f = new Details("raja","21")

	// console.log(f)




// 	var x=parseInt(prompt(" TYPE NUMBER"))
// 	var y=x
// 	var sum=0

// function res() {
	
// 		while(x!=0){

// 			let rem = x%10
// 			x=(x-rem)/10
// 			sum=(sum*10)+rem

// 			}
// 		console.log(sum+" R e v e r s e")
// 		return sum
// 		}

	// if (y==res()) {
	// 	console.log(y+" Pallindrome")
	// } else {
	// 	console.log(y+" Not Pallindrome")
	// }



		// prime number..............................................................................

	
	// var a= parseInt(prompt(""))

	// let count=0
	// for ( i = 1; i < a; i++) {
	// 		count=0
	// 	for ( j = 1; j < a; j++) {
					
	// 			if (i%j==0) {
	// 				count++
	// 			}
	// 		}

	// 	if (count==2) {
	// 		console.log(i + " : prime numbers")
	// 	}
	// }

	
	// var j= parseInt(prompt(""))
	// let count=0

	// for ( i = 1; i <= j; i++) {
	
	// 		if ( j % i == 0) {
	// 			count++
	// 		}
	// }

	// if(count==2){
	// 	console.log(j+" prime number")
	// }
	// else{
	// 	console.log(j+" not a prime number")
	// }




	//     sum of number and counts and total..............................................................................


	// var a = [1,2,3,4,5,6,7,8,9,10]
	// var sum=0
	// var count=0

	// for ( i = 1; i < a.length; i++) {
			
	// 		if (a[i]%2!=0) {
	// 			console.log(a[i])
	// 			count++			
	// 			sum+=a[i]
	// 		}
	// }

	// console.log(sum+" Total")
	// console.log(count+" Count")





		//   Fibonacci...........................................................................



	// var value = parseInt(prompt("value"))
	// let number = 0
	// let a = 1
	// let b = 0
	// 	for ( i = 1; i <= value; i++) {
	// 		number = b + a 
	// 		b=a
	// 		a=number
		
	// 		console.log(number);
	// 	}
	

		// palindrome number in array......................................................................


	// var	array=[153,678,121,656,981,432]
	// var array1=[]

	// function ress(a) {
		
	// 	for (i = 0; i < a.length ; i++) {
			
	// 		let b=a[i]
	// 		let c=b
	// 		var sum=0

	// 		while(b!=0){
	// 			let rem=b%10
	// 			b=(b-rem)/10
	// 			sum=(sum*10)+rem
	// 		}

	// 		if (sum==c) {
	// 			array1.push(a[i])
	// 		} 

	// 	}
	// 	return array1
	// }


	// console.log(ress(array))





		//Dublicate array.................................................................................


	//  var a = [1,2,2,1,3,2,4,3,4,5,6,4,5,5,6,3,2,1]
	//  var b = []

	// function res(d) {
		
	//  	for ( i = 0; i < d.length; i++) {
	 		
	//  		var c = true
	 		
	//  		for ( j = 0; j < b.length; j++) {
	 			
	//  			if (d[i]==b[j]) {
	//  				c = false
	//  				}
	//  		}
	 		
	//  		if (c) {
	//  			b.push(d[i])
	//  		}

	//  	}
	// 	return b
	// }

	// let arg = res(a)

	// console.log(arg)

		

	// 	var array = [1,2,3,4,5,6,7,8,9,10]
	// 	var count = 0
	// 	var empty = []
	// 	var sum=0

	// function result(a) {


	// 	for ( i = 0; i < a.length; i++) {
		 	
	// 	 	var b = a[i]

	// 		if ((b%3==0)||(b%4==0)||(b%5==0)) {

	// 			sum+=b
	// 			empty.push(b)
	// 			count++
	// 		}
	// 	}

	// 	console.log(empty)
	// 	return [count,sum]
	// }

	// let c = result(array)

	// console.log(c[0]+" count")
	// console.log(c[1]+" Total")



	//minium number.............................................................................	

	// var x = parseInt(prompt(""))

	// var a = [2323,5454,1212,567,2121,664,134342,2323,676]

	// for ( i = 0; i < a.length; i++) {
		
	// 	var count = 0

	// 		for ( j = 0; j < a.length; j++) {
				
	// 			if (a[i]<=a[j]) {
	// 				count++
	// 			}
	// 		}

	// 		if (count==a.length) {
	// 			console.log(a[i])
	// 		}
			
	// 		else if (count==(a.length-x+1)) {
	// 			console.log(a[i]," you type "+x)
	// 		}

	// }



	//maxium number........................................................................................



	// var x = parseInt(prompt(""))

	// var a = [7,10,3,4,8,6,1,5,9,2]

	// for ( i = 0; i < a.length; i++) {
		
	// 	var count = 0

	// 		for ( j = 0; j < a.length; j++) {
				
	// 			if (a[i]>=a[j]) {
	// 				count++
	// 			}			
	// 		}
			
	// 		if (count==a.length) {
	// 			console.log(a[i])
	// 		}

	// 		else if (count==(a.length-x+1)) {
	// 			console.log(a[i])
	// 		}
	// }


		//remove array value..........................................................

	
	// var x = parseInt(prompt("del"))
	// var array = [1,2,3,4,5,6,7,8,9,10]
	// var array1 = []

	// function resul(a) {

	// 	for ( i = 0; i < a.length; i++) {
				
	// 			let  boolean = true

	// 			if (a[i]==x) {
	// 				boolean = false
	// 			}		
		
	// 		if (boolean) {
	// 			array1.push(a[i])
	// 		}	
	// 	}

	// 	return array1
	// }

	// console.log(resul(array))



		//array concat............................................................
	

	// 	let array = [1,2,3,4,5]
	// 	let array1 = [6,7,8,9,10]
	// 	let array2 = []
	// 	let count = 0

	// for (i = 0; i < array.length; i++) {
	// 			var boolean = false

	// 		array2.push(array[i])
	// 			count++

	// 		if (count==array.length) {
	// 			 boolean = true
	// 		}

	// 	if (boolean) {

	// 		for ( i = 0; i < array1.length; i++) {
				
	// 			array2.push(array1[i])
	// 		}
	// 	}	

	// }

	// console.log(array2)


	// array elements digits..................................................................................

	
	// var array = [12345678,12,123,1234,12345]
	// var array1 = []



	// for ( i = 0; i < array.length; i++) {

	// 		var a = array[i]
	// 		var b = a
	// 		var count = 0

	// 	while(a!=0){

	// 		let rem = a % 10
	// 		a = ( a - rem )/10
	// 		count++
	// 	}

	// 	if (count) {
	// 		array1.push(count)
	// 	}

	// }

	// console.log(array)
	// console.log(array1, "digits !")



	//array zigzag....................................................................................


	// var a = [1,2,3,4,5,6,7,8,9,10]
	// var b = []
	// var c = []
	// var count = 0

	// for ( i = a.length-1; i >= 0; i--) {

	// 		b.push(a[i]+a.length)
	// 		count++

	// 	if (count==a.length) {
			
	// 		for ( i = b.length-1; i >= 0; i--) {

	// 			c.push(b[i]+b.length)
	// 			count++
	// 		}
	// 	}
	// }
	

	// 	console.log(a)
	// 	console.log(b)
	// 	console.log(c)



	//array method..............................................................................................


//Design a method to calculate the sum of n elements in an array.

	// var a = [1,2,3,4,5]
	// var sum = 0
	// let res = a.map((value,index)=>{
	// 	sum+=value

	// })

	// console.log(sum)


//Design a method to calculate the average of n elements in an array.

	// var a = [1,2,3,4,5]
	// var sum = 0
	// let res = a.map((value,index)=>{
	// 	sum+=value
	// })

	// console.log(sum/a.length)


//Design a method to return how many even numbers in the passed array.

	// var a = [1,2,3,4,5,6,7,8,9,10]
	// var count = 0
	// let res = a.map((value,index)=>{
		
	// 	if (value%2==0) {
	// 			count++
	// 		return count
	// 	}

	// })

	// console.log(res)


/* 1. Take an array containing numerical values and remove negative values using the  array function. 
	  Input:  [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];  
	  Expected Output: [0, 1, 5, 12, 19, 20] */

	  // var input =  [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];  



	  // let res = input.filter(function (value,index) {
	  			
	  // 			return value>0
	  // })

	  // console.log(res)



/* 2. This is a competition. In this competition, there are three winners. The first will get the gold medal, the second will get silver, and the third, bronze.(use filter method) 
	  Input: let winners = [""Anna"", ""Beth"", ""Cara""] 
	  Output :""Gold winner: Anna, Silver Winner: Beth, Bronze Winner: Cara"" */

	 // let winners = ["Anna", "Beth", "Cara"] 
	 
	 // winners.map(function (value,index) {
	 		
	 // 		if (index==0){
	 // 			console.log("Gold winner: "+value)
	 // 			}

	 // 		else if (index==1){
	 // 			console.log("silver winner: "+value)
	 // 			}

	 // 		else if (index==2){
	 // 			console.log("Bronze winner: "+value)
	 // 			}
	 // })



	
/* 3. we are going to define an array of four people. However, since there can only be three winners, the fourth person in the list will have to be discounted. 
	  Input: let competitors = [""Anna"", ""Beth"", ""Cara"", ""David""] 
      Output: ""The No1 winner is Anna."" 
	  ""The No2 winner is Beth."" 
	  ""The No3 winner is Cara."" 
	  ""Sorry, David is not one of the winners.""*/

	 //   let competitors = ["Anna", "Beth", "Cara", "David"]

	 //   	 competitors.map(function (value,index) {
	 		
	 // 		if (index==0){
	 // 			console.log("The No1 winner is "+value)
	 // 			}

	 // 		else if (index==1){
	 // 			console.log("The No2 winner is "+value)
	 // 			}

	 // 		else if (index==2){
	 // 			console.log("The No3 winner is "+value)
	 // 			}

	 // 		else if (index==3){
	 // 			console.log(`Sorry,${value} is not one of the winner`)
	 // 			}

	 // })




/* 4. define a function that calculates the area of a circle. Using map (Refer Math.floor for rounding values) 
	  Input: let circles = [10, 30, 50]; 
	  Output: [314, 2827, 7853] */

	  // let circles = [10, 30, 50]; 

	  // let res = circles.map(function (value,index) {
	  // 			let bi=3.14
	  // 			let r = value**2
	// 			var a =bi*r	
	// 			return a

	  // })

	// 	console.log(res) 
	


/* 5. Solve Using Reduce Method: 
	  Input : let num = [29.76, 41.85, 46.5]; 
	  Output: 39.37 "
*/
	  // let num = [29.76, 41.85, 46.5]; 

	  // let res = num.reduce(function (accumulator,index) {
	// 		return accumulator+index

	  // })

	  // console.log(res/num.length)



/* 6. Solve Using Reduce Method:  
	  Input : let num = [29.76, 41.85, 46.5];  
	  Output: [ 41.85, 46.5 ] */

	  // let num = [29.76, 41.85, 46.5];  

	// 	num.reduce(function (accu,ind) {
	// 		console.log(ind)
	// 	})	  


/* 7. Solve Using Map Method: 
	  Input: const nums = [5, 10, 15, 20]; 
	  Output: [undefined, undefined, 30, 40] */

	  // const nums = [5, 10, 15, 20]; 
		
	// 	console.log(nums[0]=undefined)
	// 	console.log(nums[1]=undefined)
	// 	console.log(nums)


//..................................ouput "09:0.5" use parseInt......................

	// let a="09:0.5"

	// let b =a.replace("0.5","30")
	// 	a = b.split(":")
	// b=parseInt(a[0])+":"+parseInt(a[1])
	
	// console.log(b.padStart(5,0))




// let user=prompt("match")

// let obj=[{name:"jegan",student:[{age:21}]},
// 		 {name:"raja",student:[{age:22}]}
// 		]


// 	function name(a,c) {
		
// 		let b = a.find((e)=>{
			
// 			return c==e.name
// 		})

// 		if (b==undefined) {
// 			console.log(user +" not in a object")
// 		}
// 		else{
// 			console.log(b.student[0])
// 		}

// 	}

// 	name(obj,user)


//.......................... two array compare to repeat number ......................


// let a = [1, 2, 3, 4, 5]
// let b = [4, 5, 6, 7, 8]
// let c = []

// 	for (var i = 0; i < a.length; i++) {
		
// 		for (var j = 0; j < b.length; j++) {
			
// 			if (a[i]==b[j]) {
// 				c.push(a[i])
// 			}
// 		}
// 	}

// 	console.log(c)



// let input= "Hello World!"
// let empty = []
// let boolean =true

// 	for (var i = 0; i < input.length; i++) {
		
// 		boolean=true

// 		for (var j = i+1; j < input.length; j++) {
			
// 			if (input[i]==input[j]) {

// 				for (var k = 0; k < empty.length; k++) {
				
// 					if (empty[k]==input[i]) {
// 						boolean=false
// 					}	
// 				}

// 				if (boolean) {
// 					empty.push(input[i])
// 				}	
// 			}
// 		}
// 	}

// console.log(empty)

// Output: ['l', 'o']



//..............................highest words length..............................


// let a =	"The quick brown fox jumps over the lazy dog"

// let b = a.split(" ")
// let c = 0
// let d = ""
// let empty =[]

// for (var i = 0; i < b.length; i++) {

// 	if (b[i].length >= c) {
// 		c=b[i].length
// 		d = b[i]
// 	}

// 	if(i==b.length-1){

// 		for (var j = 0; j < b.length; j++) {
				
// 			if (c==b[j].length) {
// 				empty.push(b[j])
			
// 			}
// 		}
// 	}
// }

// console.log(empty)


//..............................often repeat letters............................................


// let a = "Hello World"

// let count=0
// let counts=0
// let answer = ""

// for (var i = 0; i < a.length; i++) {
	
// 	counts = 0

// 	for (var j = i+1; j < a.length; j++) {
			
// 		if (a[i]==a[j]) {
// 			counts++
// 		}
// 	else if (counts>count) {
// 			count=counts
// 			answer=a[i]
// 		}		
// 	}	
// }

// console.log(answer)



//............................................ positive number multiple and additonal......................


// let a = [2, -3, 5, -1, 10]
// let sum = 0

// for (var i = 0; i < a.length; i++) {

	
// 	if (a[i]>=0) {
// 		let mul = a[i]*a[i]
// 		sum +=mul
// 	}
// }

// console.log(sum)

// Output: 129





