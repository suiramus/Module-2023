
(function() {
	// Funcție pentru filtrarea elementelor pe baza datelor lor de categorie
	function filterItems(category) {
		// Selectăm toate elementele cu clasa 'item'
		var items = document.querySelectorAll('.item');

		// Parcurgem fiecare element
		items.forEach(function(item) {
			// Verificăm dacă categoria este 'all' sau corespunde cu categoria elementului
			if (category === 'all' || item.dataset.category === category) {
				// Afișăm elementul
				item.classList.add('active');
			} else {
				// Ascundem elementul
				item.classList.remove('active');
			}
		});
	}

	// Eveniment care se declanșează când documentul este complet încărcat
	document.addEventListener('DOMContentLoaded', function() {
		// Selectăm toate butoanele de filtrare
		var filterButtons = document.querySelectorAll('.filter-button a');

		// Adăugăm un ascultător de eveniment pentru fiecare buton de filtrare
		filterButtons.forEach(function(button) {
			button.addEventListener('click', function(e) {
				// Prevenim comportamentul implicit al link-ului
				e.preventDefault();
                    
				// Obținem categoria din atributul href al link-ului
				var category = button.getAttribute('href').split('=')[1];
                    
				// Apelăm funcția de filtrare și transmitem categoria ca argument
				filterItems(category);
                    
				// Dezactivăm clasa 'active' pentru toate butoanele de filtrare
				filterButtons.forEach(function(btn) {
					btn.classList.remove('active');
				});
                    
				// Activăm clasa 'active' pentru butonul curent
				button.classList.add('active');
			});
		});

		// Afisăm toate elementele la încărcarea inițială
		filterItems('all');
	});
})();