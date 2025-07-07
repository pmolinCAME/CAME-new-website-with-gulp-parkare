(function() {

    let Inttext;
    let location_txt;
    let requestType_txt;

    if (window.location.href.includes("contact-us")){
        let formtimeout = setTimeout(lookFormContactUs, 1500);
    }


    function lookFormContactUs() {
        // Configura il MutationObserver per l'elemento Interest
        const observerInterest = new MutationObserver(function(mutations) { 
            mutations.forEach(function(mutation) { 
                if (mutation.type === 'characterData' || (mutation.type === 'childList' && mutation.addedNodes.length > 0 && mutation.addedNodes[0].nodeType === Node.TEXT_NODE)) { 
                    Inttext = mutation.target.textContent;
                    console.log('userInterest=' + Inttext + ' location='+location_txt+' requestType='+requestType_txt); 
                } 
            });
        });
    
        // Configura il MutationObserver per l'elemento Country
        const observerCountry = new MutationObserver(function(mutations) { 
            mutations.forEach(function(mutation) { 

                Inttext == undefined ? Inttext="automation for garages and doors" : Inttext;
                requestType_txt == undefined ? requestType_txt="Business contact" : requestType_txt;

                if (mutation.type === 'characterData' || (mutation.type === 'childList' && mutation.addedNodes.length > 0 && mutation.addedNodes[0].nodeType === Node.TEXT_NODE)) { 
                    location_txt = mutation.target.textContent;
                    console.log('userInterest=' + Inttext + ' location='+location_txt+' requestType='+requestType_txt); 
                } 
            });
        });
    
        // Configura il MutationObserver per l'elemento Type of request
        const observerRequestType = new MutationObserver(function(mutations) { 
            mutations.forEach(function(mutation) {
                
                Inttext == undefined ? Inttext="automation for garages and doors" : Inttext;
                requestType_txt == undefined ? requestType_txt="Business contact" : requestType_txt;

                if (mutation.type === 'characterData' || (mutation.type === 'childList' && mutation.addedNodes.length > 0 && mutation.addedNodes[0].nodeType === Node.TEXT_NODE)) { 
                    requestType_txt = mutation.target.textContent;
                    console.log('userInterest=' + Inttext + ' location='+location_txt+' requestType='+requestType_txt); 
                } 
            });
        });
    
        // Elemento Interest
        const target = document.querySelector(".interest_select .select2-selection__rendered");  
        // Elemento Country
        const target2 = document.querySelector("#address-2-country .select2-selection__rendered");
        // Elemento Type of request
        const target3 =  document.querySelector('#select-1 .select2-selection__rendered');


        const config = { characterData: true, subtree: true, childList: true };
    
        // Inizia l'osservazione 
        if (target) {
            observerInterest.observe(target, config);
        } else {
            console.error("Elemento Interest non trovato");
        }
    
        if (target2) {
            observerCountry.observe(target2, config);
        } else {
            console.error("Elemento Country non trovato");
        }
    
        if (target3) {
            observerRequestType.observe(target3, config);
        } else {
            console.error("Elemento Type of request non trovato");
        }
    }
    
    
    if (window.location.href.includes("contact-us")){
        document.querySelector('.forminator-button').addEventListener('click', function() {
            window.dataLayer = window.dataLayer || [];

            window.dataLayer.push({
                'event': 'submit-form-contatti-ok',
                'userInterest': Inttext,
                'location': location_txt,
                'requestType': requestType_txt
            }); 

        });
    }
    
    
})();