var keys = [];
    var konami = '38,38,40,40,37,39,37,39,66,65';
    
    $(document).keydown(function(e){
        keys.push( e.keyCode );
        if ( keys.toString().indexOf( konami ) >=0        
    ){        
      
        keys = [];
            
            //change background color
           console.log("Hello world!");
           var style = document.createElement('style');
           document.head.appendChild(style);
           style.sheet.insertRule('#container {background: linear-gradient(0deg, rgba(95,23,158,1) 0%, rgba(21,126,199,1) 49%, rgba(22,226,135,1) 68%, rgba(209,221,16,1) 80%, rgba(227,140,16,1) 92%, rgba(233,12,42,1) 100%)}');
           style.sheet.insertRule('html {color: #FFFFFF}');
        }
    });