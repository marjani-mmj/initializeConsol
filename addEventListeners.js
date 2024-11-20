var buttons = {
    increaseTop: document.querySelector('#increaseTopButton'),
    decreaseTop: document.querySelector('#decreaseTopButton'),
    increaseBottom: document.querySelector('#increaseBottomButton'),
    decreaseBottom: document.querySelector('#decreaseBottomButton'),
    increaseRight: document.querySelector('#increaseRightButton'),
    decreaseRight: document.querySelector('#decreaseRightButton'),
    increaseLeft: document.querySelector('#increaseLeftButton'),
    decreaseLeft: document.querySelector('#decreaseLeftButton')
};

var displays = {
    topHeight: document.querySelector('#topHeightDisplay'),
    bottomHeight: document.querySelector('#bottomHeightDisplay'),
    rightHeight: document.querySelector('#rightHeightDisplay'),
    leftHeight: document.querySelector('#leftHeightDisplay')
};

function checkAndCreateSpacers() {
    var topSpacer = document.querySelector('.custom-spacer-top');
    var bottomSpacer = document.querySelector('.custom-spacer-bottom');

    if (!topSpacer || !bottomSpacer) {
        createCustomSpacers();
    }
}

function adjustSpacing(selector, amount, display) {
    var elements = document.querySelectorAll(selector);

    elements.forEach(function(spacer) {
        var currentHeight = parseInt(spacer.style.height) || 0;
        var newHeight = Math.max(0, currentHeight + amount);
        spacer.style.height = newHeight + 'px';
    });

    var exampleSpacer = document.querySelector(selector);
    if (exampleSpacer) {
        display.textContent = parseInt(exampleSpacer.style.height);
    }
}

function adjustRightMargin(amount) {
    var blocks = document.querySelectorAll('.ng-scope[ng-repeat="rowItem in model.ksarnamehs"]');
    var display = displays.rightHeight;
    var newMargin = 0;

    blocks.forEach(function(block) {
        var currentMargin = parseInt(window.getComputedStyle(block).marginRight) || 0;
        newMargin = currentMargin + amount;
        block.style.marginRight = newMargin + 'px';
    });

    if (display) {
        display.textContent = newMargin;
    }
}

function adjustLeftMargin(amount) {
    var blocks = document.querySelectorAll('.ng-scope[ng-repeat="rowItem in model.ksarnamehs"]');
    var display = displays.leftHeight;
    var newMargin = 0;

    blocks.forEach(function(block) {
        var currentMargin = parseInt(window.getComputedStyle(block).marginLeft) || 0;
        newMargin = currentMargin + amount;
        block.style.marginLeft = newMargin + 'px';
    });

    if (display) {
        display.textContent = newMargin;
    }
}




function identifyBlock() {
    var elements = document.querySelectorAll('body *'); // انتخاب تمام المان‌های داخل بدنه

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (element.matches('.container > .ng-scope')) {
            return 'daftsrNatayej';
        } else if (element.matches('.modal-body.main > .col-md-12.p-0.m-0.panel-body-print') && !element.querySelector('table.table.table-bordered.table-striped')) {
            return 'sarbarg';
        } else if (element.matches('#panel-print-rokesh > .col-md-12.p-0.m-0.panel-body-print.main')) {
            return 'rookeshKoli';
        } else if (element.matches('.col-md-12.panel-body-print > .ng-scope[ng-repeat="items in item"]')) {
            return 'rookeshPayeei';
        } else if (element.matches('.modal-body.main#print-content > .col-md-12.main.panel-body-print')) {
            return 'polomp';
        } else if (element.matches('.modal-body.main#print-content > .col-md-12.p-0.m-0.panel-body-print.panel-total-row > table.table.table-bordered.table-striped')) {
            return 'amarKoli';
        }
    }

    // اگر هیچ یک از شرایط مطابقت نداشتند، شماره ۰ برگردانده می‌شود
    return 0;
}


// START sarbarg -------------------------->
function increaseTopMarginForSarbarg() {
    var element = document.querySelector('.modal-body');
    var display = displays.topHeight;
    var currentMargin = parseInt(window.getComputedStyle(element).marginTop) || 0;
    var newMargin = currentMargin + 5;
    element.style.marginTop = newMargin + 'px';
    display.textContent = newMargin;
}

