(function ()  {
    "use strict";

    $(document).ready(function() {
        $.ajax({
            url:'/json/est_connecte.php'
        }).done(function (data) {
            if(data.est_connecte) {
                $('#form-deconnexion').show();
            } else {
                $('#form-connexion').show();
            }
        }).fail(function () {
            alert('aie aie aie ! on se co')
        });

        $('#form-connexion').submit(function () {
           $.ajax({
               url: $(this).attr('action'),
               method: $(this).attr('method'),
               data: $(this).serialize()
           })
               .done(function (data) {
                   if(data.result) {
                       window.location.reload();
                   } else{
                       //Erreur de connexion
                       $("#msg").html('WRONG CREDITENTIALS !!!')
                   }
               })
               .fail(function () {
                   alert('aie aie aie ! on se co')
               });
            return false;
        });
        $('#form-deconnexion').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            })
                .done(function () {
                    window.location.reload();
                })
                .fail(function () {
                    alert('Aie aie aie ! on déco pas');
                });
            return false;
        });

        let test = 0;

        $('#omg').click(function () {
            console.log(test.toString().concat("%"));
            $('#omfg').css('width', test.toString().concat("%")).html(test.toString().concat("%"));
            test += 1;
        });

    })
}) ();