function initializeCustomSpacers() {
	createFontSettingsButton();
    createButtons();  // ایجاد دکمه‌ها قبل از بارگذاری کد event listeners
    createButtonGroups();  // ایجاد دکمه‌ها و گروه‌ها
    createDisplays(); // ایجاد نمایشگرها
    setButtonPositions(); // تنظیم موقعیت دکمه‌ها و نمایشگرها

    loadEventListenersScript();
}

function createCustomSpacers() {
    var containerDivs = document.querySelectorAll('.container > .ng-scope');
    var actualReportDivs = Array.from(containerDivs).filter(function(div, index) {
        return index % 2 === 0;
    });

    actualReportDivs.forEach(function(div) {
        var spacerBefore = document.createElement('div');
        spacerBefore.classList.add('custom-spacer', 'custom-spacer-top');
        spacerBefore.style.height = '0px';

        var spacerAfter = document.createElement('div');
        spacerAfter.classList.add('custom-spacer', 'custom-spacer-bottom');
        spacerAfter.style.height = '0px';

        div.parentNode.insertBefore(spacerBefore, div);
        var footerReport = div.querySelector('.panel-footer-report');
        if (footerReport) {
            footerReport.parentNode.insertBefore(spacerAfter, footerReport.nextSibling);
        }
    });
}

function createButtons() {
    // دکمه‌ها را به طور کلی تعریف می‌کنیم
    var buttons = [
        { id: 'increaseTopButton', text: 'افزایش فاصله بالا', color: 'green' },
        { id: 'decreaseTopButton', text: 'کاهش فاصله بالا', color: 'red' },
        { id: 'increaseBottomButton', text: 'افزایش فاصله پایین', color: 'blue' },
        { id: 'decreaseBottomButton', text: 'کاهش فاصله پایین', color: 'orange' },
        { id: 'increaseRightButton', text: 'افزایش فاصله راست', color: 'yellow' },
        { id: 'decreaseRightButton', text: 'کاهش فاصله راست', color: 'purple' },
        { id: 'increaseLeftButton', text: 'افزایش فاصله چپ', color: 'pink' },
        { id: 'decreaseLeftButton', text: 'کاهش فاصله چپ', color: 'brown' },

    ];

    buttons.forEach(function(btn) {
        var button = createButton(btn.text, btn.color);
        button.id = btn.id;
        document.body.appendChild(button);
    });
}

function createButton(text, color) {
    var button = document.createElement('button');
    button.textContent = text;
    button.style.position = 'fixed';
    button.style.zIndex = 9999;
    button.style.width = '120px';
    button.style.height = '35px';
    button.style.backgroundColor = color;
    button.style.color = 'white';
    button.style.opacity = '1';
    button.style.cursor = 'pointer';
    button.style.margin = '0';
    return button;
}
function createDisplays() {
    // نمایشگرها را به طور کلی تعریف می‌کنیم
    var displays = [
        { id: 'topHeightDisplay', colorTop: 'green', colorBottom: 'red' },
        { id: 'bottomHeightDisplay', colorTop: 'blue', colorBottom: 'orange' },
        { id: 'rightHeightDisplay', colorTop: 'yellow', colorBottom: 'purple' },
        { id: 'leftHeightDisplay', colorTop: 'pink', colorBottom: 'brown' }
    ];

    displays.forEach(function(disp) {
        var display = createHeightDisplay(disp.colorTop, disp.colorBottom);
        display.id = disp.id;
        document.body.appendChild(display);
    });
}

function createHeightDisplay(colorTop, colorBottom) {
    var display = document.createElement('div');
    display.style.position = 'fixed';
    display.style.zIndex = 9999;
    display.style.width = '30px';
    display.style.height = '70px';
    display.style.backgroundImage = `linear-gradient(${colorTop}, ${colorBottom})`;
    display.style.opacity = '0.8';
    display.style.color = 'black';
    display.style.textAlign = 'center';
    display.style.lineHeight = '70px';
    display.style.fontSize = '20px';
    return display;
}

function setButtonPositions() {
    var positions = [
        { id: 'increaseTopButton', top: '10px', left: '10px' },
        { id: 'decreaseTopButton', top: '45px', left: '10px' },
        { id: 'topHeightDisplay', top: '10px', left: '131px' },
        { id: 'increaseBottomButton', top: '85px', left: '10px' },
        { id: 'decreaseBottomButton', top: '120px', left: '10px' },
        { id: 'bottomHeightDisplay', top: '85px', left: '131px' },
        { id: 'increaseRightButton', top: '160px', left: '10px' },
        { id: 'decreaseRightButton', top: '195px', left: '10px' },
        { id: 'rightHeightDisplay', top: '160px', left: '131px' },
        { id: 'increaseLeftButton', top: '235px', left: '10px' },
        { id: 'decreaseLeftButton', top: '270px', left: '10px' },
        { id: 'leftHeightDisplay', top: '235px', left: '131px' },

    ];

    positions.forEach(function(pos) {
        var element = document.querySelector(`#${pos.id}`);
        setButtonPosition(element, pos.top, pos.left);
    });
}

function setButtonPosition(element, top, left) {
    element.style.top = top;
    element.style.left = left;
}
function loadEventListenersScript() {
    var script = document.createElement('script');
    script.src = 'http://localhost/000-sanjesh/addEventListeners.js';
    script.onload = function() {
        console.log('Event listeners script loaded successfully.');
    };
    script.onerror = function() {
        console.error('Failed to load event listeners script.');
    };
    document.body.appendChild(script);
}

// بلافاصله پس از لود، تابع initializeCustomSpacers فراخوانی می‌شود
initializeCustomSpacers();




