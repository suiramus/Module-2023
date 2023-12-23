function showTab(event, tabGroup) {
	event.preventDefault(); // Previne comportamentul implicit al link-urilor
	
	const clickedTab = event.target;
	const targetTabId = clickedTab.getAttribute('href');
	const targetTab = document.querySelector(targetTabId);
	
	// Ascunde toate tab-urile în același container ca și cel vizat
	tabGroup.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('content-hidden'));
	// Afișează doar tab-ul vizat
	targetTab.classList.remove('content-hidden');
	targetTab.classList.add('content-visible');
	
	// Elimină clasa 'active' de la toate link-urile tab-urilor în același container
	tabGroup.querySelectorAll('.tab-link').forEach(tabLink => tabLink.classList.remove('active'));
	// Adaugă clasa 'active' pe link-ul tab-ului apăsat
	clickedTab.classList.add('active');
}

document.querySelectorAll('.tabs-wrap').forEach(tabGroup => {
	tabGroup.addEventListener('click', (event) => {
		const clickedTab = event.target.closest('a.tab-link');
		if (clickedTab) {
			showTab(event, tabGroup);
		}
	});
});
