const p_accounting = document.querySelector(".popup-help-accounting");
const p_catalog = document.querySelector(".popup-help-catalog");
const p_cx = document.querySelector(".popup-help-cx");
const overlay = document.querySelector(".background-for-popups");
const p_cls = document.querySelector(".button-close"); 

function s_p_a() {
    p_accounting.classList.remove("visual-hidden");
    overlay.classList.remove("visual-hidden");
}
function s_p_c() {
    p_catalog.classList.remove("visual-hidden");
    overlay.classList.remove("visual-hidden");
}
function s_p_x() {
    p_cx.classList.remove("visual-hidden");
    overlay.classList.remove("visual-hidden");
}

function cls_p(e) { 
    e.classList.toggle("change");
    setTimeout(function() {
	    p_accounting.classList.add("visual-hidden");
        p_catalog.classList.add("visual-hidden");
        p_cx.classList.add("visual-hidden");
	    e.classList.toggle("change");
    }, 400);
    overlay.classList.add("visual-hidden");
};

overlay.addEventListener("click", function () {
	p_cls.classList.toggle("change");
	setTimeout(function() {
        p_accounting.classList.add("visual-hidden");
        p_catalog.classList.add("visual-hidden");
        p_cx.classList.add("visual-hidden");
	    p_cls.classList.toggle("change");
	}, 400);
    
    overlay.classList.add("visual-hidden");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
	    if (!p_accounting.classList.contains("visual-hidden")) {
	        evt.preventDefault();
	        p_cls.classList.toggle("change");
	        setTimeout(function() {
                p_accounting.classList.add("visual-hidden");
                
	            p_cls.classList.toggle("change");
	        }, 400);
	        overlay.classList.toggle("visual-hidden");
	    }
    }
    if (!p_catalog.classList.contains("visual-hidden")) {
	    evt.preventDefault();
	    p_cls.classList.toggle("change");
	    setTimeout(function() {
            p_catalog.classList.add("visual-hidden");
            
	        p_cls.classList.toggle("change");
	    }, 400);
	    overlay.classList.toggle("visual-hidden");
	}
    if (!p_cx.classList.contains("visual-hidden")) {
	    evt.preventDefault();
	    p_cls.classList.toggle("change");
	    setTimeout(function() {
            p_cx.classList.add("visual-hidden");
            
	            p_cls.classList.toggle("change");
	    }, 400);
	    overlay.classList.toggle("visual-hidden");
	}
});
