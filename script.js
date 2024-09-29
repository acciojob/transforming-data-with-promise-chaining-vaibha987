//your JS code here. If required.
const number=document.getElementById("ip").value
const output=document.getElementById("output")
const button=document.getElementById("btn")
button.addEventListener('click',()=>{
	let promise=new Promise(function(resolve,reject) {
	setTimeout(()=>{
		resolve(number)
	},2000)	
	})
	promise.then((number)=>{
		output.innerHTML=`Result:${number}`
		return number
	}).then((number)=>{
		return new Promise((resolve, reject) => {
		setTimeout(() => {
		number=number*2
		output.innerHTML=`Result:${number}`
		resolve(number)
	  }, 1000);
	});
	}).then((number)=>{
		return new Promise((resolve, reject) => {
		setTimeout(() => {
		number=number-3
		output.innerHTML=`Result:${number}`
		resolve(number)
		}, 1000);
	})
	})
	.then((number)=>{
		return new Promise((resolve, reject) => {
		setTimeout(() => {
		number=parseInt(number/2)
		output.innerHTML=`Result:${number}`
		resolve(number)
			}, 1000);
		})
	}).then((number)=>{
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		number=number+10
		output.innerHTML=`Result:${number}`
		resolve(number)
			}, 1000);
	})
	}).then((number)=>{
		output.innerHTML = `Final Result: ${number}`
})
})