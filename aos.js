/*
after putting this code inside script tag or external linked js file 
use ( as ) before animate__animated and use ( s_ ) before animte_ prefix

example - 

  <h2 class="as animate__animated s_animate__rotateInDownLeft">harindu</h2>
  with this code 👆👆👆

  <h2 class="animate__animated animate__rotateInDownLeft">harindu</h2>
  normal animate.css 👆👆👆
  
*/

aaosInit({
    root: '#scrollArea',
    rootMargin: '0px',
    threshold: 0.1,
    aaosClassName: 'as'
})

function aaosInit(anchor) {
    let aaosClassName = 'as'
    let options
    if (anchor && (typeof anchor) == 'object')
        options = anchor
    else
        options = {
            root: document.querySelector(anchor || document.body),
            rootMargin: '0px',
            threshold: 0.9
        }
    if (options && options.aaosClassName) aaosClassName = options.aaosClassName
    if (options && options.root && (typeof options.root) == 'string') options.root = document.querySelector(options.root)

    let observer = new IntersectionObserver(callback, options);
    let targets = document.getElementsByClassName(aaosClassName)
    for (var i = 0; i < targets.length; i++)
        observer.observe(targets[i]);

    function callback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting)
                replaceClass(entry.target)
        });
    };

    function replaceClass(target) {
        var classList = target.classList
        for (var i = 0; i < classList.length; i++) {
            if (classList[i].startsWith('s_animate')) {
                var klass = classList[i]
                target.classList.remove(classList[i])
                target.classList.add(klass.substring(2))
                target.classList.remove(aaosClassName)
            }
        }
    }
}
