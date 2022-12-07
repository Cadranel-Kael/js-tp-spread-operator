document.documentElement.classList.add('js-enabled');

const jump = document.querySelector('.jump');
const jumpChars = document.querySelector('.jump').textContent;
let replaceJump = '';

for (const jumpChar of jumpChars) {
    if (jumpChar === ' '){
        replaceJump+=`\u00A0`
    }
    replaceJump+=`<span>${jumpChar}</span>`;
}

jump.innerHTML = replaceJump;