function decreaseTopMarginForSarbarg() {
    var element = document.querySelector('.modal-body');
    var display = displays.topHeight;
    var currentMargin = parseInt(window.getComputedStyle(element).marginTop) || 0;
    var newMargin = currentMargin - 5;
    element.style.marginTop = newMargin + 'px';
    display.textContent = newMargin;
}

function increaseBottomMarginForSarbarg() {
    var element = document.querySelector('.modal-body');
    var display = displays.bottomHeight;
    var currentMargin = parseInt(window.getComputedStyle(element).marginBottom) || 0;
    var newMargin = currentMargin + 5;
    element.style.marginBottom = newMargin + 'px';
    display.textContent = newMargin;
}

function decreaseBottomMarginForSarbarg() {
    var element = document.querySelector('.modal-body');
    var display = displays.bottomHeight;
    var currentMargin = parseInt(window.getComputedStyle(element).marginBottom) || 0;
    var newMargin = currentMargin - 5;
    element.style.marginBottom = newMargin + 'px';
    display.textContent = newMargin;
}

function increaseRightMarginForSarbarg() {
    var element = document.querySelector('.modal-body');
    var display = displays.rightHeight;
    var currentMargin = parseInt(window.getComputedStyle(element).marginRight) || 0;
    var newMargin = currentMargin + 5;
    element.style.marginRight = newMargin + 'px';
    display.textContent = newMargin;
}

function decreaseRightMarginForSarbarg() {
    var element = document.querySelector('.modal-body');
    var display = displays.rightHeight;
    var currentMargin = parseInt(window.getComputedStyle(element).marginRight) || 0;
    var newMargin = currentMargin - 5;
    element.style.marginRight = newMargin + 'px';
    display.textContent = newMargin;
}

function increaseLeftMarginForSarbarg() {
    var element = document.querySelector('.modal-body');
    var display = displays.leftHeight;
    var currentMargin = parseInt(window.getComputedStyle(element).marginLeft) || 0;
    var newMargin = currentMargin + 5;
    element.style.marginLeft = newMargin + 'px';
    display.textContent = newMargin;
}

function decreaseLeftMarginForSarbarg() {
    var element = document.querySelector('.modal-body');
    var display = displays.leftHeight;
    var currentMargin = parseInt(window.getComputedStyle(element).marginLeft) || 0;
    var newMargin = currentMargin - 5;
    element.style.marginLeft = newMargin + 'px';
    display.textContent = newMargin;
}

// END sarbarg --------------------------<



// START rookeshKoli ------------------------>

function increaseTopMarginForRookeshKoli() {
    var element = document.querySelector('#panel-print-rokesh');
    var display = displays.topHeight;
    if (!element) {
        console.error('Element not found');
        return;
    }
    console.log('Element found:', element);
    var currentMargin = parseInt(window.getComputedStyle(element).marginTop) || 0;
    var newPadding = currentMargin + 5;
    element.style.marginTop = newPadding + 'px';
    display.textContent = newPadding;
    console.log('New top padding:', newPadding);
}

function decreaseTopMarginForRookeshKoli() {
    var element = document.querySelector('#panel-print-rokesh');
    var display = displays.topHeight;
    if (!element) {
        console.error('Element not found');
        return;
    }
    console.log('Element found:', element);
    var currentPadding = parseInt(window.getComputedStyle(element).marginTop) || 0;
    var newPadding = currentPadding - 5;
    element.style.marginTop = newPadding + 'px';
    display.textContent = newPadding;
    console.log('New top Padding:', newPadding);
}

function increaseBottomMarginForRookeshKoli() {
    var element = document.querySelector('#panel-print-rokesh');
    var display = displays.bottomHeight;
    if (!element) {
        console.error('Element not found');
        return;
    }
    var currentPadding = parseInt(window.getComputedStyle(element).paddingBottom) || 0;
    var newPadding = currentPadding + 5;
    element.style.paddingBottom = newPadding + 'px';
    display.textContent = newPadding;
    console.log('New bottom Padding:', newPadding);
}

function decreaseBottomMarginForRookeshKoli() {
    var element = document.querySelector('#panel-print-rokesh');
    var display = displays.bottomHeight;
    if (!element) {
        console.error('Element not found');
        return;
    }
    var currentPadding = parseInt(window.getComputedStyle(element).paddingBottom) || 0;
    var newPadding = currentPadding - 5;
    element.style.paddingBottom = newPadding + 'px';
    display.textContent = newPadding;
    console.log('New bottom Padding:', newPadding);
}

