// ACCROCHES

	// Hall of Fame

var accrocheF = []	// Définition d'un tableau comprenant les phrases d'accroche
accrocheF[0] = "Le gratin des jeux vidéo indépendants !";
accrocheF[1] = "La crème de la crème !";
accrocheF[2] = "Jeux indispensables à tout indie lover !";

function accrocheFRandomizer()
{
	var randomAccroche = Math.floor(Math.random()*(accrocheF.length));	// var.randomAccroche = L'arrondit au chiffre en dessous de (un chiffre au hasard entre 0 et 1 * le nombre de cas possibles de var accroche)
	document.getElementById('accroche-random').innerHTML = accrocheF[randomAccroche];	/* Dans le document, affecter la fonction à l'ID accroche-random et faire s'afficher le texte entre les balises,
																						le texte étant celui obtenu grâce à la mise en commun de var randomAccroche (par ex.: 2) et de var accroche
																						(suivant l'ex.: Jeux indispensables à tout indie lover!) */
}
			
	// Hall of Shame

var accrocheS = []	// Définition d'un tableau comprenant les phrases d'accroche
accrocheS[0] = "Scatophiles, soyez servis !";
accrocheS[1] = "Les pires étrons de l'univers des jeux vidéos indépendants !";

function accrocheSRandomizer()
{
	var randomAccroche = Math.floor(Math.random()*(accrocheS.length));	// var.randomAccroche = L'arrondit au chiffre en dessous de (un chiffre au hasard entre 0 et 1 * le nombre de cas possibles de var accroche)
	document.getElementById('accroche-random').innerHTML = accrocheS[randomAccroche];	/* Dans le document, affecter la fonction à l'ID accroche-random et faire s'afficher le texte entre les balises,
																						le texte étant celui obtenu grâce à la mise en commun de var randomAccroche (par ex.: 2) et de var accroche
																						(suivant l'ex.: Jeux indispensables à tout indie lover!) */
}


// JEUX

	// Hall of Fame
	
var jeuxF = []	// Définition d'un tableau comprenant les jeux
jeuxF[0] = {number: "4000", name: "Garry's Mod", prix:9.99},
jeuxF[1] = {number: "40800", name: "Rogue Legacy", prix:14.99},
jeuxF[2] = {number: "113200", name: "The Binding of Isaac", prix:4.99},
jeuxF[3] = {number: "210970", name: "The Witness", prix:36.99},
jeuxF[4] = {number: "223470", name: "Super Meat Boy", prix:13.99},
jeuxF[5] = {number: "241600", name: "POSTAL 2", prix:9.99},
jeuxF[6] = {number: "252490", name: "Rust", prix:19.99},
jeuxF[7] = {number: "252950", name: "Rocket League", prix:19.99},
jeuxF[8] = {number: "257510", name: "The Talos Principle", prix:39.99},
jeuxF[9] = {number: "385710", name: "INK", prix:4.99},
jeuxF[10] = {number: "238460", name: "Battleblock Theater", prix:14.99},
jeuxF[11] = {number: "99700", name: "NightSky", prix:9.99},
jeuxF[12] = {number: "219150", name: "Hotline Miami", prix:8.49},
jeuxF[13] = {number: "26800", name: "Braid", prix:14.99},
jeuxF[14] = {number: "224760", name: "FEZ", prix:9.99},
jeuxF[15] = {number: "322500", name: "SUPERHOT", prix:22.99},
jeuxF[16] = {number: "48000", name: "LIMBO", prix:9.99},
jeuxF[17] = {number: "207140", name: "SpeedRunners", prix:14.99},
jeuxF[18] = {number: "391540", name: "Undertale", prix:9.99},
jeuxF[19] = {number: "250760", name: "Shovel Knight", prix:14.99};
	
		// Tri aléatoire
function jeuxFRandomizer()
{
	var i = jeuxF.length, j, temp;	// Assignation de la valeur i = longueur du tableau
	while(--i>=0)	// i=i-1 à chaque fois que le while est lancé, jusqu'à ce que while=0 où il fait une dernière boucle avant de s'arrêter
	{
		j = Math.floor(Math.random() * (i+1));
		temp = jeuxF[j];		// Début swap
		jeuxF[j] = jeuxF[i];	// ...
		jeuxF[i] = temp;		// Fin swap
		document.getElementById('image'+i).src = "images/halloffame/"+jeuxF[i].number+".jpg";	
		document.getElementById('lien'+i).href = "http://store.steampowered.com/app/"+jeuxF[i].number+"/";
	}
}

		// Tri par ordre alphabétique
function jeuxFSortingName()
{
	jeuxF.sort(function(a, b)
	{
		var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
		if (nameA < nameB) //sort string ascending
			return -1 
		if (nameA > nameB)
			return 1
		return 0 //default return value (no sorting)
	});
	var i = jeuxF.length;
	while(--i>=0)
	{
		document.getElementById('image'+i).src = "images/halloffame/"+jeuxF[i].number+".jpg";	
		document.getElementById('lien'+i).href = "http://store.steampowered.com/app/"+jeuxF[i].number+"/";
	}
}

		// Tri par ordre alphabétique inversé