// START FONT ------------------- >
function createFontSettingsButton() {
    var fontSettingsButton = document.createElement('button');
    fontSettingsButton.id = 'font-settings-button';
    fontSettingsButton.textContent = 'تنظیمات فونت';
    fontSettingsButton.style.position = 'fixed';
    fontSettingsButton.style.top = '10px';
    fontSettingsButton.style.right = '10px';
    fontSettingsButton.style.zIndex = '10000';
    fontSettingsButton.style.width = '120px';
    fontSettingsButton.style.height = '35px';
    fontSettingsButton.style.backgroundColor = 'blue';
    fontSettingsButton.style.color = 'white';
    fontSettingsButton.style.opacity = '1';
    fontSettingsButton.style.cursor = 'pointer';
    fontSettingsButton.style.display = 'none'; // در ابتدا مخفی
    fontSettingsButton.onclick = createButtonGroups;
    document.body.appendChild(fontSettingsButton);
}

function createButtonGroups() {
    // ایجاد دیو اصلی
    var buttonGroups = document.createElement('div');
    buttonGroups.id = 'button-groups';
    buttonGroups.style.position = 'fixed';
    buttonGroups.style.top = '50px';
    buttonGroups.style.right = '10px';
    buttonGroups.style.zIndex = '10000';
    buttonGroups.style.backgroundColor = 'white';
    buttonGroups.style.padding = '15px'; // افزایش پدینگ برای فضای بیشتر داخل دیو
    buttonGroups.style.border = '0px solid #ccc';
    buttonGroups.style.borderRadius = '5px';
    buttonGroups.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    buttonGroups.style.width = '120px'; // افزایش عرض دیو
    buttonGroups.style.boxSizing = 'border-box'; // اطمینان از اینکه محتوای داخل دیو از آن بیرون نمی‌زند

    // تابع برای ایجاد عناصر و افزودن آن‌ها به دیو اصلی
    function createElement(tag, className, innerHTML, parent) {
        var element = document.createElement(tag);
        element.className = className || '';
        element.innerHTML = innerHTML || '';
        if (parent) parent.appendChild(element);
        return element;
    }

    // ایجاد گروه اول
    var group1 = createElement('div', 'group', '', buttonGroups);
    createElement('div', 'group-title', 'فونت بالا', group1);

    // ردیف اول برای اندازه تیترها
    var row1 = createElement('div', 'row', '', group1);
    var spanElement = createElement('span', '', 'تیتر', row1);
    spanElement.style.width = '25px'; // تنظیم عرض `span`
    spanElement.style.marginRight = '5px'; 
    spanElement.style.display = 'inline-block'; // اطمینان از اینکه اندازه تنظیم شده اعمال می‌شود
    createElement('button', '', '+', row1).onclick = function() { increaseFontSizeTopMarklabel('fontSizeTopMarklabel'); };
    var decreaseButton1 = createElement('button', '', '-', row1);
    decreaseButton1.style.marginRight = '3px'; // افزودن مارجین راست 3 پیکسلی
    decreaseButton1.onclick = function() { decreaseFontSizeTopMarklabel('fontSizeTopMarklabel'); };
    createElement('div', '', ':', row1).id = 'fontSizeTopMarklabel';

    // ردیف دوم برای اندازه اطلاعات تیترها
    var row2 = createElement('div', 'row', '', group1);
    var spanElement2 = createElement('span', '', 'متن', row2);
    spanElement2.style.width = '25px'; // تنظیم عرض `span`
    spanElement2.style.marginRight = '5px'; 
    spanElement2.style.display = 'inline-block'; // اطمینان از اینکه اندازه تنظیم شده اعمال می‌شود
    createElement('button', '', '+', row2).onclick = function() { increaseFontSizeTopInfomark('fontSizeTopInfomark'); };
    var decreaseButton2 = createElement('button', '', '-', row2);
    decreaseButton2.style.marginRight = '3px'; // افزودن مارجین راست 3 پیکسلی
    decreaseButton2.onclick = function() { decreaseFontSizeTopInfomark('fontSizeTopInfomark'); };
    createElement('div', '', ':', row2).id = 'fontSizeTopInfomark';

    // ایجاد گروه دوم
    var group2 = createElement('div', 'group', '', buttonGroups);
    createElement('div', 'group-title', 'فونت وسط', group2);

    var row3 = createElement('div', 'row', '', group2);
    var spanElement3 = createElement('span', '', 'وسط', row3);
    spanElement3.style.width = '25px'; // تنظیم عرض `span`
    spanElement3.style.marginRight = '5px'; 
    spanElement3.style.display = 'inline-block'; // اطمینان از اینکه اندازه تنظیم شده اعمال می‌شود
    createElement('button', '', '+', row3).onclick = function() { increaseFontSizeMiddle('fontSizeMiddle'); };
    var decreaseButton3 = createElement('button', '', '-', row3);
    decreaseButton3.style.marginRight = '3px'; // افزودن مارجین راست 3 پیکسلی
    decreaseButton3.onclick = function() { decreaseFontSizeMiddle('fontSizeMiddle'); };
    createElement('div', '', ':', row3).id = 'fontSizeMiddle';

    // ایجاد گروه سوم
    var group3 = createElement('div', 'group', '', buttonGroups);
    createElement('div', 'group-title', 'فونت پایین', group3);

    // ردیف اول برای اندازه تیترهای پایین
    var row4 = createElement('div', 'row', '', group3);
    var spanElement4 = createElement('span', '', 'تیتر', row4);
    spanElement4.style.width = '25px'; // تنظیم عرض `span`
    spanElement4.style.marginRight = '5px'; 
    spanElement4.style.display = 'inline-block'; // اطمینان از اینکه اندازه تنظیم شده اعمال می‌شود
    createElement('button', '', '+', row4).onclick = function() { increaseFontSizeBottomMarklabel('fontSizeBottomMarklabel'); };
    var decreaseButton4 = createElement('button', '', '-', row4);
    decreaseButton4.style.marginRight = '3px'; // افزودن مارجین راست 3 پیکسلی
    decreaseButton4.onclick = function() { decreaseFontSizeBottomMarklabel('fontSizeBottomMarklabel'); };
    createElement('div', '', ':', row4).id = 'fontSizeBottomMarklabel';

    // ردیف دوم برای اندازه اطلاعات پایین
    // ایجاد ردیف جدید برای اندازه اطلاعات پایین
	var row5 = createElement('div', 'row', '', group3);
	var spanElement5 = createElement('span', '', 'متن', row5);
	spanElement5.style.width = '25px'; // تنظیم عرض `span`
	spanElement5.style.marginRight = '5px';
	spanElement5.style.display = 'inline-block'; // اطمینان از اینکه اندازه تنظیم شده اعمال می‌شود

	// دکمه افزایش اندازه فونت
	createElement('button', '', '+', row5).onclick = function() { increaseFontSizeBottomInfomark('fontSizeBottomInfomark'); };

	// دکمه کاهش اندازه فونت
	var decreaseButton5 = createElement('button', '', '-', row5);
	decreaseButton5.style.marginRight = '3px'; // افزودن مارجین راست 3 پیکسلی
	decreaseButton5.onclick = function() { decreaseFontSizeBottomInfomark('fontSizeBottomInfomark'); };

	// نمایش مقدار اندازه فونت
	createElement('div', '', ':', row5).id = 'fontSizeBottomInfomark';


    // دکمه بستن
    var closeButton = createElement('button', 'close-button', 'بستن دکمه‌ها', buttonGroups);
	closeButton.style.marginTop = '8px' ;
    closeButton.onclick = function() {
        buttonGroups.remove();
        document.getElementById('font-settings-button').style.display = 'block';
    };

    // افزودن دیو اصلی به بدنه صفحه
    document.body.appendChild(buttonGroups);
    document.getElementById('font-settings-button').style.display = 'none';
}






