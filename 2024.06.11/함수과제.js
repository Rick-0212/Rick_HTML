
window.onload = function () {
document.getElementById('generateButton').addEventListener('click', displayRandomNumbers);

function generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < 20) {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

    function displayRandomNumbers() {
        const numberContainer = document.getElementById('numberContainer');
        numberContainer.innerHTML = '';
        const numbers = generateRandomNumbers();

        numbers.forEach((number) => {
            const numberDiv = document.createElement('div');
            numberDiv.textContent = number;
            numberContainer.appendChild(numberDiv);
        });

        numberContainer.classList.remove('hidden');
    }
}