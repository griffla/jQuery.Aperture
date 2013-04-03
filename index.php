<!doctype html>
<html>
    
<head>
    <meta charset="utf-8">
    <title>jQuery Aperture</title>
    <meta name="author" content="Joscha Schmidt">

    <link rel="stylesheet" type="text/css" href="/css/aperture.css">
    <link rel="stylesheet" type="text/css" href="demo/css/demo.css">
    <link rel="stylesheet" href="demo/lightbox/css/lightbox.css" type="text/css" media="screen" />
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,900' rel='stylesheet' type='text/css'>
    
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="demo/js/jquery-1.9.1.min.js"><\/script>')</script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min.js"></script>
</head>

<body>
    <div id="main">
        <a id="dl" href="https://github.com/griffla/jQuery.Aperture">Watch at GitHub</a>
        
        <h1>Hi at Aperture</h1>
        <h2><a href="demo">Watch the demo</a></h2>
    </div>
    
    <?php 
    if(file_exists('googleanalytics.php'))
        include 'googleanalytics.php';
    ?>
</body>
</html>