export default class Localization {
  constructor() {
    document.addEventListener("readystatechange", function () {
      if (document.readyState == "complete") {
        function translate() {
          var el;
          var i;
          // Перевод авторизации
          el = document.querySelector("input[name='email']");
          if (el) el.setAttribute("placeholder", "Адрес электронной почты");
          el = document.querySelector("input[name='password']");
          if (el) el.setAttribute("placeholder", "Пароль");
          el = document.querySelector(".nc-gitGatewayAuthenticationPage-button");
          if (el) el.innerHTML = el.innerHTML.replace(/Login/, "Войти");
          // Перевод панели
          el = document.querySelectorAll(".nc-appHeader-content .nc-appHeader-button");
          if (el[0]) el[0].innerHTML = el[0].innerHTML.replace(/Content/, "Наполнение");
          if (el[1]) el[1].innerHTML = el[1].innerHTML.replace(/Media/, "Медиа");
          el = document.querySelector(".nc-appHeader-quickNew");
          if (el) el.innerHTML = el.innerHTML.replace(/Quick add/, "➕");
          el = document.querySelector(".nc-collectionPage-sidebarHeading");
          if (el) el.innerHTML = "Коллекции";
          el = document.querySelector(".nc-collectionPage-sidebarSearch input");
          if (el) el.setAttribute("placeholder", "Искать везде");
          el = document.querySelector(".nc-collectionPage-topNewButton");
          if (el) el.innerHTML = "Добавить";
          el = document.querySelector(".nc-collectionPage-top-viewControls-text");
          if (el) el.innerHTML = "Показать как:";
          // Перевод редактора
          el = document.querySelector(".nc-entryEditor-toolbar-backCollection");
          if (el) el.innerHTML = el.innerHTML.replace(/Writing in <strong>(.+)<\/strong> collection/, "$1");
          el = document.querySelector(".nc-entryEditor-toolbar-backStatus");
          if (el) el.innerHTML = el.innerHTML.replace(/Changes saved/, "Изменения сохранены");
          el = document.querySelector(".nc-entryEditor-toolbar-backStatus-hasChanged");
          if (el) el.innerHTML = el.innerHTML.replace(/Unsaved Changes/, "Есть изменения");
          el = document.querySelector(".nc-entryEditor-toolbar-deleteButton");
          if (el) el.innerHTML = el.innerHTML.replace(/Delete entry/, "Удалить");
          el = document.querySelector(".nc-entryEditor-toolbar-publishButton");
          if (el) el.innerHTML = el.innerHTML.replace(/Publish/, "Опубликовать");
          el = document.querySelector(".nc-entryEditor-toolbar-statusPublished");
          if (el) el.innerHTML = el.innerHTML.replace(/Published/, "Опубликовано");
          el = document.querySelectorAll(".nc-imageControl-changeButton");
          if (el) for (i = 0; i < el.length; i++) el[i].innerHTML = el[i].innerHTML.replace(/Choose different image/, "Выбрать другое изображение");
          el = document.querySelectorAll(".nc-imageControl-removeButton");
          if (el) for (i = 0; i < el.length; i++) el[i].innerHTML = el[i].innerHTML.replace(/Remove image/, "Удалить изображение");
          el = document.querySelectorAll(".nc-listControl-listCollapseToggle");
          if (el) for (i = 0; i < el.length; i++) el[i].innerHTML = el[i].innerHTML.replace(/>(\d+)[^<]+/, ">Элементов: $1");
          el = document.querySelectorAll(".nc-listControl-addButton");
          if (el) for (i = 0; i < el.length; i++) el[i].innerHTML = el[i].innerHTML.replace(/Add/, "Добавить");
        }
        function doubleTranslate() {
          translate();
          setTimeout(translate, 2000);
        }
        doubleTranslate();
        window.addEventListener('hashchange', doubleTranslate);
        window.addEventListener('click', translate);
        window.addEventListener('input', translate);
      }
    });
  }
}