function increaseRightMarginForRookeshKoli() {
    var element = document.querySelector('#panel-print-rokesh');
    var display = displays.rightHeight;
    if (!element) {
        console.error('Element not found');
        return;
    }
    var currentMargin = parseInt(window.getComputedStyle(element).marginRight) || 0;
    var newMargin = currentMargin + 5;
    element.style.marginRight = newMargin + 'px';
    display.textContent = newMargin;
    console.log('New right margin:', newMargin);
}


function decreaseRightMarginForRookeshKoli() {
    var element = document.querySelector('#panel-print-rokesh');
    var display = displays.rightHeight;
    if (!element) {
        console.error('Element not found');
        return;
    }
    var currentPadding = parseInt(window.getComputedStyle(element).marginRight) || 0;
    var newPadding = currentPadding - 5;
    element.style.marginRight = newPadding + 'px';
    display.textContent = newPadding;
    console.log('New right Padding:', newPadding);
}

function increaseLeftMarginForRookeshKoli() {
    var element = document.querySelector('#panel-print-rokesh');
    var display = displays.leftHeight;
    if (!element) {
        console.error('Element not found');
        return;
    }
    var currentPadding = parseInt(window.getComputedStyle(element).paddingLeft) || 0;
    var newPadding = currentPadding + 5;
    element.style.paddingLeft = newPadding + 'px';
    display.textContent = newPadding;
    console.log('New left Padding:', newPadding);
}

function decreaseLeftMarginForRookeshKoli() {
    var element = document.querySelector('#panel-print-rokesh');
    var display = displays.leftHeight;
    if (!element) {
        console.error('Element not found');
        return;
    }
    var currentPadding = parseInt(window.getComputedStyle(element).paddingLeft) || 0;
    var newPadding = currentPadding - 5;
    element.style.paddingLeft = newPadding + 'px';
    display.textContent = newPadding;
    console.log('New left Padding:', newPadding);
}


// END rookeshKoli --------------------------<




// START rookeshPayeei ------------------------>

function increaseTopMarginForRookeshPayeei() {
    var elements = document.querySelectorAll('.ng-scope[ng-repeat="items in item"]');
    var display = displays.topHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).marginTop) || 0;
        var newMargin = currentMargin + 5;
        element.style.marginTop = newMargin + 'px';
        display.textContent = newMargin;
    });
}

function decreaseTopMarginForRookeshPayeei() {
    var elements = document.querySelectorAll('.ng-scope[ng-repeat="items in item"]');
    var display = displays.topHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).marginTop) || 0;
        var newMargin = currentMargin - 5;
        element.style.marginTop = newMargin + 'px';
        display.textContent = newMargin;
    });
}

function increaseBottomMarginForRookeshPayeei() {
    var elements = document.querySelectorAll('.ng-scope[ng-repeat="items in item"]');
    var display = displays.bottomHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).paddingBottom) || 0;
        var newMargin = currentMargin + 5;
        element.style.paddingBottom = newMargin + 'px';
        display.textContent = newMargin;
    });
}

function decreaseBottomMarginForRookeshPayeei() {
    var elements = document.querySelectorAll('.ng-scope[ng-repeat="items in item"]');
    var display = displays.bottomHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).marginBottom) || 0;
        var newMargin = currentMargin - 5;
        element.style.marginBottom = newMargin + 'px';
        display.textContent = newMargin;
    });
}

function increaseRightMarginForRookeshPayeei() {
    var elements = document.querySelectorAll('.ng-scope[ng-repeat="items in item"]');
    var display = displays.rightHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).marginRight) || 0;
        var newMargin = currentMargin + 5;
        element.style.marginRight = newMargin + 'px';
        display.textContent = newMargin;
    });
}

function decreaseRightMarginForRookeshPayeei() {
    var elements = document.querySelectorAll('.ng-scope[ng-repeat="items in item"]');
    var display = displays.rightHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).marginRight) || 0;
        var newMargin = currentMargin - 5;
        element.style.marginRight = newMargin + 'px';
        display.textContent = newMargin;
    });
}

