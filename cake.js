document.addEventListener('DOMContentLoaded', (event) => {
    const flame = document.getElementById('flame');
    const candle = document.getElementById('candle');

    candle.addEventListener('click', () => {
        flame.classList.add('out');
    });
});

