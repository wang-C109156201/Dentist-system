import  doinquiry  from "./doinquiry.js";
import {startPage} from "./startPage.js"
import doRegistration from './doRegistration.js'; 
import doServes from './doServes.js'; 
import doSaD from './doSaD.js'; 
$(document).ready(function () {
    
    $("#root").html(startPage);
    
    $("#startinquiry").click(function (e) { 
        console.log("44");
        doinquiry();
        
    }); 
    $("#serves").click(function (e) { 
        doServes();    
    });   
    $("#registration").click(function (e) { 
        doRegistration();
    });
    $("#sad").click(function (e) { 
        doSaD();
    });
});