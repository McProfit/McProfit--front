var modalOverlay = document.querySelector(".modal-overlay");
var modalBtnCloseOne = document.getElementById("closebtnOne");
var modalBtnCloseTwo = document.getElementById("closebtnTwo");
var modalPolicy = document.getElementById("policy");
var modalPortfolio = document.getElementById("portfolio");
var PortfoSofa = document.getElementById("portfolio-sofa");
var PortfoSofaNav = document.getElementById("portfolio-sofa-nav");
var PortfoChair = document.getElementById("portfolio-chair");
var PortfoChairNav = document.getElementById("portfolio-chair-nav");
var PortfoCouch = document.getElementById("portfolio-couch");
var PortfoCouchNav = document.getElementById("portfolio-couch-nav");
var PortfoPuf = document.getElementById("portfolio-puf");
var PortfoPufNav = document.getElementById("portfolio-puf-nav");
var lazyloadImages = document.querySelectorAll("img.lazy");

    
function GoToCalc() {
    document.getElementById("calc").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function GoToConsult() {
    document.getElementById("feedback").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function PortfoToggle (id) {
    switch (id) {
    case 1:
        PortfoSofaNav.classList.add("active-link");
        PortfoSofa.classList.remove("visual-hidden");
        PortfoChairNav.classList.remove("active-link");
        PortfoChair.classList.add("visual-hidden");
        PortfoCouchNav.classList.remove("active-link");
        PortfoCouch.classList.add("visual-hidden");
        PortfoPufNav.classList.remove("active-link");
        PortfoPuf.classList.add("visual-hidden");
        break;
    case 2:
        PortfoSofaNav.classList.remove("active-link");
        PortfoSofa.classList.add("visual-hidden");
        PortfoChairNav.classList.add("active-link");
        PortfoChair.classList.remove("visual-hidden");
        PortfoCouchNav.classList.remove("active-link");
        PortfoCouch.classList.add("visual-hidden");
        PortfoPufNav.classList.remove("active-link");
        PortfoPuf.classList.add("visual-hidden");

        var imgList = document.getElementById('portfolio-chair-div').querySelectorAll("img.lazy");

        imgList.forEach(function(img) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
        break;
    case 3:
        PortfoSofaNav.classList.remove("active-link");
        PortfoSofa.classList.add("visual-hidden");
        PortfoChairNav.classList.remove("active-link");
        PortfoChair.classList.add("visual-hidden");
        PortfoCouchNav.classList.add("active-link");
        PortfoCouch.classList.remove("visual-hidden");
        PortfoPufNav.classList.remove("active-link");
        PortfoPuf.classList.add("visual-hidden");

        var imgList = document.getElementById('portfolio-couch-div').querySelectorAll("img.lazy");
        
        imgList.forEach(function(img) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
        
        break;
    case 4:
        PortfoSofaNav.classList.remove("active-link");
        PortfoSofa.classList.add("visual-hidden");
        PortfoChairNav.classList.remove("active-link");
        PortfoChair.classList.add("visual-hidden");
        PortfoCouchNav.classList.remove("active-link");
        PortfoCouch.classList.add("visual-hidden");
        PortfoPufNav.classList.add("active-link");
        PortfoPuf.classList.remove("visual-hidden");

        var imgList = document.getElementById('portfolio-puf-div').querySelectorAll("img.lazy");
        
        imgList.forEach(function(img) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
        
        break;
    }
}

function showPolicy() {
    modalPolicy.classList.remove("visual-hidden");
    modalOverlay.classList.remove("visual-hidden");
}

function showPortfo() {
    modalPortfolio.classList.remove("visual-hidden");
    modalOverlay.classList.remove("visual-hidden");
    
    var imgList = document.getElementById('portfolio-sofa-div').querySelectorAll("img.lazy");

    imgList.forEach(function(img) {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
    });
}

function closeBtnPressed () {
    modalBtnCloseOne.classList.toggle("change");
    modalBtnCloseTwo.classList.toggle("change");
    setTimeout(function() {
	    modalPolicy.classList.add("visual-hidden");
        modalPortfolio.classList.add("visual-hidden");
        modalBtnCloseOne.classList.toggle("change");
        modalBtnCloseTwo.classList.toggle("change");
    }, 400);
    modalOverlay.classList.add("visual-hidden");
}

modalOverlay.addEventListener("click", function () { // Если клацнули на подложку
    modalBtnCloseOne.classList.toggle("change");
    modalBtnCloseTwo.classList.toggle("change");
	setTimeout(function() {
	    modalPolicy.classList.add("visual-hidden");
        modalPortfolio.classList.add("visual-hidden");
        modalBtnCloseOne.classList.toggle("change");
        modalBtnCloseTwo.classList.toggle("change");
	}, 400);
    modalOverlay.classList.add("visual-hidden");
});

window.addEventListener("keydown", function (evt) { // Если нажата клавиша эскейп, прячем модалку
    if (evt.keyCode === 27) {
	    if (!modalPolicy.classList.contains("visual-hidden")) {
	        evt.preventDefault();
            modalBtnCloseOne.classList.toggle("change");        
	        setTimeout(function() {
		        modalPolicy.classList.add("visual-hidden");
                modalBtnCloseOne.classList.toggle("change");
	        }, 400);
	        modalOverlay.classList.toggle("visual-hidden");
	    } else if (!modalPortfolio.classList.contains("visual-hidden")) {
	        evt.preventDefault();
            modalBtnCloseTwo.classList.toggle("change");
	        setTimeout(function() {
                modalPortfolio.classList.add("visual-hidden");
                modalBtnCloseTwo.classList.toggle("change");
	        }, 400);
	        modalOverlay.classList.toggle("visual-hidden");
	    }
    }
});


function postAjax(url, data, success) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
	    function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
    ).join('&');
    
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
	    if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
}

document.getElementById("sendFormBtn").addEventListener("click", function(evt){
    evt.preventDefault();
    
    var feedback = document.getElementById('subfeedback');
    var thank = document.getElementById('thank');
    var name = document.forms["getMasterForm"].elements["name"].value;
    var phone = document.forms["getMasterForm"].elements["phone"].value;
    
    if (name && phone) {
	    postAjax('/params.php','fur=17'+'&phone='+phone+'&name='+name, function(data) {
	        //console.log(data);
	        if (data == "\r\nok") {
                feedback.classList.add("visual-hidden");
                thank.classList.remove("visual-hidden");
	        } else {
		        alert('Извините, во время отправки заявки произошла ошибка. Попробуйте повторить попытку позже или лучше позвоните на наш контактный телефон: + 375 29 181 60 21');
	        }
	       })
    } else {
        alert('Для начала вам нужно ввести своё имя и номер телефона!');
    }
})