function increaseLeftMarginForRookeshPayeei() {
    var elements = document.querySelectorAll('.ng-scope[ng-repeat="items in item"]');
    var display = displays.leftHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).paddingLeft) || 0;
        var newMargin = currentMargin + 5;
        element.style.paddingLeft = newMargin + 'px';
        display.textContent = newMargin;
    });
}

function decreaseLeftMarginForRookeshPayeei() {
    var elements = document.querySelectorAll('.ng-scope[ng-repeat="items in item"]');
    var display = displays.leftHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).paddingLeft) || 0;
        var newMargin = currentMargin - 5;
        element.style.paddingLeft = newMargin + 'px';
        display.textContent = newMargin;
    });
}

// END rookeshPayeei --------------------------<




// START Polomp ------------------------>

// انتخاب المان‌هایی با کلاس col-md-12 main panel-body-print


// تنظیم مارجین برای عناصر انتخاب شده

function increaseTopMarginForPolomp() {
	var elements = document.querySelectorAll('.col-md-12.main.panel-body-print');
    var display = displays.topHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).marginTop) || 0;
        var newMargin = currentMargin + 5;
        element.style.marginTop = newMargin + 'px';
        display.textContent = newMargin;
    });
}

function decreaseTopMarginForPolomp() {
	var elements = document.querySelectorAll('.col-md-12.main.panel-body-print');
    var display = displays.topHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).marginTop) || 0;
        var newMargin = currentMargin - 5;
        element.style.marginTop = newMargin + 'px';
        display.textContent = newMargin;
    });
}

function increaseBottomMarginForPolomp() {
	var elements = document.querySelectorAll('.col-md-12.main.panel-body-print');
    var display = displays.bottomHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).marginBottom) || 0;
        var newMargin = currentMargin + 5;
        element.style.marginBottom = newMargin + 'px';
        display.textContent = newMargin;
    });
}

function decreaseBottomMarginForPolomp() {
	var elements = document.querySelectorAll('.col-md-12.main.panel-body-print');
    var display = displays.bottomHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).marginBottom) || 0;
        var newMargin = currentMargin - 5;
        element.style.marginBottom = newMargin;
        display.textContent = newMargin;
    });
}

function increaseRightMarginForPolomp() {
	var elements = document.querySelectorAll('.col-md-12.main.panel-body-print');
    var display = displays.rightHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).marginRight) || 0;
        var newMargin = currentMargin + 5;
        element.style.marginRight = newMargin + 'px';
        display.textContent = newMargin;
    });
}

function decreaseRightMarginForPolomp() {
	var elements = document.querySelectorAll('.col-md-12.main.panel-body-print');
    var display = displays.rightHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).marginRight) || 0;
        var newMargin = currentMargin - 5;
        element.style.marginRight = newMargin + 'px';
        display.textContent = newMargin;
    });
}

function increaseLeftMarginForPolomp() {
	var elements = document.querySelectorAll('.col-md-12.main.panel-body-print');
    var display = displays.leftHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).paddingLeft) || 0;
        var newMargin = currentMargin + 5;
        element.style.paddingLeft = newMargin + 'px';
        display.textContent = newMargin;
    });
}

function decreaseLeftMarginForPolomp() {
	var elements = document.querySelectorAll('.col-md-12.main.panel-body-print');
    var display = displays.leftHeight;
    elements.forEach(function(element) {
        var currentMargin = parseInt(window.getComputedStyle(element).paddingLeft) || 0;
        var newMargin = currentMargin - 5;
        element.style.paddingLeft = newMargin + 'px';
        display.textContent = newMargin;
    });
}
// END polomp --------------------------<





// START AmarKoli ------------------------>

// انتخاب دیو والد با کلاس .col-md-12.p-0.m-0.panel-body-print.panel-total-row


// تنظیم مارجین برای بالا
function increaseTopMarginForAmarKoli() {
	var element = document.querySelector('.col-md-12.p-0.m-0.panel-body-print.panel-total-row');
    if (element) {
        var display = displays.topHeight;
        var currentMargin = parseInt(window.getComputedStyle(element).marginTop) || 0;
        var newMargin = currentMargin + 5;
        element.style.setProperty('margin-top', newMargin + 'px', 'important');
        display.textContent = newMargin;
    }
}