//START Amar Koli --------------------->
function increaseFontSizeTopMarklabelForAmarKoli(id) {
    var labels = document.querySelectorAll('thead .marklabel, thead .infomark');

    labels.forEach(function(label) {
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) + 1;
        label.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var element = document.getElementById(id);
        if (element) {
            element.textContent = ': ' + newFontSize ;
        }
    });
}

function decreaseFontSizeTopMarklabelForAmarKoli(id) {
    var labels = document.querySelectorAll('thead .marklabel, thead .infomark');

    labels.forEach(function(label) {
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) - 1;
        label.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var element = document.getElementById(id);
        if (element) {
            element.textContent = ': ' + newFontSize ;
        }
    });
}


function increaseFontSizeTopInfomarkForAmarKoli(id) {
    // انتخاب المان‌ها در داخل <thead>
    var labels = document.querySelectorAll('thead tr:nth-child(2) .infomark, thead label[ng-hide]');

    labels.forEach(function(label) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px
        
        // تنظیم اندازه جدید فونت
        label.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var element = document.getElementById(id);
        if (element) {
            element.textContent = ': ' + newFontSize ;
        }
    });
}
function decreaseFontSizeTopInfomarkForAmarKoli(id) {
    // انتخاب المان‌ها در داخل <thead>
    var labels = document.querySelectorAll('thead tr:nth-child(2) .infomark, thead label[ng-hide]');

    labels.forEach(function(label) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px
        
        // تنظیم اندازه جدید فونت
        label.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var element = document.getElementById(id);
        if (element) {
            element.textContent = ': ' + newFontSize ;
        }
    });
}

