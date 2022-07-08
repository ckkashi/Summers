const numAnimator = () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
        if(+counter.innerHTML<+counter.getAttribute('data-target')){
        counter.innerHTML = 0;

        const updateCounter = () => {
            // we are using unary plus operator that convert strings into number
            const targetValue = +counter.getAttribute('data-target');
            const curValue = +counter.innerHTML;
            const inc = targetValue / 10;
            if (curValue < targetValue) {
                counter.innerHTML = `${Math.round(curValue + inc)}`;
                setTimeout(updateCounter, 40);
            } else {
                counter.innerHTML = targetValue;
            }
        }

        updateCounter();
    }
    })
};

const main = document.getElementById('main');
main.addEventListener('pointerenter',numAnimator);