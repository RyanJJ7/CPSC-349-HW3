(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    class FormHandler {
        constructor(selector) {
            console.log('In FormHandler constructor...');
        
            if (!selector) { throw new Error('No selector provided'); }
        
            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        }
    
        addSubmitHandler() {
            var modal = document.getElementById("modal");
            var btn = document.getElementById("submit");
            var span = document.getElementsByClassName("close")[0];
            
            btn.onclick = function() {
                modal.style.display = "block";
            }

            span.onclick = function() {
                modal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
    }
    
    App.FormHandler = FormHandler;
    window.App = App;
})(window);
