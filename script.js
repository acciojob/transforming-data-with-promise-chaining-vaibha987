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
	})
})