function decreaseTopMarginForAmarKoli() {
	var element = document.querySelector('.col-md-12.p-0.m-0.panel-body-print.panel-total-row');
    if (element) {
        var display = displays.topHeight;
        var currentMargin = parseInt(window.getComputedStyle(element).marginTop) || 0;
        var newMargin = currentMargin - 5;
        element.style.setProperty('margin-top', newMargin + 'px', 'important');
        display.textContent = newMargin;
    }
}

// تنظیم پدینگ برای پایین
function increaseBottomPaddingForAmarKoli() {
	var element = document.querySelector('.col-md-12.p-0.m-0.panel-body-print.panel-total-row');
    if (element) {
        var display = displays.bottomHeight;
        var currentPadding = parseInt(window.getComputedStyle(element).paddingBottom) || 0;
        var newPadding = currentPadding + 5;
        element.style.setProperty('padding-bottom', newPadding + 'px', 'important');
        display.textContent = newPadding;
    }
}

function decreaseBottomPaddingForAmarKoli() {
	var element = document.querySelector('.col-md-12.p-0.m-0.panel-body-print.panel-total-row');
    if (element) {
        var display = displays.bottomHeight;
        var currentPadding = parseInt(window.getComputedStyle(element).paddingBottom) || 0;
        var newPadding = currentPadding - 5;
        element.style.setProperty('padding-bottom', newPadding + 'px', 'important');
        display.textContent = newPadding;
    }
}

// تنظیم مارجین برای راست
function increaseRightMarginForAmarKoli() {
	var element = document.querySelector('.col-md-12.p-0.m-0.panel-body-print.panel-total-row');
    if (element) {
        var display = displays.rightHeight;
        var currentMargin = parseInt(window.getComputedStyle(element).marginRight) || 0;
        var newMargin = currentMargin + 5;
        element.style.setProperty('margin-right', newMargin + 'px', 'important');
        display.textContent = newMargin;
    }
}

function decreaseRightMarginForAmarKoli() {
	var element = document.querySelector('.col-md-12.p-0.m-0.panel-body-print.panel-total-row');
    if (element) {
        var display = displays.rightHeight;
        var currentMargin = parseInt(window.getComputedStyle(element).marginRight) || 0;
        var newMargin = currentMargin - 5;
        element.style.setProperty('margin-right', newMargin + 'px', 'important');
        display.textContent = newMargin;
    }
}

// تنظیم پدینگ برای چپ
function increaseLeftPaddingForAmarKoli() {
	var element = document.querySelector('.col-md-12.p-0.m-0.panel-body-print.panel-total-row');
    if (element) {
        var display = displays.leftHeight;
        var currentPadding = parseInt(window.getComputedStyle(element).paddingLeft) || 0;
        var newPadding = currentPadding + 5;
        element.style.setProperty('padding-left', newPadding + 'px', 'important');
        display.textContent = newPadding;
    }
}

function decreaseLeftPaddingForAmarKoli() {
	var element = document.querySelector('.col-md-12.p-0.m-0.panel-body-print.panel-total-row');
    if (element) {
        var display = displays.leftHeight;
        var currentPadding = parseInt(window.getComputedStyle(element).paddingLeft) || 0;
        var newPadding = currentPadding - 5;
        element.style.setProperty('padding-left', newPadding + 'px', 'important');
        display.textContent = newPadding;
    }
}

// END AmarKoli --------------------------<