function jeuxFSortingNameInverted()
{
	jeuxF.sort(function(a, b)
	{
		var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
		if (nameA < nameB) //sort string ascending
			return 1 
		if (nameA > nameB)
			return -1
		return 0 //default return value (no sorting)
	});
	var i = jeuxF.length;
	while(--i>=0)
	{
		document.getElementById('image'+i).src = "images/halloffame/"+jeuxF[i].number+".jpg";	
		document.getElementById('lien'+i).href = "http://store.steampowered.com/app/"+jeuxF[i].number+"/";
	}
}

		// Tri par prix croissant
function jeuxFSortingPrice()
{
	jeuxF.sort(function(a, b)
	{
		return a.prix-b.prix
	});
	var i = jeuxF.length;
	while(--i>=0)
	{
		document.getElementById('image'+i).src = "images/halloffame/"+jeuxF[i].number+".jpg";	
		document.getElementById('lien'+i).href = "http://store.steampowered.com/app/"+jeuxF[i].number+"/";
	}
}

		// Tri par prix décroissant
function jeuxFSortingPriceInverted()
{
	jeuxF.sort(function(a, b)
	{
		return b.prix-a.prix
	});
	var i = jeuxF.length;
	while(--i>=0)
	{
		document.getElementById('image'+i).src = "images/halloffame/"+jeuxF[i].number+".jpg";	
		document.getElementById('lien'+i).href = "http://store.steampowered.com/app/"+jeuxF[i].number+"/";
	}
}


	// Hall of Shame

var jeuxS = []	// Définition d'un tableau comprenant les jeux
jeuxS[0] = {number: "27940", name: "Dead Horde", prix:9.99},
jeuxS[1] = {number: "223490", name: "Blockscape", prix:19.99},
jeuxS[2] = {number: "242800", name: "Day One : Garry's Incident", prix:2.99},
jeuxS[3] = {number: "252770", name: "Vox", prix:9.99},
jeuxS[4] = {number: "314300", name: "CubeZ", prix:7.99},
jeuxS[5] = {number: "370100", name: "Uncrowded", prix:0.99},
jeuxS[6] = {number: "389460", name: "Robot vs Birds Zombies", prix:0.99},
jeuxS[7] = {number: "406670", name: "Impossible Geometry", prix:1.99},
jeuxS[8] = {number: "410210", name: "Ampersand", prix:0.99},
jeuxS[9] = {number: "444320", name: "Jumpix Jump", prix:3.99};

		// Tri aléatoire
function jeuxSRandomizer()
{
	var i = jeuxS.length, j, temp;	// Assignation de la valeur i = longueur du tableau
	while(--i>=0)	// i=i-1 à chaque fois que le while est lancé, jusqu'à ce que while=0 où il fait une dernière boucle avant de s'arrêter
	{
		j = Math.floor(Math.random() * (i+1));
		temp = jeuxS[j];		// Début swap
		jeuxS[j] = jeuxS[i];	// ...
		jeuxS[i] = temp;		// Fin swap
		document.getElementById('image'+i).src = "images/hallofshame/"+jeuxS[i].number+".jpg";	
		document.getElementById('lien'+i).href = "http://store.steampowered.com/app/"+jeuxS[i].number+"/";
	}
}
		// Tri par ordre alphabétique
function jeuxSSortingName()
{
	jeuxS.sort(function(a, b)
	{
		var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
		if (nameA < nameB) //sort string ascending
			return -1 
		if (nameA > nameB)
			return 1
		return 0 //default return value (no sorting)
	});
	var i = jeuxS.length;
	while(--i>=0)
	{
		document.getElementById('image'+i).src = "images/hallofshame/"+jeuxS[i].number+".jpg";	
		document.getElementById('lien'+i).href = "http://store.steampowered.com/app/"+jeuxS[i].number+"/";
	}
}

		// Tri par ordre alphabétique inversé
function jeuxSSortingNameInverted()
{
	jeuxS.sort(function(a, b)
	{
		var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
		if (nameA < nameB) //sort string ascending
			return 1 
		if (nameA > nameB)
			return -1
		return 0 //default return value (no sorting)
	});
	var i = jeuxS.length;
	while(--i>=0)
	{
		document.getElementById('image'+i).src = "images/hallofshame/"+jeuxS[i].number+".jpg";	
		document.getElementById('lien'+i).href = "http://store.steampowered.com/app/"+jeuxS[i].number+"/";
	}
}

		// Tri par prix croissant
function jeuxSSortingPrice()
{
	jeuxS.sort(function(a, b)
	{
		return a.prix-b.prix
	});
	var i = jeuxS.length;
	while(--i>=0)
	{
		document.getElementById('image'+i).src = "images/hallofshame/"+jeuxS[i].number+".jpg";	
		document.getElementById('lien'+i).href = "http://store.steampowered.com/app/"+jeuxS[i].number+"/";
	}
}

		// Tri par prix décroissant
function jeuxSSortingPriceInverted()
{
	jeuxS.sort(function(a, b)
	{
		return b.prix-a.prix
	});
	var i = jeuxS.length;
	while(--i>=0)
	{
		document.getElementById('image'+i).src = "images/hallofshame/"+jeuxS[i].number+".jpg";	
		document.getElementById('lien'+i).href = "http://store.steampowered.com/app/"+jeuxS[i].number+"/";
	}
}

// BUNDLE SCROLL

function scrollbar()
{
	document.getElementById("bundle").scrollLeft = (document.getElementById("bundle").scrollWidth - document.getElementById("bundle").clientWidth) / 2;
}