// MIdel --------------->
function increaseFontSizeMiddleForAmarKoli(id) {
    // انتخاب تمام <td> های داخل <tbody> در تگ <table class="table">
    var cells = document.querySelectorAll('table.table tbody td');
    var newFontSize;

    cells.forEach(function(cell) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(cell, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        cell.style.fontSize = newFontSize + 'px';
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var element = document.getElementById(id);
    if (element && newFontSize !== undefined) {
        element.textContent = ': ' + newFontSize ;
    }
}



function decreaseFontSizeMiddleForAmarKoli(id) {
    // انتخاب تمام <td> های داخل <tbody> در تگ <table class="table">
    var cells = document.querySelectorAll('table.table tbody td');
    var newFontSize;

    cells.forEach(function(cell) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(cell, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        cell.style.fontSize = newFontSize + 'px';
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var element = document.getElementById(id);
    if (element && newFontSize !== undefined) {
        element.textContent = ': ' + newFontSize ;
    }
}

// MIdel --------------->



//START footer ------------------------>
function increaseFontSizeBottomMarklabelForAmarKoli(id) {
    // انتخاب تمام <label class="marklabel"> و <span> ها در داخل <tfoot>
    var labels = document.querySelectorAll('tfoot .marklabel, tfoot span');
    var newFontSize;

    labels.forEach(function(label) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        label.style.fontSize = newFontSize + 'px';
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var element = document.getElementById(id);
    if (element && newFontSize !== undefined) {
        element.textContent = ': ' + newFontSize ;
    }
}



function decreaseFontSizeBottomMarklabelForAmarKoli(id) {
    // انتخاب تمام <label class="marklabel"> و <span> ها در داخل <tfoot>
    var labels = document.querySelectorAll('tfoot .marklabel, tfoot span');
    var newFontSize;

    labels.forEach(function(label) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        label.style.fontSize = newFontSize + 'px';
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var element = document.getElementById(id);
    if (element && newFontSize !== undefined) {
        element.textContent = ': ' + newFontSize ;
    }
}





function increaseFontSizeBottomInfomarkForAmarKoli(id) {
    // انتخاب تمام <label class="infomark"> در داخل <tfoot>
    var elements = document.querySelectorAll('tfoot .infomark');
    var newFontSize;

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        element.style.fontSize = newFontSize + 'px';
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var previewElement = document.getElementById(id);
    if (previewElement && newFontSize !== undefined) {
        previewElement.textContent = ': ' + newFontSize ;
    }
}


function decreaseFontSizeBottomInfomarkForAmarKoli(id) {
    // انتخاب تمام <label class="infomark"> در داخل <tfoot>
    var elements = document.querySelectorAll('tfoot .infomark');
    var newFontSize;

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        element.style.fontSize = newFontSize + 'px';
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var previewElement = document.getElementById(id);
    if (previewElement && newFontSize !== undefined) {
        previewElement.textContent = ': ' + newFontSize ;
    }
}

//END footer --------------------------<
//END Amar Koli ---------------------------------------<



//////////////////////////////////////////////////////////
//START Rookesh Koli ----------------------------------->

function increaseFontSizeTopMarklabelForRookeshKoli(id) {
    //var labels = document.querySelectorAll('thead .marklabel, thead .infomark');
	//var labels = document.querySelectorAll('#panel-print-rokesh .col-md-12 .marklabel, #panel-print-rokesh .col-md-12 .infomark');
	var labels = document.querySelectorAll('#panel-print-rokesh .col-md-12 .marklabel, #panel-print-rokesh .col-md-12 .infomark, #panel-print-rokesh .col-md-12 input.form-control');

    labels.forEach(function(label) {
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) + 1;
        label.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var element = document.getElementById(id);
        if (element) {
            element.textContent = ': ' + newFontSize ;
        }
    });
}

function decreaseFontSizeTopMarklabelForRookeshKoli(id) {
    //var labels = document.querySelectorAll('#panel-print-rokesh .col-md-12 .marklabel, #panel-print-rokesh .col-md-12 .infomark');
	var labels = document.querySelectorAll('#panel-print-rokesh .col-md-12 .marklabel, #panel-print-rokesh .col-md-12 .infomark, #panel-print-rokesh .col-md-12 input.form-control');

    labels.forEach(function(label) {
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) - 1;
        label.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var element = document.getElementById(id);
        if (element) {
            element.textContent = ': ' + newFontSize ;
        }
    });
}

function increaseFontSizeTopInfomarkForRookeshKoli(id) {
    // انتخاب المان‌ها در داخل <thead>
	var labels = document.querySelectorAll('#panel-print-rokesh label[ng-hide]');

    labels.forEach(function(label) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px
        
        // تنظیم اندازه جدید فونت
        label.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var element = document.getElementById(id);
        if (element) {
            element.textContent = ': ' + newFontSize ;
        }
    });
}
function decreaseFontSizeTopInfomarkForRookeshKoli(id) {
    // انتخاب المان‌ها در داخل <thead>
	var labels = document.querySelectorAll('#panel-print-rokesh label[ng-hide]');


    labels.forEach(function(label) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px
        
        // تنظیم اندازه جدید فونت
        label.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var element = document.getElementById(id);
        if (element) {
            element.textContent = ': ' + newFontSize ;
        }
    });
}
// MIdel ------------->
function increaseFontSizeMiddleForRookeshKoli(id) {
    // انتخاب تمام <td> های داخل <tbody> ها در <div id="panel-print-rokesh">
    var tbodies = document.querySelectorAll('#panel-print-rokesh tbody');
    var newFontSize;
    var element = document.getElementById(id);

    tbodies.forEach(function(tbody) {
        var cells = tbody.querySelectorAll('td');

        cells.forEach(function(cell) {
            // گرفتن اندازه فعلی فونت
            var currentFontSize = window.getComputedStyle(cell, null).getPropertyValue('font-size');
            newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px

            // تنظیم اندازه جدید فونت با استفاده از setProperty
            cell.style.setProperty('font-size', newFontSize + 'px', 'important');
        });
    });

    // نمایش مقدار جدید در پیش‌نمایش
    if (element && newFontSize !== undefined) {
        element.textContent = ': ' + newFontSize ;
    }
}

function decreaseFontSizeMiddleForRookeshKoli(id) {
    // انتخاب تمام <td> های داخل <tbody> ها در <div id="panel-print-rokesh">
    var tbodies = document.querySelectorAll('#panel-print-rokesh tbody');
    var newFontSize;
    var element = document.getElementById(id);

    tbodies.forEach(function(tbody) {
        var cells = tbody.querySelectorAll('td');

        cells.forEach(function(cell) {
            // گرفتن اندازه فعلی فونت
            var currentFontSize = window.getComputedStyle(cell, null).getPropertyValue('font-size');
            newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px

            // تنظیم اندازه جدید فونت با استفاده از setProperty
            cell.style.setProperty('font-size', newFontSize + 'px', 'important');
        });
    });

    // نمایش مقدار جدید در پیش‌نمایش
    if (element && newFontSize !== undefined) {
        element.textContent = ': ' + newFontSize ;
    }
}


// MIdel --------------->

//START footer ------------->
function increaseFontSizeBottomMarklabelForRookeshKoli(id) {
    // انتخاب تمام <label class="marklabel"> و <span> ها در داخل <tfoot>
    var labels = document.querySelectorAll('#panel-print-rokesh .row.p-3.panel-footer-report .marklabel, #panel-print-rokesh .row.p-3.panel-footer-report span');

    var newFontSize;

    labels.forEach(function(label) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        label.style.fontSize = newFontSize + 'px';
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var element = document.getElementById(id);
    if (element && newFontSize !== undefined) {
        element.textContent = ': ' + newFontSize ;
    }
}



function decreaseFontSizeBottomMarklabelForRookeshKoli(id) {
    // انتخاب تمام <label class="marklabel"> و <span> ها در داخل <tfoot>
     var labels = document.querySelectorAll('#panel-print-rokesh .row.p-3.panel-footer-report .marklabel, #panel-print-rokesh .row.p-3.panel-footer-report span');
    var newFontSize;

    labels.forEach(function(label) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        label.style.fontSize = newFontSize + 'px';
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var element = document.getElementById(id);
    if (element && newFontSize !== undefined) {
        element.textContent = ': ' + newFontSize ;
    }
}

function increaseFontSizeBottomInfomarkForRookeshKoli(id) {
    // انتخاب تمام <label class="infomark"> در داخل <tfoot>
    var elements = document.querySelectorAll('#panel-print-rokesh .panel-footer-report .infomark');
    var newFontSize;

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        element.style.fontSize = newFontSize + 'px';
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var previewElement = document.getElementById(id);
    if (previewElement && newFontSize !== undefined) {
        previewElement.textContent = ': ' + newFontSize ;
    }
}


function decreaseFontSizeBottomInfomarkForRookeshKoli(id) {
    // انتخاب تمام <label class="infomark"> در داخل <tfoot>
    var elements = document.querySelectorAll('#panel-print-rokesh .panel-footer-report .infomark');
    var newFontSize;

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        element.style.fontSize = newFontSize + 'px';
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var previewElement = document.getElementById(id);
    if (previewElement && newFontSize !== undefined) {
        previewElement.textContent = ': ' + newFontSize ;
    }
}
//END Rookesh Koli ----------------------------------->





////////////////////////////////////////////////
//START Rookesh Payeei ------------------------------->
function increaseFontSizeTopMarklabelForRookeshPayeei(id) {
    // انتخاب المان‌ها با استفاده از انتخابگرهای صحیح
    var elements = document.querySelectorAll('.panel-body-print .row .school-info.row .marklabel, .panel-body-print .row .school-info.row .infomark');

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        element.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var displayElement = document.getElementById(id);
        if (displayElement) {
            displayElement.textContent = ': ' + newFontSize ;
        }
    });
}


function decreaseFontSizeTopMarklabelForRookeshPayeei(id) {
    // انتخاب المان‌ها با استفاده از انتخابگرهای صحیح
    var elements = document.querySelectorAll('.panel-body-print .row .school-info.row .marklabel, .panel-body-print .row .school-info.row .infomark');

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        element.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var displayElement = document.getElementById(id);
        if (displayElement) {
            displayElement.textContent = ': ' + newFontSize ;
        }
    });
}







