
"use strict";

// =====================================
// МОБИЛЬНОЕ МЕНЮ
// =====================================

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Закрыть меню" : "Открыть меню"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Открыть меню");
      menuButton.textContent = "☰";
    });
  });
}

// =====================================
// ДЕМОНСТРАЦИОННАЯ ФОРМА
// =====================================

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    // Не отправляем данные на сервер.
    event.preventDefault();

    const nameInput = contactForm.querySelector("#client-name");
    const phoneInput = contactForm.querySelector("#client-phone");
    const serviceInput = contactForm.querySelector("#service-type");

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const service = serviceInput.value;

    // Проверка имени
    if (name.length < 2) {
      formMessage.textContent = "Укажите имя (минимум 2 символа).";
      nameInput.focus();
      return;
    }

    // Проверка телефона: минимум 10 цифр
    const digits = phone.replace(/\D/g, "");

    if (digits.length < 10 || digits.length > 15) {
      formMessage.textContent = "Проверьте номер телефона.";
      phoneInput.focus();
      return;
    }

    // Проверка выбранной услуги
    if (!service) {
      formMessage.textContent = "Выберите тип уборки.";
      serviceInput.focus();
      return;
    }

    // Демонстрация успешной отправки
    formMessage.textContent =
      "Форма заполнена успешно! Это демоверсия: заявка не отправлена.";

    // Очищаем поля
    contactForm.reset();
  });
}
