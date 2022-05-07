//ES6+ feature - let and const keywords
const keys = [
  { value: "`", shift: "~", code: 192 },
  { value: "1", shift: "!", code: 49 },
  { value: "2", shift: "@", code: 50 },
  { value: "3", shift: "#", code: 51 },
  { value: "4", shift: "$", code: 52 },
  { value: "5", shift: "%", code: 53 },
  { value: "6", shift: "^", code: 54 },
  { value: "7", shift: "&", code: 55 },
  { value: "8", shift: "*", code: 56 },
  { value: "9", shift: "(", code: 57 },
  { value: "0", shift: ")", code: 48 },
  { value: "-", shift: "_", code: 189 },
  { value: "=", shift: "+", code: 187 },
  { value: "Backspase", code: 8 },
  { value: "Tab", code: 9 },
  { value: "Q", ru: "Й", code: 81 },
  { value: "W", ru: "Ц", code: 87 },
  { value: "E", ru: "У", code: 69 },
  { value: "R", ru: "К", code: 82 },
  { value: "T", ru: "Е", code: 84 },
  { value: "Y", ru: "Н", code: 89 },
  { value: "U", ru: "Г", code: 85 },
  { value: "I", ru: "Ш", code: 73 },
  { value: "O", ru: "Щ", code: 79 },
  { value: "P", ru: "З", code: 80 },
  { value: "[", ru: "Х", code: 219 },
  { value: "]", ru: "Ъ", code: 221 },
  { value: "|", shift: "/", code: 220 },
  { value: "Del", code: 46 },
  { value: "CapsLock", code: 20 },
  { value: "A", ru: "Ф", code: 65 },
  { value: "S", ru: "Ы", code: 83 },
  { value: "D", ru: "В", code: 68 },
  { value: "F", ru: "А", code: 70 },
  { value: "G", ru: "П", code: 71 },
  { value: "H", ru: "Р", code: 72 },
  { value: "J", ru: "О", code: 74 },
  { value: "K", ru: "Л", code: 75 },
  { value: "L", ru: "Д", code: 76 },
  { value: ";", ru: "Ж", code: 186 },
  { value: "'", ru: "Э", code: 222 },
  { value: "Enter", code: 13 },
  { value: "Shift", code: 16 },
  { value: "Z", ru: "Я", code: 90 },
  { value: "X", ru: "Ч", code: 88 },
  { value: "C", ru: "С", code: 67 },
  { value: "V", ru: "М", code: 86 },
  { value: "B", ru: "И", code: 66 },
  { value: "N", ru: "Т", code: 78 },
  { value: "M", ru: "Ь", code: 77 },
  { value: ",", ru: "Б", code: 188 },
  { value: ".", ru: "Ю", code: 190 },
  { value: "/", ru: ".", code: 291 },
  { value: "&#5123", code: 38 },
  { value: "Shift", code: 16 },
  { value: "Ctrl", code: 17 },
  { value: "Win", code: 91 },
  { value: "Alt", code: 18 },
  { value: "Spase", code: 32 },
  { value: "Alt", code: 18 },
  { value: "&#5130", code: 37 },
  { value: "&#5121", code: 40 },
  { value: "&#5125", code: 39 },
  { value: "Ctrl", code: 17 },
];

//create DOM-elements
let header = document.createElement("header");
let h1 = document.createElement("h1");
let main = document.createElement("main");
let textarea = document.createElement("textarea");
let keyboard = document.createElement("div");
let info = document.createElement("pre");

h1.textContent = "Virtual Keyboard";
info.textContent = "Language change: Shist + Alt \nMade for Windows";

header.classList.add("header");
h1.classList.add("header-title");
main.classList.add("main");
textarea.classList.add("textarea");
keyboard.classList.add("keyboard");
info.classList.add("info");

document.body.append(header);
document.body.append(main);
header.append(h1);
main.append(textarea);
main.append(keyboard);
main.append(info);

