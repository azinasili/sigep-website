<!DOCTYPE html>
<html class="no-js">
  <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <!-- Document meta data -->
    <title>SigEp PABB Drexel University</title>
    <meta name="description" content="Whatever">
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

      <div class="container">
        <div class="row">
          <div class="grid whole-xs">
            <img src="img/st-baldricks-2014.jpg" class="img" />
            <article class="blog-post--content">
              <header class="blog-post--header">
                <h2>St. Baldricks 2014</h2>
                <span class="text-small">2/24/2014</span>
                <span class="text-small">written by:</span>
                <span class="text-small">Sean Soboloski</span>
              </header>
              <h3>What is the St .Baldrick’s Foundation…</h3>
              <p>
                The St. Baldrick’s Foundation is a volunteer-driven charity
                committed to funding the most promising research to find cures
                for childhood cancers and give survivors long and healthy lives.
              </p>
              <h3>How are we involved…</h3>
              <p>
                Sigma Phi Epsilon supports the St. Baldrick’s Foundation by
                fund raising and hosting a head shaving event every year. Last
                year we raised $51,850 increasing our total to over $212,000!
                This year we are hosting our 7th annual head shaving event, with
                a goal to raise at least $55,000. The event is taking place on
                Friday, March 14th from 6:00 PM to 9:00 PM in the Drexel Armory,
                located at 33rd and Cuthbert Streets. The event is a free
                carnival, open to the public, and it will include live music,
                DJs, three large inflatable inter-actives, raffles, food, and of
                course, the head shaving.
              </p>
              <h3>How you can show your support…</h3>
              <p>
                Donate to the event at
                <a href="http://www.stbaldricks.org/events/mypage/890/2014">http://www.stbaldricks.org/events/mypage/890/2014</a>
              </p>
              <p>
                Sign up to shave your head and help fund raise
              </p>
              <ul>
                <li>Search and select “Head Shaving at Drexel University”</li>
                <li>Hit the blue “Join Us” button and follow the instructions</li>
              </ul>
              <p>
                Attend the event and join in on the celebration!
              </p>
              <p>
              Please feel free to contact
              <a href="#">Sean Soboloski</a> with any questions!
              </p>
            </article>
          </div>
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
          <p>
            &copy; 2014 Sigma Phi Epsilon PABB
          </p>
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
          'template': '<div class="tweet"><blockquote>{{tweet}}</blockquote><a href="{{url}}"><i class="fa fa-twitter"></i>Follow @sigep_drexel</a></div>',
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
