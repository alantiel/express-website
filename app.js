const express = require("express");
const app = express();

app.use(express.static('assets'));

const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Alantiel.com listening on port ${port}!`));


const html = `
<!DOCTYPE HTML>
<html>
	<head>
  		<title>Alantiel Freire Marins</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <!--[if lte IE 8]><script src="js/ie/html5shiv.js"></script><![endif]-->
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      <link rel="stylesheet" href="css/main.css" />
      <!--[if lte IE 8]><link rel="stylesheet" href="css/ie8.css" /><![endif]-->
      <script type="text/javascript">
          var captchaResponse = function(response) {
              if(response.length > 0) {
                  document.getElementById('send-btn').disabled = false;
              }
          };
      </script>
                <!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-164530815-1"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-164530815-1');
		</script>
	</head>

<body>
  <!-- Header -->
  <section id="header">
    <header>
      <span class="image avatar"><img src="images/avatar.jpg" alt="" /></span>
      <h1 id="logo"><a href="#">Alantiel Freire Marins</a></h1>
      <p>Computing, Math, Internet, Adventure Sports, Photography, and more...</p>
    </header>
    <nav id="nav">
      <ul>
        <li><a href="#one" class="active">About</a></li>
        <li><a href="#two">Things I Can Do</a></li>
        <li><a href="#three">A Few Accomplishments</a></li>
        <li><a href="#four">Contact</a></li>
      </ul>
    </nav>
    <footer>
      <ul class="icons">
        <li><a href="https://www.linkedin.com/in/alantiel" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
        <li><a href="https://github.com/alantiel" class="icon fa-github"><span class="label">Github</span></a></li>
        <li><a href="https://facebook.com/alantiel" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
        <li><a href="https://www.instagram.com/alantiel" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
        <li><a href="mailto:alantiel@alantiel.com" class="icon fa-envelope" title="alantiel@alantiel.com"><span class="label">Email</span></a></li>
      </ul>
    </footer>
  </section>
  
  <!-- Wrapper -->
  <div id="wrapper">

    <!-- Main -->
      <div id="main">

        <!-- One -->
          <section id="one">
            <div class="container">
              <header class="major">
                <h2>Welcome to my page</h2>
                <p>A bit of my digital life<br />
                where I build cool things!!</p>
              </header>
              <p>Hi, my name is Alan<strike title="People call me just Alan">tiel</strike>, 32 years old. I've been a programmer since I was 14 (geek since 0). Here you can see some information about me. First of all, my favorite Einstein quote.</p>

              <blockquote>
                Imagination is more important than knowledge. (Einstein, Albert)
              </blockquote>
            </div>
          </section>

        <!-- Two -->
          <section id="two">
            <div class="container">
              <h3>Things I Can Do</h3>
              <p>I spend most of my time doing some of these things or thinking "what else I can do?".</p>
              <ul class="feature-icons">
                <li class="fa-code">Write code</li>
                <li class="fa-sitemap">Solve problems</li>
                <li class="fa-book">Read books and stuff</li>
                <li class="fa-camera-retro">Take pictures</li>
                <li class="fa-play">Listen to music</li>
                <li class="fa-share-alt">Acquire and share knowledge</li>
              </ul>

              <hr />

              <a href="/~file/curriculo.pdf" class="button icon fa-download">Download my CV</a> if you want to see more.
            </div>
          </section>

        <!-- Three -->
          <section id="three">
            <div class="container">
              <h3>A Few Accomplishments</h3>
              <p>I really like challenges, so in my life I always try to test myself in different ways.</p>
              <div class="features">
                <article>
                  <a href="#" class="image"><img src="images/graph.png" alt="" /></a>
                  <div class="inner">
                    <h4>Education</h4>
                    <p>I represented my university in ACM International Collegiate Programming Contest for two years. I was choosen as the best coder in team.</p>
                  </div>
                </article>
                <article>
                  <a href="#" class="image"><img src="images/work.jpg" alt="" /></a>
                  <div class="inner">
                    <h4>Work</h4>
                    <p>I've built lots of interesting projects! From improvements to sponsored ad systems, to refactoring payment gateway components, from building content management systems to developing e-commerce sites.</p>
                  </div>
                </article>
                <article>
                  <a href="#" class="image"><img src="images/wordcloud.png" alt="" /></a>
                  <div class="inner">
                    <h4>Technologies</h4>
                    <ul>
                      <li>Java / Spring Boot / Drools, Python, PHP, Javascript / JQuery / Angular, Node.js.</li>
                      <li>Linux/Windows server and Cloud (AWS).</li>
                      <li>Machine Learning, Optimization, Search, and AdHocs algorithms.</li>
                    </ul>
                  </div>
                </article>
                <article>
                  <a href="#" class="image"><img src="images/salkantay.jpg" alt="" /></a>
                  <div class="inner">
                    <h4>Adventure</h4>
                    <p>I did a hard inka trail in Peru, called Salkantay Trek. 5 days of walking, camping, and enjoying the nature. The final point is Macchu Picchu Empire.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>

        <!-- Four -->
          <section id="four">
            <div class="container">
              <h3>Contact Me</h3>
              <p>If you want  to send me a message, that's for you!</p>
              <form method="post" action="/contact">
                <div class="row uniform">
                  <div class="6u 12u(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                  <div class="6u 12u(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                </div>
                <div class="row uniform">
                  <div class="12u"><input type="text" name="subject" id="subject" placeholder="Subject" /></div>
                </div>
                <div class="row uniform">
                  <div class="12u"><textarea name="message" id="message" placeholder="Message" rows="6"></textarea></div>
                </div>
                              <div class="row uniform g-recaptcha" data-callback="captchaResponse" data-sitekey="6LdNqsAZAAAAAPfJZrJcWOZQ5uEoAC3xG40Pnj9N"></div>
                <div class="row uniform">
                  <div class="12u">
                    <ul class="actions">
                      <li><input type="submit" id="send-btn" class="special" value="Send Message" disabled /></li>
                      <li><input type="reset" value="Reset Form" /></li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>

          </section>

    <!-- Footer -->
      <section id="footer">
        <div class="container">
          <ul class="copyright">
            <li>&copy; Alantiel.com.  All rights reserved.</li>
          </ul>
        </div>
      </section>

  </div>

  <!-- Scripts -->
  <script src="js/jquery.min.js"></script>
  <script src="js/jquery.scrollzer.min.js"></script>
  <script src="js/jquery.scrolly.min.js"></script>
  <script src="js/skel.min.js"></script>
  <script src="js/util.js"></script>
  <!--[if lte IE 8]><script src="js/ie/respond.min.js"></script><![endif]-->
  <script src="js/main.js"></script>
</body>
</html>
`

