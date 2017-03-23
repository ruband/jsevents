/**
 * Created by user on 22.03.2017.
 */

window.addEventListener('load', function () {

    function spanClickListener(event) {
        var target = event.target;
        var firstActiveElement = document.getElementsByClassName('active')[0];
        if (undefined != firstActiveElement) {
            firstActiveElement.classList.toggle('active');
        }
        if (target.matches('p span')) {
            target.classList.toggle('active');
        }

    }
    document.body.addEventListener('click', spanClickListener);
});