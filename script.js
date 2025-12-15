function volume_sphere() {
    event.preventDefault();
	let radius = document.getElementById("radius").value;
	let volume = document.getElementById("volume");
	radius = Number(radius);
	if(!isNaN(radius)) {
		let ans = (4/3) * Math.PI * Math.pow(radius, 3)
		volume.value = ans.toFixed(4)
	} else {
		volume.value = "NaN"
	}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