function increaseFontSizeTopInfomarkForRookeshPayeei(id) {
    // انتخاب المان‌ها در داخل <thead>
	var labels = document.querySelectorAll('.panel-body-print .col-md-12.row , .panel-body-print .col-md-6 label[ng-hide]');

    labels.forEach(function(label) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px
        
        // تنظیم اندازه جدید فونت
        label.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var element = document.getElementById(id);
        if (element) {
            element.textContent = ': ' + newFontSize ;
        }
    });
}
function decreaseFontSizeTopInfomarkForRookeshPayeei(id) {
    // انتخاب المان‌ها در داخل <thead>
	var labels = document.querySelectorAll('.panel-body-print .col-md-12.row , .panel-body-print .col-md-6 label[ng-hide]');

    labels.forEach(function(label) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px
        
        // تنظیم اندازه جدید فونت
        label.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var element = document.getElementById(id);
        if (element) {
            element.textContent = ': ' + newFontSize ;
        }
    });
}

// MIdel ------------->
function increaseFontSizeMiddleForRookeshPayeei(id) {
    // انتخاب تمام <td> های داخل <tbody> ها در <div id="panel-print-rokesh">
    var tbodies = document.querySelectorAll('.panel-body-print tbody');
    var newFontSize;
    var element = document.getElementById(id);

    tbodies.forEach(function(tbody) {
        var cells = tbody.querySelectorAll('td');

        cells.forEach(function(cell) {
            // گرفتن اندازه فعلی فونت
            var currentFontSize = window.getComputedStyle(cell, null).getPropertyValue('font-size');
            newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px

            // تنظیم اندازه جدید فونت با استفاده از setProperty
            cell.style.setProperty('font-size', newFontSize + 'px', 'important');
        });
    });

    // نمایش مقدار جدید در پیش‌نمایش
    if (element && newFontSize !== undefined) {
        element.textContent = ': ' + newFontSize ;
    }
}



function decreaseFontSizeMiddleForRookeshPayeei(id) {
    // انتخاب تمام <td> های داخل <tbody> ها در <div id="panel-print-rokesh">
    var tbodies = document.querySelectorAll('.panel-body-print tbody');
    var newFontSize;
    var element = document.getElementById(id);

    tbodies.forEach(function(tbody) {
        var cells = tbody.querySelectorAll('td');

        cells.forEach(function(cell) {
            // گرفتن اندازه فعلی فونت
            var currentFontSize = window.getComputedStyle(cell, null).getPropertyValue('font-size');
            newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px

            // تنظیم اندازه جدید فونت با استفاده از setProperty
            cell.style.setProperty('font-size', newFontSize + 'px', 'important');
        });
    });

    // نمایش مقدار جدید در پیش‌نمایش
    if (element && newFontSize !== undefined) {
        element.textContent = ': ' + newFontSize ;
    }
}


// MIdel --------------->



//START footer ------------->
function increaseFontSizeBottomMarklabelForRookeshPayeei(id) {
    // انتخاب تمام <label class="marklabel"> و <span> ها در داخل <div class="col-md-12 panel-body-print"> و <div class="row p-3 panel-footer-report">
    var elements = document.querySelectorAll('.panel-body-print .row.p-3.panel-footer-report .marklabel, .panel-body-print .row.p-3.panel-footer-report span');
    var newFontSize;

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        element.style.fontSize = newFontSize + 'px';
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var displayElement = document.getElementById(id);
    if (displayElement && newFontSize !== undefined) {
        displayElement.textContent = ': ' + newFontSize + 'px';
    }
}




