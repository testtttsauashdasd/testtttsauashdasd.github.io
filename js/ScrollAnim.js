const c1 = document.getElementById('c');

const Charge = (In, OBS) => {
	In.forEach((Inn) => {
		if(Inn.isIntersecting){
			Inn.target.classList.add('visible');
		} else {
		 Inn.target.classList.remove('visible');
		}
	});
}

const OBS = new IntersectionObserver(Charge, {
	root: null,
	threshold: 1.0
});

OBS.observe(c1);
