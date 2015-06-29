<!DOCTYPE html>
<html>
<head>
    <title>Weather Scapper</title>
    <link rel="stylesheet" href="bootstrap.min.css">
    <!-- Latest compiled and minified JavaScript -->

    <style>
        html, body {
            height: 100%;
        }
        .container {
            background-image: url('background-image.jpg');
            background-size: cover;
            background-position: center;
            width: 100%;
            height:100%;
            padding-top: 150px;
        }

        .center {
            text-align: center;
        }
        .white {
            color: white;
        }
        p {
            padding: 15px 0;
        }
        button {
            margin-top: 20px;
        }
        #success {
            margin-top: 20px;
            display: none;
        }
        #failure {
            display: none;
            margin-top: 20px;

        }
        #noCity {
            display: none;

        }

    </style>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 center white">
                <h1 class="center white">Weather Scapper</h1>
                <p class="intro center white">Please enter a city below that you would like to know the weather forecast of...</p>
                <form>
                    <div class="form-group">
                        <input type="text" name="city" class="form-control" id="city" placeholder="Ex. Toronto, Montreal, New York ..."/>
                    </div>
                    <div class="alert alert-danger" id="noCity">Please enter a city!</div>
                    <button class="btn btn-success btn-lg" id="findMyWeather">Find my Weather</button>
                </form>
            </div>
        </div>

        <div class="alert alert-success" id="success"></div>
        <div class="alert alert-danger" id="failure">City Weather data not found</div>


    </div>
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script>
        $('#findMyWeather').click(function(event) {
            event.preventDefault();
            $('#noCity').hide();
            if($('#city').val()!="") {
                $.get("scrapper.php?city="+$('#city').val(), function(data) {

                    if(data=="") {
                        $('#success').hide();
                        $('#failure').fadeIn();
                    }
                    else{
                        $('#faiure').hide();
                        $('#success').html(data).fadeIn();
                    }
                });
            }
            else {
                $('#noCity').fadeIn();
            }

        });
    </script>
</body>
</html>