function decreaseFontSizeBottomMarklabelForRookeshPayeei(id) {
    // انتخاب تمام <label class="marklabel"> و <span> ها در داخل <div class="col-md-12 panel-body-print"> و <div class="row p-3 panel-footer-report">
    var elements = document.querySelectorAll('.panel-body-print .row.p-3.panel-footer-report .marklabel, .panel-body-print .row.p-3.panel-footer-report span');
    var newFontSize;

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        element.style.fontSize = newFontSize + 'px';
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var displayElement = document.getElementById(id);
    if (displayElement && newFontSize !== undefined) {
        displayElement.textContent = ': ' + newFontSize + 'px';
    }
}






function increaseFontSizeBottomInfomarkForRookeshPayeei(id) {
    // انتخاب تمام <label class="infomark"> در داخل <tfoot>
    var elements = document.querySelectorAll('.panel-body-print .row.p-3.panel-footer-report .infomark');
    var newFontSize;

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        element.style.fontSize = newFontSize + 'px';
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var previewElement = document.getElementById(id);
    if (previewElement && newFontSize !== undefined) {
        previewElement.textContent = ': ' + newFontSize ;
    }
}


function decreaseFontSizeBottomInfomarkForRookeshPayeei(id) {
    // انتخاب تمام <label class="infomark"> در داخل <tfoot>
    var elements = document.querySelectorAll('.panel-body-print .row.p-3.panel-footer-report .infomark');
    var newFontSize;

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        element.style.fontSize = newFontSize + 'px';
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var previewElement = document.getElementById(id);
    if (previewElement && newFontSize !== undefined) {
        previewElement.textContent = ': ' + newFontSize ;
    }
}
//END Rookesh Payeei ---------------------------------<





//////////////////////////////////////////////
//START polomp -------------------------------->
function increaseFontSizeTopMarklabelForPolomp(id) {
    // انتخاب المان‌ها با استفاده از انتخابگرهای صحیح
    var elements = document.querySelectorAll('.panel-body-print .row .school-info-first-page .marklabel, .panel-body-print .row .school-info-first-page .infomark');

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        element.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var displayElement = document.getElementById(id);
        if (displayElement) {
            displayElement.textContent = ': ' + newFontSize ;
        }
    });
}


function decreaseFontSizeTopMarklabelForPolomp(id) {
    // انتخاب المان‌ها با استفاده از انتخابگرهای صحیح
    var elements = document.querySelectorAll('.panel-body-print .row .school-info-first-page .marklabel, .panel-body-print .row .school-info-first-page .infomark');

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت
        element.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var displayElement = document.getElementById(id);
        if (displayElement) {
            displayElement.textContent = ': ' + newFontSize ;
        }
    });
}







function increaseFontSizeTopInfomarkForPolomp(id) {
    // انتخاب المان‌ها در داخل <thead>
	var labels = document.querySelectorAll('.panel-body-print .row label[ng-hide] ');

    labels.forEach(function(label) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px
        
        // تنظیم اندازه جدید فونت
        label.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var element = document.getElementById(id);
        if (element) {
            element.textContent = ': ' + newFontSize ;
        }
    });
}
function decreaseFontSizeTopInfomarkForPolomp(id) {
    // انتخاب المان‌ها در داخل <thead>
	var labels = document.querySelectorAll('.panel-body-print .row label[ng-hide] ');

    labels.forEach(function(label) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(label, null).getPropertyValue('font-size');
        var newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px
        
        // تنظیم اندازه جدید فونت
        label.style.fontSize = newFontSize + 'px';

        // نمایش مقدار جدید در پیش‌نمایش
        var element = document.getElementById(id);
        if (element) {
            element.textContent = ': ' + newFontSize ;
        }
    });
}

// MIdel ------------->
function increaseFontSizeMiddleForPolomp(id) {
    // انتخاب تمام <td> های داخل <tbody> ها در <div id="panel-print-rokesh">
    var tbodies = document.querySelectorAll('.panel-body-print tbody');
    var newFontSize;
    var element = document.getElementById(id);

    tbodies.forEach(function(tbody) {
        var cells = tbody.querySelectorAll('td');

        cells.forEach(function(cell) {
            // گرفتن اندازه فعلی فونت
            var currentFontSize = window.getComputedStyle(cell, null).getPropertyValue('font-size');
            newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px

            // تنظیم اندازه جدید فونت با استفاده از setProperty
            cell.style.setProperty('font-size', newFontSize + 'px', 'important');
        });
    });

    // نمایش مقدار جدید در پیش‌نمایش
    if (element && newFontSize !== undefined) {
        element.textContent = ': ' + newFontSize ;
    }
}



function decreaseFontSizeMiddleForPolomp(id) {
    // انتخاب تمام <td> های داخل <tbody> ها در <div id="panel-print-rokesh">
    var tbodies = document.querySelectorAll('.panel-body-print tbody');
    var newFontSize;
    var element = document.getElementById(id);

    tbodies.forEach(function(tbody) {
        var cells = tbody.querySelectorAll('td');

        cells.forEach(function(cell) {
            // گرفتن اندازه فعلی فونت
            var currentFontSize = window.getComputedStyle(cell, null).getPropertyValue('font-size');
            newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px

            // تنظیم اندازه جدید فونت با استفاده از setProperty
            cell.style.setProperty('font-size', newFontSize + 'px', 'important');
        });
    });

    // نمایش مقدار جدید در پیش‌نمایش
    if (element && newFontSize !== undefined) {
        element.textContent = ': ' + newFontSize ;
    }
}


// MIdel --------------->



