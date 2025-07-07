(function() {

    if (window.location.href.includes("find-a-professional")){
        window.dataLayer = window.dataLayer || [];
        getCountry();

        // Il tuo oggetto
        var obj = {
            'event': 'store-contact',
            'storeName': 'NOME',
            'storeInteractionType': 'TIPO_INTERAZIONE'
        };

        // Funzione per gestire il click sugli elementi "a"
        function handleClick(event) {
            var target = event.target;
            
            // Trova il div lpr-location che contiene l'elemento cliccato
            var locationDiv = target.closest('.lpr-location');
            if (locationDiv) {
                // Trova l'elemento lpr-location-name all'interno del div lpr-location
                var locationNameElement = locationDiv.querySelector('.lpr-location-name');
                if (locationNameElement) {
                    // Assegna il contenuto HTML dell'elemento lpr-location-name alla proprietà storeName
                    obj.storeName = locationNameElement.innerHTML;
                }
                
                // Determina il tipo di interazione
                if (target.closest('.lpr-location-phone')) {
                    obj.storeInteractionType = 'telefono';
                } else if (target.closest('.lpr-location-website')) {
                    obj.storeInteractionType = 'web site';
                }
                
                console.log(obj); // Mostra l'oggetto aggiornato nella console per verificare
                dataLayer.push({
                    'event': 'store-contact',
                    'storeName': obj.storeName,
                    'storeInteractionType': obj.storeInteractionType
                });
            }
        }

        // Aggiungi gli event listener per i click sui link all'interno di lpr-location-phone e lpr-location-website
        document.querySelectorAll('.lpr-location-phone a, .lpr-location-website a').forEach(function(element) {
            element.addEventListener('click', handleClick);
        });



    };
    function getCountry(){
        var nopen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(method, url) {
            if (url.includes("hcs=locatoraid")) {
                console.log(url);

                // La tua stringa con i caratteri codificati
                var encodedString = url;

                // Decodifica la stringa URL
                var decodedString = decodeURIComponent(encodedString);

                // Usa una regex per estrarre il paese
                var countryMatch = decodedString.match(/\/country\/([^\/]*)\/limit\//);
                var country = countryMatch ? countryMatch[1] : null;

                if (country) {
                    console.log('Nome del paese:', country);
                    dataLayer.push({
                        'event': 'ricerca-store',
                        'filterCountry': country
                    });
                } else {
                    console.log('Paese non trovato');
                }
            }
            // Continua con la chiamata originale
            return nopen.apply(this, arguments);
        };
    }

})();
