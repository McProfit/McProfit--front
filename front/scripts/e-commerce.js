const p_accounting = document.querySelector(".popup-help-accounting");
const p_catalog = document.querySelector(".popup-help-catalog");
const p_cx = document.querySelector(".popup-help-cx");
const overlay = document.querySelector(".background-for-popups");
const p_cls = document.querySelector(".button-close");
const p_clss = document.querySelectorAll(".button-close");

const all_t_n = document.querySelectorAll(".screen--four .nav-list .pitch");
const all_t_c = document.querySelectorAll(".screen--four .content-list .slide");

function t_s_p(n) {
    for (let i = 0; i < all_t_n.length; i++) {
        if (i === n) {
            all_t_n[i].classList.add("active");
            all_t_c[i].classList.add("next-slide-animated");
            all_t_c[i].classList.remove("visual-hidden");
        } else {
            all_t_n[i].classList.remove("active");
            all_t_c[i].classList.add("visual-hidden");
            all_t_c[i].classList.remove("next-slide-animated");
        }
    }
}

function s_p_a() {
    p_accounting.classList.remove("hidde-animated");
    p_accounting.classList.remove("visual-hidden");
    p_accounting.classList.add("show-animated");
    overlay.classList.remove("visual-hidden");
    overlay.classList.add("show-animated");
    overlay.classList.remove("hidde-animated");
}
function s_p_c() {
    p_catalog.classList.remove("hidde-animated");
    p_catalog.classList.remove("visual-hidden");
    p_catalog.classList.add("show-animated");
    overlay.classList.remove("visual-hidden");
    overlay.classList.add("show-animated");
    overlay.classList.remove("hidde-animated");
}
function s_p_x() {
    p_cx.classList.remove("hidde-animated");
    p_cx.classList.remove("visual-hidden");
    p_cx.classList.add("show-animated");
    overlay.classList.remove("visual-hidden");
    overlay.classList.add("show-animated");
    overlay.classList.remove("hidde-animated");
}

function cls_p(e) {
    e.classList.toggle("change");
    setTimeout(function() {
        p_accounting.classList.add("hidde-animated");
        p_accounting.classList.add("visual-hidden");
        p_accounting.classList.remove("show-animated");
        p_catalog.classList.add("hidde-animated");
        p_catalog.classList.add("visual-hidden");
        p_catalog.classList.remove("show-animated");
        p_cx.classList.add("hidde-animated");
        p_cx.classList.add("visual-hidden");
        p_cx.classList.remove("show-animated");
	    e.classList.toggle("change");

        overlay.classList.add("visual-hidden");
    }, 400);


    overlay.classList.add("hidde-animated");
    overlay.classList.remove("show-animated");
};

overlay.addEventListener("click", function () {
    p_clss.forEach((e) => { e.classList.toggle("change"); });
	setTimeout(function() {
        p_accounting.classList.add("hidde-animated");
        p_accounting.classList.add("visual-hidden");
        p_accounting.classList.remove("show-animated");
        p_catalog.classList.add("hidde-animated");
        p_catalog.classList.add("visual-hidden");
        p_catalog.classList.remove("show-animated");
        p_cx.classList.add("hidde-animated");
        p_cx.classList.add("visual-hidden");
        p_cx.classList.remove("show-animated");
        p_clss.forEach((e) => { e.classList.toggle("change"); });

        overlay.classList.add("visual-hidden");
	}, 400);

    overlay.classList.add("hidde-animated");
    overlay.classList.remove("show-animated");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
	    if (!p_accounting.classList.contains("visual-hidden")) {
	        evt.preventDefault();
            p_clss.forEach((e) => { e.classList.toggle("change"); });
	        setTimeout(function() {
                p_accounting.classList.add("hidde-animated");
                p_accounting.classList.add("visual-hidden");
                p_accounting.classList.remove("show-animated");
                
                p_clss.forEach((e) => { e.classList.toggle("change"); });

                overlay.classList.toggle("visual-hidden");
	        }, 400);
	    }
    
        if (!p_catalog.classList.contains("visual-hidden")) {
	        evt.preventDefault();
            p_clss.forEach((e) => { e.classList.toggle("change"); });
	        setTimeout(function() {
                p_catalog.classList.add("hide-animated");
                p_catalog.classList.add("visual-hidden");
                p_catalog.classList.remove("show-animated");
                
                p_clss.forEach((e) => { e.classList.toggle("change"); });

                overlay.classList.toggle("visual-hidden");
	        }, 400);
	    }
        if (!p_cx.classList.contains("visual-hidden")) {
	        evt.preventDefault();
            p_clss.forEach((e) => { e.classList.toggle("change"); });
	        setTimeout(function() {
                p_cx.classList.add("hide-animated");
                p_cx.classList.add("visual-hidden");
                p_cx.classList.remove("show-animated");
                
                p_clss.forEach((e) => { e.classList.toggle("change"); });

                overlay.classList.toggle("visual-hidden");
	        }, 400);
	    }

        overlay.classList.add("hidde-animated");
        overlay.classList.remove("show-animated");
    }
});
