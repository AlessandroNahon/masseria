<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php // Load Meta ?>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php  wp_title('|', true, 'right'); ?></title>
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>
  <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/masseria_logotype_black.png" />
  <!-- stylesheets should be enqueued in functions.php -->
  <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>

<?php
  if( have_rows('splash_section') ):
      while ( have_rows('splash_section') ) : the_row();
      $splashLogo = get_sub_field('splash_logo');
      $splashLogoDark = get_sub_field('splash_logo_dark');
      endwhile;
  endif;

?>

<header>
  <div class="inner-wrapper">
    <!-- <h1> -->

      <a href="#home" rel="home">

        <img class= "logo-nav" src="<?php echo $splashLogo['url'] ?>" alt="">

        <img class= "logo-nav-dark" src="<?php echo $splashLogoDark['url'] ?>" alt="">

      </a>
   <!--  </h1> -->

   <div class="hamburger">
       <span class="bar-1"></span>
       <span class="bar-2"></span>
       <span class="bar-3"></span>
   </div>

   <div class="desktop-nav">
      <?php wp_nav_menu( array(
        'container' => false,
        'theme_location' => 'primary'
      )); ?>
    </div>

    <div class="mobile-nav">
          <?php wp_nav_menu( array(
            'container' => false,
            'theme_location' => 'primary'
          )); ?>
    </div>






  </div> <!-- /.container -->
</header><!--/.header-->



