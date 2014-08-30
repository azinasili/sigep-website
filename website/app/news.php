<!DOCTYPE html>
<html class="no-js">
  <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <!-- Document meta data -->
    <title>SigEp PABB Drexel University | SigEp PABB News</title>
    <meta name="description" content="Read about the latest in Sigma Phi Epslion PABB">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Favicon -->
    <link rel="shortcut icon" type="img/favicon/favicon.ico" href="">

    <!-- Apple Touch Icons -->
    <link rel="apple-touch-icon" sizes="152x152" href="img/apple-touch-icon/apple-touch-icon-152.png">
    <link rel="apple-touch-icon" sizes="144x144" href="img/apple-touch-icon/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="120x120" href="img/apple-touch-icon/apple-touch-icon-120.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon/apple-touch-icon-72.png">
    <link rel="apple-touch-icon" href="img/apple-touch-icon/apple-touch-icon-57.png">

    <!-- MS Homescreen Icons -->
    <meta name="msapplication-TileColor" content="#0088cc">
    <meta name="msapplication-TileImage" content="img/window-start-tile/ms-touch-icon.png">

    <!-- Stylesheet -->
    <link href="css/spe.min.css" media="screen, projection" rel="stylesheet" type="text/css" />

    <!-- Fonts -->
    <link href="http://fonts.googleapis.com/css?family=Bitter:400,700,400italic|Raleway:400,700" rel="stylesheet" type="text/css">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" />

    <!-- HTML5 Shim for IE 6-8 -->
    <!--[if lt IE 9]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Head level javascript -->
    <script src="js/vendor/modernizr.min.js" type="text/javascript"></script>

  </head>

  <body>

    <!-- Old Browser Warning -->
    <!--[if lt IE 8]>
    <p class="browsehappy">
      You are using an <strong>outdated</strong> browser. Please
      <a href="http://browsehappy.com/">upgrade your browser</a> for a faster,
      better, and safer web experience.
    </p>
    <![endif]-->

    <!-- Header content -->
    <header class="container header">
      <div class="row">
        <?php include("incl/navigation.php"); ?>
      </div>
    </header>

    <!-- Main content -->
    <main class="main" id="main">

      <div class="hero-small">
        <div class="hero-content">
          <h1>sigep news</h1>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="grid two-third-md whole-xs">
            <article class="blog-post">
              <header class="blog-post--header">
                <h2>SigEp Fall Rush 2014</h2>
                <img src="img/fall-rush-2014.png" class="img" />
              </header>
              <p>
                Please come out to Sigma Phi Epsilon located at the corner of
                34th and Race street, first house on Greek Row, and meet the
                brothers of SigEp. The following Rush dates are open to all
                members interested in joining Greek Life and taking part in
                living the Balanced Man lifestyle.
              </p>
              <a href="fall-rush-2014.php">continue reading</a>
            </article>
            <article class="blog-post">
              <header class="blog-post--header">
                <h2>St. Bladrick's 2014</h2>
                <img src="img/st-baldricks-2014.jpg" class="img" />
              </header>
              <p>
                The St. Baldrick’s Foundation is a volunteer-driven charity
                committed to funding the most promising research to find cures
                for childhood cancers and give survivors long and healthy lives.
              </p>
              <a href="st-baldricks-2014.php">continue reading</a>
            </article>
            <article class="blog-post">
              <header class="blog-post--header">
                <h2>Fall Rush 2013</h2>
                <img src="img/fall-rush-2013.jpg" class="img" />
              </header>
              <p>
                Please come out to Sigma Phi Epsilon located at the corner of
                34th and Race street, first house on Greek Row, and meet the
                brothers of SigEp. The following Rush dates are open to all
                members interested in joining Greek Life and taking part in
                living the Balanced Man lifestyle.
              </p>
              <a href="fall-rush-2013.php">continue reading</a>
            </article>
          </div>
          <aside class="grid third-md whole-xs">
            <div class="blog-post--recent">
              <h3>Archive</h3>
              <ul class="list-unstyled">
                <li><a href="fall-rush-2014.php">Fall Rush 2014</a></li>
                <li><a href="st-baldricks-2014.php">St. Baldrick's 2014</a></li>
                <li><a href="fall-rush-2013.php">Fall Rush 2013</a></li>
                <li><a href="sigep-adopts-a-street.php">SigEp Adopts a Street</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <div id="social-media" class="social-media">
        <div class="container"></div>
      </div>

    </main>

    <!-- Footer content -->
    <footer class="footer" id="footer">
      <div class="blog-post--footer">
        <div class="container">
          <div class="row">
            <?php include("incl/blog-post-preview.php"); ?>
          </div>
        </div>
      </div>

      <!-- Footer links -->
      <div class="container">
        <div class="row">
          <?php include("incl/footer-links.php"); ?>
        </div>
      </div>

      <!-- Copywrite -->
      <div class="copywrite">
        <div class="container">
          <div class="row">
            <?php include("incl/copywrite.php"); ?>
          </div>
        </div>
      </div>
    </footer>

    <!-- Javascript -->
    <script src="js/vendor/jquery.min.js" type="text/javascript"></script>
    <script src="js/vendor/tweetie.js" type="text/javascript"></script>
    <script src="js/spe.min.js" type="text/javascript"></script>
    <script type="text/javascript">
      $(document).ready(function() {

        $('#social-media .container').twittie({
          'username': '@sigep_drexel',
          'count': 1,
          'hideReplies': true,
          'template': '<hr /><div class="tweet"><blockquote>{{tweet}}</blockquote><a href="{{url}}"><i class="fa fa-twitter"></i>Follow @sigep_drexel</a></div><hr />',
          'apiPath': 'api/tweet.php'
        });

      });
    </script>

    <!-- Google Analytics -->
    <script type="text/javascript">
      (function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
      (f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
      l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-XXXXXXXX-XX');
      ga('send', 'pageview');
    </script>

  </body>
</html>
