const navButton = document.querySelector(".nav-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

navButton.addEventListener("click", () => {
  const expanded = navButton.getAttribute("aria-expanded") === "true";
  navButton.setAttribute("aria-expanded", String(!expanded));
  primaryNavigation.classList.toggle("is-open", !expanded);
});

for (const form of document.querySelectorAll(".archive-contact-form")) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const fields = new FormData(form);
    const subject = fields.get("your-subject") || document.title;
    const body = [...form.querySelectorAll("label")].map(label => {
      const field = label.querySelector("input, textarea");
      const name = label.firstChild.textContent.trim().replace(/:$/, "");
      return field.value.trim() ? name + ": " + field.value.trim() : "";
    }).filter(Boolean).join("\r\n\r\n");
    window.location.href = "mailto:info@veeso.gr?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
}
