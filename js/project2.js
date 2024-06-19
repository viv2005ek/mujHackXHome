//typing effect
const typed2 = document.querySelector(".content2Typing");
if (typed2) {
    let typed_string = typed2.getAttribute("data-typed-items");
    if (typed_string) {
        let count = 1;

        onTick();

        function onTick() {
            typed2.innerHTML = typed_string.substring(0, count);
            count++;

            if (count > typed_string.length) {
                setTimeout(() => {
                    count = 1;
                    onTick();
                }, 5000)
            } else {
                setTimeout(() => {
                    onTick();
                }, 300)
            }
        }
    }
}