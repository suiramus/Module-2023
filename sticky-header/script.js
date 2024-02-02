// Funcție pentru adăugarea clasei "active" la elementul de meniu corespunzător secțiunii vizibile
function setActiveMenuItem(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const id = entry.target.id;
			activateMenuItem(id);
		}
	});
}

// Funcție pentru activarea elementului de meniu corespunzător unei secțiuni
function activateMenuItem(id) {
	const menuItems = document.querySelectorAll('.menu-item');
	menuItems.forEach(item => {
		if (item.getAttribute('href') === `#${id}`) {
			item.classList.add('active');
		} else {
			item.classList.remove('active');
		}
	});
}

// Funcție pentru gestionarea header-ului sticky
function handleStickyHeader() {
	const header = document.querySelector('.header');
	const stickyOffset = 600;
	if (window.pageYOffset > stickyOffset) {
		header.classList.add('sticky-header');
	} else {
		header.classList.remove('sticky-header');
	}
}

// Ascultă evenimentul de derulare pentru a apela funcția handleStickyHeader
window.addEventListener('scroll', handleStickyHeader);

// IntersectionObserver pentru a urmări secțiunile și a apela funcția setActiveMenuItem când acestea devin vizibile
const sectionObserver = new IntersectionObserver(setActiveMenuItem, {
	root: null,
	rootMargin: '0px',
	threshold: 0.5
});

// Observă fiecare secțiune pentru a determina când devin vizibile și pentru a apela funcția setActiveMenuItem
const sections = document.querySelectorAll('section');
sections.forEach(section => {
	sectionObserver.observe(section);
});


/* Menu */

let topNav = document.getElementById("top-nav");
let ham = document.getElementById("ham");
let hamIcon = ham.querySelector(".bars");

ham.addEventListener("click", function(){
	topNav.classList.toggle("nav-open");
	hamIcon.classList.toggle("close");
});

/* Inchide meniul cand se da click oriunde in document */
document.addEventListener("click", function(event) {
    if (!topNav.contains(event.target) && !ham.contains(event.target)) {
        topNav.classList.remove("nav-open");
        hamIcon.classList.remove("close");
    }
});

// Adaugăm un event listener și pe link-urile din meniu
// Inchide meniul cand se da click pe un link din nav
let menuLinks = document.querySelectorAll("#top-nav a");
menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        topNav.classList.remove("nav-open");
        hamIcon.classList.remove("close");
    });
});