//START footer ------------->
function increaseFontSizeBottomMarklabelForPolomp(id) {
    // انتخاب تمام <label class="marklabel"> و <span> ها در داخل <div class="col-md-12 panel-body-print"> و <div class="row p-3 panel-footer-report">
    var elements = document.querySelectorAll('div.col-md-12.panel-body-print label.marklabel, div.col-md-12.panel-body-print span, div.row.p-3.panel-footer-report label.marklabel, div.row.p-3.panel-footer-report span');
    var newFontSize;

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت با استفاده از setProperty
        element.style.setProperty('font-size', newFontSize + 'px', 'important');
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var displayElement = document.getElementById(id);
    if (displayElement && newFontSize !== undefined) {
        displayElement.textContent = ': ' + newFontSize + 'px';
    }
}




function decreaseFontSizeBottomMarklabelForPolomp(id) {
    // انتخاب تمام <label class="marklabel"> و <span> ها در داخل <div class="col-md-12 panel-body-print"> و <div class="row p-3 panel-footer-report">
    var elements = document.querySelectorAll('div.col-md-12.panel-body-print label.marklabel, div.col-md-12.panel-body-print span, div.row.p-3.panel-footer-report label.marklabel, div.row.p-3.panel-footer-report span');
    var newFontSize;

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت با استفاده از setProperty
        element.style.setProperty('font-size', newFontSize + 'px', 'important');
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var displayElement = document.getElementById(id);
    if (displayElement && newFontSize !== undefined) {
        displayElement.textContent = ': ' + newFontSize + 'px';
    }
}


 


function increaseFontSizeBottomInfomarkForPolomp(id) {
    // انتخاب تمام <td> ها در داخل <thead> که زیرمجموعه <div class="panel-body-print"> هستند
    var elements = document.querySelectorAll('.panel-body-print thead td');
    var newFontSize = 0;

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) + 1; // افزایش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت با استفاده از setProperty و اضافه کردن !important
        element.style.setProperty('font-size', newFontSize + 'px', 'important');
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var previewElement = document.getElementById(id);
    if (previewElement && elements.length > 0) {
        previewElement.textContent = ': ' + newFontSize + 'px';
    }
}




function decreaseFontSizeBottomInfomarkForPolomp(id) {
    // انتخاب تمام <td> ها در داخل <thead> که زیرمجموعه <div class="panel-body-print"> هستند
    var elements = document.querySelectorAll('.panel-body-print thead td');
    var newFontSize;

    elements.forEach(function(element) {
        // گرفتن اندازه فعلی فونت
        var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        newFontSize = parseFloat(currentFontSize) - 1; // کاهش اندازه فونت به اندازه 1px

        // تنظیم اندازه جدید فونت با استفاده از setProperty و اضافه کردن !important
        element.style.setProperty('font-size', newFontSize + 'px', 'important');
    });

    // نمایش مقدار جدید در پیش‌نمایش
    var previewElement = document.getElementById(id);
    if (previewElement && newFontSize !== undefined) {
        previewElement.textContent = ': ' + newFontSize + 'px';
    }
}

//END polomp ----------------------------------<
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




// START events listener ---------------------------->
function increaseFontSizeTopMarklabel(id) {
    var blockName = identifyBlock();
    switch (blockName) {
        case 'daftsrNatayej':
            adjustFontSizeForDaftsrNatayej('topMarklabel');
            break;
        case 'sarbarg':
            adjustFontSizeForSarbarg('topMarklabel');
            break;
        case 'rookeshKoli':
            increaseFontSizeTopMarklabelForRookeshKoli(id);
            break;
        case 'rookeshPayeei':
            increaseFontSizeTopMarklabelForRookeshPayeei(id);
            break;
        case 'polomp':
            increaseFontSizeTopMarklabelForPolomp(id);
            break;
        case 'amarKoli':
            increaseFontSizeTopMarklabelForAmarKoli(id);
            break;
        // موارد دیگر
    }
}

function decreaseFontSizeTopMarklabel(id) {
    var blockName = identifyBlock();
    switch (blockName) {
        case 'daftsrNatayej':
            adjustFontSizeForDaftsrNatayej('topMarklabel');
            break;
        case 'sarbarg':
            adjustFontSizeForSarbarg('topMarklabel');
            break;
        case 'rookeshKoli':
            decreaseFontSizeTopMarklabelForRookeshKoli(id);
            break;
        case 'rookeshPayeei':
            decreaseFontSizeTopMarklabelForRookeshPayeei(id);
            break;
        case 'polomp':
            decreaseFontSizeTopMarklabelForPolomp(id);
            break;
        case 'amarKoli':
            decreaseFontSizeTopMarklabelForAmarKoli(id);
            break;
        // موارد دیگر
    }
}




function increaseFontSizeTopInfomark(id) {
	var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                adjustFontSizeForDaftsrNatayej('topMarklabel');
                break;
            case 'sarbarg':
                adjustFontSizeForSarbarg('topMarklabel');
                break;
            case 'rookeshKoli':
                increaseFontSizeTopInfomarkForRookeshKoli(id);
                break;
            case 'rookeshPayeei':
                increaseFontSizeTopInfomarkForRookeshPayeei(id);
                break;
            case 'polomp':
                increaseFontSizeTopInfomarkForPolomp(id);
                break;
            case 'amarKoli':
                increaseFontSizeTopInfomarkForAmarKoli(id);
                break;
            // موارد دیگر
        }
}

function decreaseFontSizeTopInfomark(id) {
	var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                adjustFontSizeForDaftsrNatayej('topMarklabel');
                break;
            case 'sarbarg':
                adjustFontSizeForSarbarg('topMarklabel');
                break;
            case 'rookeshKoli':
                decreaseFontSizeTopInfomarkForRookeshKoli(id);
                break;
            case 'rookeshPayeei':
                decreaseFontSizeTopInfomarkForRookeshPayeei(id);
                break;
            case 'polomp':
                decreaseFontSizeTopInfomarkForPolomp(id);
                break;
            case 'amarKoli':
                decreaseFontSizeTopInfomarkForAmarKoli(id);
                break;
            // موارد دیگر
        }
}

