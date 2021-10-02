(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-payment-info="form"]';
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function(title, name) {
        console.log('Thank you for your payment, ' + title + ' ' + name);
    });
    console.log(formHandler);
})(window);