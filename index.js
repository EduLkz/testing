var count = 0;

const texto1 = document.getElementById('texto1');
texto1.textContent = count.toString();

const btnAdd = document.getElementById('add').addEventListener("click", () => {
    count = count + 1;
    texto1.textContent = count.toString();
})


const btnSub = document.getElementById('sub').addEventListener("click", () => {
    if(count > 0)
        count = count - 1;
    texto1.textContent = count.toString();
})