// Midel -------->
function increaseFontSizeMiddle(id) {
	var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                adjustFontSizeForDaftsrNatayej('topMarklabel');
                break;
            case 'sarbarg':
                adjustFontSizeForSarbarg('topMarklabel');
                break;
            case 'rookeshKoli':
                increaseFontSizeMiddleForRookeshKoli(id);
                break;
            case 'rookeshPayeei':
                increaseFontSizeMiddleForRookeshPayeei(id);
                break;
            case 'polomp':
                increaseFontSizeMiddleForPolomp(id);
                break;
            case 'amarKoli':
                increaseFontSizeMiddleForAmarKoli(id);
                break;
            // موارد دیگر
        }
}
function decreaseFontSizeMiddle(id) {
	var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                adjustFontSizeForDaftsrNatayej('topMarklabel');
                break;
            case 'sarbarg':
                adjustFontSizeForSarbarg('topMarklabel');
                break;
            case 'rookeshKoli':
                decreaseFontSizeMiddleForRookeshKoli(id);
                break;
            case 'rookeshPayeei':
                decreaseFontSizeMiddleForRookeshPayeei(id);
                break;
            case 'polomp':
                decreaseFontSizeMiddleForPolomp(id);
                break;
            case 'amarKoli':
                decreaseFontSizeMiddleForAmarKoli(id);
                break;
            // موارد دیگر
        }
}
// Midel -------->

//START footer
function increaseFontSizeBottomMarklabel(id) {
	var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                adjustFontSizeForDaftsrNatayej('topMarklabel');
                break;
            case 'sarbarg':
                adjustFontSizeForSarbarg('topMarklabel');
                break;
            case 'rookeshKoli':
                increaseFontSizeBottomMarklabelForRookeshKoli(id);
                break;
            case 'rookeshPayeei':
                increaseFontSizeBottomMarklabelForRookeshPayeei(id);
                break;
            case 'polomp':
                increaseFontSizeBottomMarklabelForPolomp(id);
                break;
            case 'amarKoli':
                increaseFontSizeBottomMarklabelForAmarKoli(id);
                break;
            // موارد دیگر
        }
}
function decreaseFontSizeBottomMarklabel(id) {
	var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                adjustFontSizeForDaftsrNatayej('topMarklabel');
                break;
            case 'sarbarg':
                adjustFontSizeForSarbarg('topMarklabel');
                break;
            case 'rookeshKoli':
                decreaseFontSizeBottomMarklabelForRookeshKoli(id);
                break;
            case 'rookeshPayeei':
                decreaseFontSizeBottomMarklabelForRookeshPayeei(id);
                break;
            case 'polomp':
                decreaseFontSizeBottomMarklabelForPolomp(id);
                break;
            case 'amarKoli':
                decreaseFontSizeBottomMarklabelForAmarKoli(id);
                break;
            // موارد دیگر
        }
}

//---------------
function increaseFontSizeBottomInfomark(id) {
	var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                adjustFontSizeForDaftsrNatayej('topMarklabel');
                break;
            case 'sarbarg':
                adjustFontSizeForSarbarg('topMarklabel');
                break;
            case 'rookeshKoli':
                increaseFontSizeBottomInfomarkForRookeshKoli(id);
                break;
            case 'rookeshPayeei':
                increaseFontSizeBottomInfomarkForRookeshPayeei(id);
                break;
            case 'polomp':
                increaseFontSizeBottomInfomarkForPolomp('topMarklabel');
                break;
            case 'amarKoli':
                increaseFontSizeBottomInfomarkForAmarKoli(id);
                break;
            // موارد دیگر
        }
}
function decreaseFontSizeBottomInfomark(id) {
	var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                adjustFontSizeForDaftsrNatayej('topMarklabel');
                break;
            case 'sarbarg':
                adjustFontSizeForSarbarg('topMarklabel');
                break;
            case 'rookeshKoli':
                decreaseFontSizeBottomInfomarkForRookeshKoli(id);
                break;
            case 'rookeshPayeei':
                decreaseFontSizeBottomInfomarkForRookeshPayeei(id);
                break;
            case 'polomp':
                decreaseFontSizeBottomInfomarkForPolomp(id);
                break;
            case 'amarKoli':
                decreaseFontSizeBottomInfomarkForAmarKoli(id);
                break;
            // موارد دیگر
        }
}
//END footer







// END events leasener ---------------------------<









// تابع برای افزایش اندازه فونت
/*function increaseFontSize(id) {
    var element = document.getElementById(id);
    var currentSize = parseInt(element.textContent.replace(': ', '')) || 0;
    element.textContent = ': ' + (currentSize + 1);
}

// تابع برای کاهش اندازه فونت
function decreaseFontSize(id) {
    var element = document.getElementById(id);
    var currentSize = parseInt(element.textContent.replace('اندازه: ', '')) || 0;
    element.textContent = ': ' + (currentSize - 1);
}
// تابع برای افزایش اندازه فونت
function increaseFontSize(id) {
    var element = document.getElementById(id);
    var currentSize = parseInt(element.textContent.replace('اندازه: ', '')) || 0;
    element.textContent = ': ' + (currentSize + 1);
}

// تابع برای کاهش اندازه فونت
function decreaseFontSize(id) {
    var element = document.getElementById(id);
    var currentSize = parseInt(element.textContent.replace('اندازه: ', '')) || 0;
    element.textContent = ': ' + (currentSize - 1);
}**/


// END fonts


