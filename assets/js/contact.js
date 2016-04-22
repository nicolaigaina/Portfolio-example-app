/*------------------------------------------
 Contact form
 ------------------------------------------*/

$(document).ready(function () {

    $("#contactForm").submit(function(e){

        e.preventDefault();
        var $ = jQuery;

        var postData 		= $(this).serializeArray(),
            formURL 		= $(this).attr("action"),
            $cfResponse 	= $('#contactFormResponse'),
            $cfsubmit 		= $("#cfsubmit"),
            cfsubmitText 	= $cfsubmit.text();

        $cfsubmit.val("Sending...");

        $.post(formURL, postData, function(data){
            if(data.result==='ok'){
                 $cfsubmit.val("Say Hello");
                 $('#name').val('');
                 $('#email').val('');
                 $('#message').val('');
                $('#contactFormResponse').text("Thank you! I've received your message. ");
              }else{
                 $cfsubmit.val("Say Hello");
                 $('#name').val('');
                 $('#email').val('');
                 $('#message').val('');
                 $('#contactFormResponse').text("Some server error occured. Please, be sure you're logged in gmail account in your browser.");
              }
          });
    });
});