//ES6+ feature - arrow functions
const activateKey = (e) => {
  e.preventDefault();

  let key = null;
  if (e.type == "keydown") {
    if (e.location == 1) {
      key = document.querySelectorAll(`.key[data-code='${e.keyCode}']`)[0];
    } else if (e.location == 2) {
      key = document.querySelectorAll(`.key[data-code='${e.keyCode}']`)[1];
    } else {
      key = document.querySelector(`.key[data-code='${e.keyCode}']`);
    }
  } else {
    key = e.currentTarget;
  }

  if (key.dataset.value) {
    if (key.dataset.value !== "CapsLock" && key.dataset.value !== "Shift") {
      key.classList.add("key_active");
    }

    let shift1Left = document.querySelectorAll(`.key[data-code='16']`)[0];
    let shiftRigth = document.querySelectorAll(`.key[data-code='16']`)[1];

    switch (key.dataset.value) {
      case "Spase":
        textarea.textContent += " ";
        break;
      case "Backspase":
        textarea.textContent = textarea.textContent.slice(0, -1);
        break;
      case "Tab":
        textarea.textContent += "\t";
        break;
      case "Enter":
        textarea.textContent += "\n";
        break;
      case "Alt":
        if (
          shift1Left.classList.contains("key_active") ||
          shiftRigth.classList.contains("key_active")
        ) {
          changelang();
        }
        break;
      case "Shift":
        if (
          shift1Left.classList.contains("key_active") ||
          shiftRigth.classList.contains("key_active")
        ) {
          shift1Left.classList.remove("key_active");
          shiftRigth.classList.remove("key_active");
        } else {
          key.classList.add("key_active");
        }
        break;
      case "Del":
        //
        break;
      case "Win":
        //
        break;
      case "Ctrl":
        //
        break;
      case "CapsLock":
        if (key.classList.contains("key_active")) {
          key.classList.remove("key_active");
        } else {
          key.classList.add("key_active");
        }
        break;

      default:
        let caps = document.querySelector(`.key[data-code='20']`);
        if (
          shift1Left.classList.contains("key_active") ||
          shiftRigth.classList.contains("key_active")
        ) {
          if (key.dataset.shift) {
            textarea.innerHTML += `${key.dataset.shift}`;
          } else {
            textarea.innerHTML += `${key.dataset.value.toUpperCase()}`;
          }
          shift1Left.classList.remove("key_active");
          shiftRigth.classList.remove("key_active");
        } else if (caps.classList.contains("key_active")) {
          textarea.innerHTML += `${key.dataset.value.toUpperCase()}`;
        } else {
          const textarea2 = document.querySelector(".textarea");
          textarea2.innerHTML += `${key.dataset.value.toLowerCase()}`;
        }
        break;
    }
    textarea.setSelectionRange(
      textarea.textContent.length,
      textarea.textContent.length
    );
  }
  textarea.onblur = () => textarea.focus();
  textarea.focus();
};

const deactivateKey = (e) => {
  let key = null;
  if (e.type == "keyup") {
    if (e.location == 1) {
      key = document.querySelectorAll(`.key[data-code='${e.keyCode}']`)[0];
    } else if (e.location == 2) {
      key = document.querySelectorAll(`.key[data-code='${e.keyCode}']`)[1];
    } else {
      key = document.querySelector(`.key[data-code='${e.keyCode}']`);
    }
  } else {
    key = e.currentTarget;
  }

  key?.classList.remove("key_active");
};

//create keys
for (let i = 1; i <= 5; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  //ES6+ feature - template literals
  row.classList.add(`row${i}`);

  let x;
  let y;
  switch (i) {
    case 1:
      //ES6+ feature - property destructuring
      [x, y] = [0, 14];
      break;
    case 2:
      [x, y] = [14, 29];
      break;
    case 3:
      [x, y] = [29, 42];
      break;
    case 4:
      [x, y] = [42, 55];
      break;
    case 5:
      [x, y] = [55, keys.length];
      break;
  }

  for (let i = x; i < y; i++) {
    let key = document.createElement("button");
    key.classList.add("key");
    key.innerHTML = keys[i].value;
    if (keys[i].value == "Spase") {
      key.innerHTML = "";
      key.classList.add("spase");
    }
    [key.dataset.value, key.dataset.code] = [keys[i].value, keys[i].code];
    if (keys[i].hasOwnProperty("shift")) {
      key.dataset.shift = keys[i].shift;
      key.classList.add("key_additioned");
    }
    if (keys[i].hasOwnProperty("ru")) {
      key.dataset.ru = keys[i].ru;
    }

    key.addEventListener("mousedown", activateKey);
    if (key.dataset.value !== "Shift" && key.dataset.value !== "CapsLock") {
      key.addEventListener("mouseup", deactivateKey);
      key.addEventListener("mouseout", deactivateKey);
    }

    row.append(key);
  }
  keyboard.append(row);
}

window.addEventListener("keydown", activateKey);
window.addEventListener("keyup", (event) => {
  if (event.key !== "CapsLock") {
    deactivateKey(event);
  }
});
