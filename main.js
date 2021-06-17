canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    CAR1_width = 100;
    CAR1_height = 90;

    background_image = "racing track 1.jpg";
    CAR1_image = "CAR 1.png";

    CAR1_X = 10;
    CAR1_Y =  10;

    CAR2_image = "CAR 2.png";
    CAR2_X = 10;
    CAR2_Y =  100;
    
    CAR2_width = 100;
    CAR2_height = 90;



    function add() 
    {
        background_imgtag= new Image();
        background_imgtag.onload = uploadBackground;
        background_imgtag.src= background_image;

        CAR1_imgtag= new Image();
        CAR1_imgtag.onload = uploadCAR1;
        CAR1_imgtag.src= CAR1_image;

        CAR2_imgtag= new Image();
        CAR2_imgtag.onload = uploadCAR2;
        CAR2_imgtag.src= CAR2_image;
        
    }

    function uploadBackground(e)
    {
        ctx.drawImage(background_imgtag, 0,0, canvas.width,canvas.height );
    }

    function uploadCAR1(e)
    {
        ctx.drawImage(CAR1_imgtag,CAR1_X,CAR1_Y,CAR1_width,CAR1_height);
    }

function uploadCAR2(e)
    {
        ctx.drawImage(CAR2_imgtag,CAR2_X,CAR2_Y,CAR2_width,CAR2_height);
    }

    window.addEventListener("keydown", my_keydown);

    
    function my_keydown(e)
    {
        key_pressdown = e.keyCode;
        console.log(key_pressdown);

        if(key_pressdown== "38"){

        up();
        console.log("up")
        }

        if(key_pressdown== "40"){

            down();
            console.log("down");

        }

         if(key_pressdown== "37"){

            left();
            console.log("left");

        }
        
        if(key_pressdown== "39"){

            right();
            console.log("right");

        }

    }
      window.addEventListener("keydown", my_keydown);
    function up() 
    {
        if(CAR1_Y >=0)
        {
            CAR1_Y= CAR1_Y-10;

            console.log("when up arrow is pressed" + CAR1_X + "-" + CAR1_Y);
                uploadBackground();
                uploadCAR1();

        }
    } 

    function down() 
    {
        if (CAR1_Y <=500)
        {
            CAR1_Y= CAR1_Y+10;

            console.log("when down arrow is pressed" + CAR1_X + "-" + CAR1_Y);
                uploadBackground();
                uploadCAR1();
                
        }
    } 

    function left() 
    {
        if(CAR1_X >=0)
        {
            CAR1_X= CAR1_X-10;

            console.log("when left arrow is pressed" + CAR1_X + "-" + CAR1_Y);
                uploadBackground();
             uploadCAR1();
                
        }
    } 

    function right() 
    {
        if(CAR1_X <=700)
        {
            CAR1_X= CAR1_X+10;

            console.log("when right arrow is pressed" + CAR1_X + "-" + CAR1_Y);
                uploadBackground();
                uploadCAR1();
                
        }
    } 

    function my_keydown(e)
    {
        key_pressdown = e.keyCode;
        console.log(key_pressdown);

        if(key_pressdown== "38"){

        CAR2_up();
        console.log("up")
        }

        if(key_pressdown== "83"){

            CAR2_down();
            console.log("down");

        }

         if(key_pressdown== "65"){

            CAR2_left();
            console.log("left");

        }
        
        if(key_pressdown== "86"){

            CAR2_right();
            console.log("right");

        }

    }

    function CAR2_up() 
    {
        if(CAR2_Y >=0)
        {
            CAR2_Y= CAR2_Y-10;

            console.log("when W is pressed" + CAR2_X + "-" + CAR2_Y);
                uploadBackground();
                uploadCAR2();

        }
    } 

    function CAR2_down() 
    {
        if (CAR2_Y <=500)
        {
            CAR2_Y= CAR2_Y+10;

            console.log("when S is pressed" + CAR2_X + "-" + CAR2_Y);
                uploadBackground();
                uploadCAR2();
                
        }
    } 

    function CAR2_left() 
    {
        if(CAR2_X >=0)
        {
            CAR2_X= CAR2_X-10;

            console.log("when A is pressed" + CAR2_X + "-" + CAR2_Y);
                uploadBackground();
             uploadCAR2();
                
        }
    } 

    function CAR2_right() 
    {
        if(CAR2_X <=700)
        {
            CAR2_X= CAR2_X+10;

            console.log("when D is pressed" + CAR2_X + "-" + CAR2_Y);
                uploadBackground();
                uploadCAR2();
                
        }
    } 