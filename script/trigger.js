const testingFood = async _ => {
	const all = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
	const dataAll = await(all.json());
	const data = dataAll.drinks;
	let cokcTail = [];
	let shot = [];
	let ordinaryDrink = [];
	let cotea = [];
	let etc = [];
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
}