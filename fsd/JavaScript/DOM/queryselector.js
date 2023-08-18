const n = document.querySelectorAll('h1,span');
console.log(n);
for (let i = 0; i < n.length;i++) {
	n[i].style.background = "red";
}