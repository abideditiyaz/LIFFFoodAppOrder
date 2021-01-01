const testingFood = async _ => {
	// consume data from API using async cuz i think this more safely
	const all = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
	const dataAll = await(all.json());
	const data = dataAll.drinks;
	let cokcTail = [];
	let shot = [];
	let ordinaryDrink = [];
	let cotea = [];
	let etc = [];

	// separate data from api url and push to new variable so it moore ez to call it
	data.forEach( i => {
		if (i.strCategory === 'Cocktail') {
			cokcTail.push(i)
		}else if (i.strCategory === 'Shot') {
			shot.push(i)
		}else if (i.strCategory === 'Ordinary Drink') {
			ordinaryDrink.push(i)
		}else if (i.strCategory === 'Coffee / Tea') {
			cotea.push(i)
		}else {
			etc.push(i)
		}
	})
	// console.log(dataAll.drinks);

	// Adding content that i nedd by and API
	cokcTail.forEach( i => {
		const addCocktail = document.createElement('div');
		addCocktail.setAttribute('class', 'wrapper-menu')
		addCocktail.innerHTML = `
			<img src="${i.strDrinkThumb}">
			<span style="font-size: 1.2rem; font-weight: bold">${i.strDrink}</span>
			<span style="font-size: .75rem; font-weight: lighter; color: #404040">${i.strAlcoholic}</span>
		`;
		document.querySelector('#Cocktail').append(addCocktail)
	})

	shot.forEach( i => {
		const addShot = document.createElement('div');
		addShot.setAttribute('class', 'wrapper-menu')
		addShot.innerHTML = `
			<img src="${i.strDrinkThumb}">
			<span style="font-size: 1.3rem; font-weight: bold">${i.strDrink}</span>
			<span style="font-size: .75rem; font-weight: lighter; color: #404040">${i.strAlcoholic}</span>
		`;
		document.querySelector('#Shot').append(addShot)
	})

	ordinaryDrink.forEach( i => {
		const addOrdinaryDrink = document.createElement('div');
		addOrdinaryDrink.setAttribute('class', 'wrapper-menu')
		addOrdinaryDrink.innerHTML = `
			<img src="${i.strDrinkThumb}">
			<span style="font-size: 1.3rem; font-weight: bold">${i.strDrink}</span>
			<span style="font-size: .75rem; font-weight: lighter; color: #404040">${i.strAlcoholic}</span>
		`;
		document.querySelector('#OrdinaryDrink').append(addOrdinaryDrink)
	})

	const coffeTea = document.createElement('div');
	coffeTea.setAttribute('class', 'wrapper-menu')
	coffeTea.innerHTML = `
		<img src="${cotea[0].strDrinkThumb}">
		<span style="font-size: 1.3rem; font-weight: bold">${cotea[0].strDrink}</span>
		<span style="font-size: .75rem; font-weight: lighter; color: #404040">${cotea[0].strAlcoholic}</span>
	`;
	document.querySelector('#CoffeTea').append(coffeTea)

	const unknowns = document.createElement('div');
	unknowns.setAttribute('class', 'wrapper-menu')
	unknowns.innerHTML = `
		<img src="${etc[0].strDrinkThumb}">
		<span style="font-size: 1.3rem; font-weight: bold">${etc[0].strDrink}</span>
		<span style="font-size: .75rem; font-weight: lighter; color: #404040">${etc[0].strAlcoholic}</span>
	`;
	document.querySelector('#Surprise').append(unknowns)
	// Ending Adding content

	// Creating new section to adding chat and ordering items
	document.querySelectorAll('.wrapper-second').forEach( e => {
			e.addEventListener('click', event => {
				document.querySelector('#homeMenu').style.display = 'none';
				document.querySelector('#chartMenu').classList.remove('hidden');

				// make element when clicked
				if (e.childNodes[1].innerText === "CockTail") {
					cokcTail.forEach( i => {
						const addCocktail = document.createElement('div');
						addCocktail.setAttribute('class', 'wrapper-chartMenu')
						addCocktail.innerHTML = `
							<img src="${i.strDrinkThumb}">
							<span style="font-size: 1.2rem; font-weight: bold">${i.strDrink}</span>
						`;
						document.querySelector('#addSectionMenuHere').append(addCocktail)
					})
					document.querySelectorAll('.wrapper-chartMenu').forEach( addName => {
						addName.addEventListener('click', event => {
							document.querySelector('#name-items').innerHTML = addName.childNodes[3].innerText;
						})
					});
					// alert('Ini Cocktail')
				}else if (e.childNodes[1].innerText === "Shot") {
					// do something
					shot.forEach( i => {
						const addShot = document.createElement('div');
						addShot.setAttribute('class', 'wrapper-chartMenu')
						addShot.innerHTML = `
							<img src="${i.strDrinkThumb}">
							<span style="font-size: 1.3rem; font-weight: bold">${i.strDrink}</span>
						`;
						document.querySelector('#addSectionMenuHere').append(addShot)
					})
					document.querySelectorAll('.wrapper-chartMenu').forEach( addName => {
						addName.addEventListener('click', event => {
							document.querySelector('#name-items').innerHTML = addName.childNodes[3].innerText;
						})
					});
					// alert('Ini Shot');
				}else if(e.childNodes[1].innerText === "Ordinary Drink"){
					ordinaryDrink.forEach( i => {
						const addOrdinaryDrink = document.createElement('div');
						addOrdinaryDrink.setAttribute('class', 'wrapper-chartMenu')
						addOrdinaryDrink.innerHTML = `
							<img src="${i.strDrinkThumb}">
							<span style="font-size: 1.3rem; font-weight: bold">${i.strDrink}</span>
						`;
						document.querySelector('#addSectionMenuHere').append(addOrdinaryDrink)
					})
					document.querySelectorAll('.wrapper-chartMenu').forEach( addName => {
						addName.addEventListener('click', event => {
							document.querySelector('#name-items').innerHTML = addName.childNodes[3].innerText;
						})
					});
					// alert('Ini OrdinaryDrink')
				}else if(e.childNodes[1].innerText === "Coffe / Tea"){
					const coffeTea = document.createElement('div');
						coffeTea.setAttribute('class', 'wrapper-chartMenu')
						coffeTea.innerHTML = `
							<img src="${cotea[0].strDrinkThumb}">
							<span style="font-size: 1.3rem; font-weight: bold">${cotea[0].strDrink}</span>
						`;
					document.querySelector('#addSectionMenuHere').append(coffeTea)
					document.querySelectorAll('.wrapper-chartMenu').forEach( addName => {
						addName.addEventListener('click', event => {
							document.querySelector('#name-items').innerHTML = addName.childNodes[3].innerText;
						})
					});
					// alert("Ini Coffe tea")
				}else if (e.childNodes[1].innerText === 'Rarely Noticed'){
					const unknowns = document.createElement('div');
						unknowns.setAttribute('class', 'wrapper-chartMenu')
						unknowns.innerHTML = `
							<img src="${etc[0].strDrinkThumb}">
							<span style="font-size: 1.3rem; font-weight: bold">${etc[0].strDrink}</span>
						`;
					document.querySelector('#addSectionMenuHere').append(unknowns)
					document.querySelectorAll('.wrapper-chartMenu').forEach( addName => {
						addName.addEventListener('click', event => {
							document.querySelector('#name-items').innerHTML = addName.childNodes[3].innerText;
						})
					});
					// alert('Ini saya tidak tau')
				}else{
					alert('Ini Keluar, Saya Pensi !!')
				}
				
			})
		})
}

export default testingFood;