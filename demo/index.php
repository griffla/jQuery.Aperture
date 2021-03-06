<!doctype html>
<html>
    
<head>
    <meta charset="utf-8">
    <title>Demonstration - Rotate all kinds of elements clock- or counterclockwise with jQuery Aperture</title>
    <meta name="author" content="Joscha Schmidt">
    <meta name="description" content="A demonstration about how to rotate all kinds of elements clock- or counterclockwise with jQuery Aperture">

    <link rel="stylesheet" type="text/css" href="../css/aperture.css">
    <link rel="stylesheet" type="text/css" href="css/demo.css">
    <link rel="stylesheet" href="lightbox/css/lightbox.css" type="text/css" media="screen" />
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,900' rel='stylesheet' type='text/css'>
    
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/jquery-1.9.1.min.js"><\/script>')</script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min.js"></script>
</head>

<body>
    <div id="main">
        <a id="dl" href="https://github.com/griffla/jQuery.Aperture">Download jQuery Aperture</a>
        
        <h1>jQuery Aperture</h1>
        
        <p>Rotate all kinds of elements clock- or counterclockwise with jQuery Aperture.</p>
        
        <section class="demoBox">
            <div id="container">
                <a href="images/4891344276_c2a8cb9856_b.jpg" rel="lightbox[nature]" title=""><img src="images/4891344276_c2a8cb9856_m.jpg" alt="Plants: image 1 0f 9 thumb" /></a>
                <a href="images/4657857004_7ebf9da1b0_b.jpg" rel="lightbox[nature]" title=""><img src="images/4657857004_7ebf9da1b0_m.jpg" alt="Plants: image 1 0f 9 thumb" /></a>
                <a href="images/3900502523_8419932a53_o.jpg" rel="lightbox[nature]" title=""><img src="images/3900502523_cc29fe3113_m.jpg" alt="Plants: image 1 0f 9 thumb" /></a>
                <a href="images/3706977488_08208d18db_b.jpg" rel="lightbox[nature]" title=""><img src="images/3706977488_08208d18db_m.jpg" alt="Plants: image 1 0f 9 thumb" /></a>
                <a href="images/3819663832_070dbedbd9_b.jpg" rel="lightbox[nature]" title=""><img src="images/3819663832_070dbedbd9_m.jpg" alt="Plants: image 1 0f 9 thumb" /></a>
                <a href="images/4990386275_4ab31b9df7_b.jpg" rel="lightbox[nature]" title=""><img src="images/4990386275_4ab31b9df7_m.jpg" alt="Plants: image 1 0f 9 thumb" /></a>
                <a href="images/4553811718_1e6ee5eb19_b.jpg" rel="lightbox[nature]" title=""><img src="images/4553811718_1e6ee5eb19_m.jpg" alt="Plants: image 1 0f 9 thumb" /></a>
                <a href="images/5565141297_f0ef0d567d_b.jpg" rel="lightbox[nature]" title=""><img src="images/5565141297_f0ef0d567d_m.jpg" alt="Plants: image 1 0f 9 thumb" /></a>
                <a href="images/5535102989_d82a73e30a_b.jpg" rel="lightbox[nature]" title=""><img src="images/5535102989_d82a73e30a_m.jpg" alt="Plants: image 1 0f 9 thumb" /></a>
            </div>
            
            <section>
                <h2>Demo with integrated lightbox</h2>
                
                <div>
                    <code>
                        $('#container')<br>
                        .aperture({<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;columns: '5',<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;duration : 400,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;imgWidth : '190px',<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;imgHeight : '130px',<br>
                        });
            
                    </code>
                </div>
            </section>
        </section>
        
        <h2>Options</h2>
        
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Option</th>
                        <th>Default</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td>columns</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>imgWidth</td>
                        <td>200px</td>
                    </tr>
                    <tr>
                        <td>imgHeight</td>
                        <td>140px</td>
                    </tr>
                    <tr>
                        <td>easing</td>
                        <td>easeOutQuint</td>
                    </tr>
                    <tr>
                        <td>duration</td>
                        <td>1000</td>
                    </tr> 
                </tbody>
            </table>
        </div>
    </div>
    
    <script src="../js/jquery.aperture.js"></script>
    <script src="js/demo.js"></script>
    <script src="lightbox/js/lightbox.js"></script>
    
    <?php 
    if(file_exists('googleanalytics.php'))
        include 'googleanalytics.php';
    ?>
</body>
</html>