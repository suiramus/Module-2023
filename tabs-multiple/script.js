
/* Multiple Tabs per page */
document.querySelectorAll('.tab-links-group a')
	.forEach(node => node.addEventListener('click', showTab));
	
	function showTab(event) {
		const clickedTab = event.target;
		const targetTabId = clickedTab.getAttribute('data-target');
		const targetTab = document.getElementById(targetTabId);
		const tabGroup = targetTab.closest('.tabs-wrap');
		
		// hide all tabs in the same wrapper as target
		tabGroup.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
		// show only target
		targetTab.style.display = '';
		
		// remove 'active' class from all tabs in the same wrapper
		tabGroup.querySelectorAll('.tab-link').forEach(tabLink => tabLink.classList.remove('active'));
		// add 'active' class to the clicked tab link
		clickedTab.classList.add('active');
	}