function addEventListeners() {
    buttons.increaseTop.addEventListener('click', function() {
        var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                checkAndCreateSpacers();
                adjustSpacing('.custom-spacer-top', 5, displays.topHeight);
                break;
            case 'sarbarg':
                increaseTopPaddingForSarbarg();
                break;
            case 'rookeshKoli':
                increaseTopMarginForRookeshKoli();
                break;
			case 'rookeshPayeei':
                increaseTopMarginForRookeshPayeei();
                break;
			case 'polomp':
                increaseTopMarginForPolomp();
                break;
			case 'amarKoli':
                increaseTopMarginForAmarKoli();
                break;
            // موارد دیگر
        }
    });

    buttons.decreaseTop.addEventListener('click', function() {
        var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                checkAndCreateSpacers();
                adjustSpacing('.custom-spacer-top', -5, displays.topHeight);
                break;
            case 'sarbarg':
                decreaseTopPaddingForSarbarg();
                break;
            case 'rookeshKoli':
                decreaseTopMarginForRookeshKoli();
                break;
			case 'rookeshPayeei':
                decreaseTopMarginForRookeshPayeei();
                break;
			case 'polomp':
                decreaseTopMarginForPolomp();
                break;
			case 'amarKoli':
                decreaseTopMarginForAmarKoli();
                break;
            // موارد دیگر
        }
    });

    buttons.increaseBottom.addEventListener('click', function() {
        var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                checkAndCreateSpacers();
                adjustSpacing('.custom-spacer-bottom', 5, displays.bottomHeight);
                break;
            case 'sarbarg':
                increaseBottomPaddingForSarbarg();
                break;
            case 'rookeshKoli':
                increaseBottomMarginForRookeshKoli();
                break;
			case 'rookeshPayeei':
                increaseBottomMarginForRookeshPayeei();
                break;
			case 'polomp':
                increaseBottomMarginForPolomp();
                break;
			case 'amarKoli':
                increaseBottomPaddingForAmarKoli();
                break;
            // موارد دیگر
        }
    });

    buttons.decreaseBottom.addEventListener('click', function() {
        var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                checkAndCreateSpacers();
                adjustSpacing('.custom-spacer-bottom', -5, displays.bottomHeight);
                break;
            case 'sarbarg':
                decreaseBottomPaddingForSarbarg();
                break;
            case 'rookeshKoli':
                decreaseBottomMarginForRookeshKoli();
                break;
			case 'rookeshPayeei':
                decreaseBottomMarginForRookeshPayeei();
                break;
			case 'polomp':
                decreaseBottomMarginForPolomp();
                break;
			case 'amarKoli':
                decreaseBottomPaddingForAmarKoli();
                break;
            // موارد دیگر
        }
    });

    buttons.increaseRight.addEventListener('click', function() {
        var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                adjustRightMargin(5);
                break;
            case 'sarbarg':
                increaseRightPaddingForSarbarg();
                break;
            case 'rookeshKoli':
                increaseRightMarginForRookeshKoli();
                break;
			case 'rookeshPayeei':
                increaseRightMarginForRookeshPayeei();
                break;
			case 'polomp':
                increaseRightMarginForPolomp();
                break;
			case 'amarKoli':
                increaseRightMarginForAmarKoli();
                break;
            // موارد دیگر
        }
    });

    buttons.decreaseRight.addEventListener('click', function() {
        var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                adjustRightMargin(-5);
                break;
            case 'sarbarg':
                decreaseRightPaddingForSarbarg();
                break;
            case 'rookeshKoli':
                decreaseRightMarginForRookeshKoli();
                break;
			case 'rookeshPayeei':
                decreaseRightMarginForRookeshPayeei();
                break;
			case 'polomp':
                decreaseRightMarginForPolomp();
                break;
			case 'amarKoli':
                decreaseRightMarginForAmarKoli();
                break;
            // موارد دیگر
        }
    });

    buttons.increaseLeft.addEventListener('click', function() {
        var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                adjustLeftMargin(5);
                break;
            case 'sarbarg':
                increaseLeftPaddingForSarbarg();
                break;
            case 'rookeshKoli':
                increaseLeftMarginForRookeshKoli();
                break;
			case 'rookeshPayeei':
                increaseLeftMarginForRookeshPayeei();
                break;
			case 'polomp':
                increaseLeftMarginForPolomp();
                break;
			case 'amarKoli':
                increaseLeftPaddingForAmarKoli();
                break;
            // موارد دیگر
        }
    });

    buttons.decreaseLeft.addEventListener('click', function() {
        var blockName = identifyBlock();
        switch (blockName) {
            case 'daftsrNatayej':
                adjustLeftMargin(-5);
                break;
            case 'sarbarg':
                decreaseLeftPaddingForSarbarg();
                break;
            case 'rookeshKoli':
                decreaseLeftMarginForRookeshKoli();
                break;
			case 'rookeshPayeei':
                decreaseLeftMarginForRookeshPayeei();
                break;
			case 'polomp':
                decreaseLeftMarginForPolomp();
                break;
			case 'amarKoli':
                decreaseLeftPaddingForAmarKoli();
                break;
            // موارد دیگر
        }
    });
	

	
}

addEventListeners();



// Start event fonts ----------->

