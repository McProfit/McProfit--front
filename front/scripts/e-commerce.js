const p_accounting = document.querySelector(".popup-help-accounting");
const p_catalog = document.querySelector(".popup-help-catalog");
const p_cx = document.querySelector(".popup-help-cx");
const overlay = document.querySelector(".background-for-popups");
const p_cls = document.querySelector(".button-close");
const p_clss = document.querySelectorAll(".button-close");

const all_t_n = document.querySelectorAll(".screen--four .nav-list .pitch");
const all_t_c = document.querySelectorAll(".screen--four .content-list .slide");

const fb_fo = document.getElementById("leadForm");
const fb_t = document.querySelector(".screen--six .thank-you");
const fb_f = document.querySelector(".screen--six .fail");

const hs_fo = document.getElementById("sysLead");
const hs_t = document.querySelector(".popup-help-accounting .thank-you");
const hs_f = document.querySelector(".popup-help-accounting .fail");

const hc_fo = document.getElementById("catalogLead");
const hc_t = document.querySelector(".popup-help-catalog .thank-you");
const hc_f = document.querySelector(".popup-help-catalog .fail");

const ho_fo = document.getElementById("optLead");
const ho_t = document.querySelector(".popup-help-cx .thank-you");
const ho_f = document.querySelector(".popup-help-cx .fail");

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

//

function againFeedback() {
    fb_t.classList.add("visual-hidden");
    fb_fo.classList.remove("visual-hidden");
    document.getElementById("feedback").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function SendFeedback(e) {
    e.preventDefault();
    
    let form = document.getElementById('leadForm');
    
    // This is a nice way of getting a list of checkable input elements
    // And converting them into an array so we can use map/filter/reduce functions:
    let inputs = [...form.querySelectorAll("input[data-rules]")];
    
    let valid = true;
    
    inputs.map((input) => {
        if (Iodine.is(input.value, JSON.parse(input.dataset.rules)) !== true) {
            input.classList.add("invalid");
          valid = false;
        } else {
            input.classList.remove("invalid");
        }
    });
    
    const TmpForm = Object.fromEntries(new FormData(form));

    console.log(TmpForm);
    
    if (valid) {        fetch(`http://localhost/sendlead.php?name=${TmpForm.name}&company=${TmpForm.company}&email=${TmpForm.email}&phone=${TmpForm.phone}&note=${TmpForm.comment}&type=${TmpForm.statement}&telegram=${TmpForm.telegram}`, {
            method: 'POST',
        }).then(function (response) {
            console.log(response);
            if (response.ok) {

                fb_fo.classList.add("visual-hidden");
                fb_t.classList.remove("visual-hidden");
                document.getElementById("feedback").scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                return response.json();
            } else {
                
                fb_fo.classList.add("visual-hidden");
                fb_f.classList.remove("visual-hidden");
                document.getElementById("feedback").scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                return Promise.reject(response);
            }
        }).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.warn(error);
        });
    } else {
        alert('Проверьте данные в полях, без корректных реквизитов мы не сможем с вами связаться');
        document.getElementById("feedback").scrollIntoView({
            behavior: 'smooth',
                    block: 'start'
        });
    }
}

function SendSys(e) {
    e.preventDefault();
    
    let form = document.getElementById('sysLead');
    
    // This is a nice way of getting a list of checkable input elements
    // And converting them into an array so we can use map/filter/reduce functions:
    let inputs = [...form.querySelectorAll("input[data-rules]")];
    
    let valid = true;
    
    inputs.map((input) => {
        if (Iodine.is(input.value, JSON.parse(input.dataset.rules)) !== true) {
            input.classList.add("invalid");
            valid = false;
        } else {
            input.classList.remove("invalid");
        }
    });
    
    const TmpForm = Object.fromEntries(new FormData(form));

    console.log(TmpForm);
    
    if (valid) {        fetch(`http://localhost/sendlead.php?name=${TmpForm.name}&www=${TmpForm.www}&phone=${TmpForm.phone}&count=${TmpForm.count}&type=4&telegram=${TmpForm.telegram}`, {
            method: 'POST',
        }).then(function (response) {
            console.log(response);
            if (response.ok) {

                hs_fo.classList.add("visual-hidden");
                hs_t.classList.remove("visual-hidden");
                
                return response.json();
            } else {
                
                hs_fo.classList.add("visual-hidden");
                hs_f.classList.remove("visual-hidden");
                
                return Promise.reject(response);
            }
        }).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.warn(error);
        });
    } else {
        alert('Проверьте данные в полях, без корректных реквизитов мы не сможем с вами связаться');
    }
}

function SendCat(e) {
    e.preventDefault();
    
    let form = document.getElementById('catalogLead');
    
    // This is a nice way of getting a list of checkable input elements
    // And converting them into an array so we can use map/filter/reduce functions:
    let inputs = [...form.querySelectorAll("input[data-rules]")];
    
    let valid = true;
    
    inputs.map((input) => {
        if (Iodine.is(input.value, JSON.parse(input.dataset.rules)) !== true) {
            input.classList.add("invalid");
          valid = false;
        } else {
            input.classList.remove("invalid");
        }
    });
    
    const TmpForm = Object.fromEntries(new FormData(form));

    console.log(TmpForm);
    
    if (valid) {        fetch(`http://localhost/sendlead.php?name=${TmpForm.name}&www=${TmpForm.www}&phone=${TmpForm.phone}&count=${TmpForm.count}&type=5&telegram=${TmpForm.telegram}`, {
            method: 'POST',
        }).then(function (response) {
            console.log(response);
            if (response.ok) {

                hc_fo.classList.add("visual-hidden");
                hc_t.classList.remove("visual-hidden");
                
                return response.json();
            } else {
                
                hc_fo.classList.add("visual-hidden");
                hc_f.classList.remove("visual-hidden");
                
                return Promise.reject(response);
            }
        }).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.warn(error);
        });
    }  else {
        alert('Проверьте данные в полях, без корректных реквизитов мы не сможем с вами связаться');
    }
}

function SendOpt(e) {
    e.preventDefault();
    
    let form = document.getElementById('optLead');
    
    // This is a nice way of getting a list of checkable input elements
    // And converting them into an array so we can use map/filter/reduce functions:
    let inputs = [...form.querySelectorAll("input[data-rules]")];
    
    let valid = true;
    
    inputs.map((input) => {
        if (Iodine.is(input.value, JSON.parse(input.dataset.rules)) !== true) {
            input.classList.add("invalid");
            valid = false;
        } else {
            input.classList.remove("invalid");
        }
    });
    
    const TmpForm = Object.fromEntries(new FormData(form));

    console.log(TmpForm);
    
    if (valid) {        fetch(`http://localhost/sendlead.php?name=${TmpForm.name}&www=${TmpForm.www}&phone=${TmpForm.phone}&count=${TmpForm.count}&type=6&telegram=${TmpForm.telegram}`, {
            method: 'POST',
        }).then(function (response) {
            console.log(response);
            if (response.ok) {

                ho_fo.classList.add("visual-hidden");
                ho_t.classList.remove("visual-hidden");
                
                return response.json();
            } else {
                
                ho_fo.classList.add("visual-hidden");
                ho_f.classList.remove("visual-hidden");
                
                return Promise.reject(response);
            }
        }).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.warn(error);
        });
    } else {
        alert('Проверьте данные в полях, без корректных реквизитов мы не сможем с вами связаться');
    }
}
