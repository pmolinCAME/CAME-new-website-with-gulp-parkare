(function() {

    let faqTitle;
    let faqCategory = "GATE AUTOMATION GARAGE DOOR AND ROAD BARRIERS";

    if (window.location.href.includes("support-for-installers")){

        // listener categorie
        const tabs = document.querySelectorAll('.wp-block-button__link');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                faqCategory = tab.innerHTML;
                faqData();
            });
        });

        // listener titoli
        const headings = document.querySelectorAll('.accordion-heading');
        headings.forEach(head => {
            head.addEventListener('click', function() {
                faqTitle = head.innerHTML;
                faqData();
            });
        });

        window.dataLayer = window.dataLayer || [];

        function faqData(){
            dataLayer.push({
                'event': 'click-faq',
                'faqTitle': faqTitle,
                'faqCategory': faqCategory
            });
        }


    }

})();