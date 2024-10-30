function checkPalindrome() {
    const input = document.getElementById('inputString').value;
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');
    const resultDiv = document.getElementById('result');
    if (cleanedInput === reversedInput && cleanedInput.length > 0) {
        resultDiv.textContent = `"${input}" is a palindrome!`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = `"${input}" is not a palindrome.`;
        resultDiv.style.color = 'red';
    }
}
window.onload = () => {
    document.getElementById('inputString').value = '';
    document.getElementById('result').textContent = '';
};