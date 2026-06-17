// Animacion de scroll con IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".fade").forEach(element => {
    observer.observe(element);
});

// Confirmacion al enviar formulario
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", (e) => {
        const action = form.getAttribute("action");

        // Avisar si el ID de Formspree no ha sido configurado
        if (action.includes("TU_ID")) {
            e.preventDefault();
            alert("⚠️ Configura tu ID de Formspree en el atributo action del formulario.");
            return;
        }

        alert("Mensaje enviado correctamente 🚀");
    });
}
