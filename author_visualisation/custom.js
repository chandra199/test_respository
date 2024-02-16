/* Uncomment the code below and add your custom js code */

// (function (pageEl){
//     /**
//     * Add local variables and functions here
//     */
    
//     // Legacy support - pre 9.0.3 release - remove if not needed
//     if (!pageEl){
        
//         // Callback for event triggered when the page starts loading    
//         window.addEventListener("iba_pageloading", function (e){
//             var page = e.data;
//             var pageid = $(page.element()).ibxWidget('option', 'ssId');
//             var loadedPagesMap = window.loadedPagesMap;
//             if (!loadedPagesMap) loadedPagesMap = window.loadedPagesMap = new Map();
//             if (loadedPagesMap.has(pageid)) return;
//             loadedPagesMap.set(pageid, true);

//             // Callback for event triggered when the page is fully loaded
//             page.element().addEventListener("iba_pageloaded", function (e){
//                 var page = e.data;
//             });
//         });
//         return;
//     }
    
//     // Callback for event triggered when the page starts loading    
//     pageEl.addEventListener("iba_pageloading", function (e){
//         // Automation page object - see doc: /<app_path>/web_resource/doc/automation/index.html
//         var page = e.data;
//         console.log(`page loading: ${$(page.element()).ibxWidget('option', 'ssId')}`);
//     });
    
//     // Callback for event triggered when the page is fully loaded
//     pageEl.addEventListener("iba_pageloaded", function (e){
//         // Automation page object
//         var page = e.data;
//         console.log(`page loaded: ${$(page.element()).ibxWidget('option', 'ssId')}`);
//     });
    

// })(window.currentPageEl)

// /**
// * Add global variables and functions here
// * Note: If this page is going to run in a portal, global definitions from this page might conflict with global definitions from other pages.
// */
