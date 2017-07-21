<?php get_header();  ?>

<?php
  if( have_rows('splash_section') ):
      while ( have_rows('splash_section') ) : the_row();
      $splashLogo = get_sub_field('splash_logo');
      $splashText = get_sub_field('splash_text');
      endwhile;
  endif;

  if( have_rows('carbone_section') ):
      while ( have_rows('carbone_section') ) : the_row();
      $carboneImage = get_sub_field('carbone_banner');
      $carboneBG = get_sub_field('carbone_background');
      $carboneText1 = get_sub_field('carbone_text_1');
      $carboneText2 = get_sub_field('carbone_text_2');
      $carboneImage1 = get_sub_field('carbone_image_1');
      $carboneImage2 = get_sub_field('carbone_image_2');
      $carboneImage3 = get_sub_field('carbone_image_3');
      endwhile;
  endif;

  if( have_rows('about_section') ):
      while ( have_rows('about_section') ) : the_row();
      $aboutImage = get_sub_field('about_image');
      $aboutText1 = get_sub_field('about_text_1');
      $aboutText2 = get_sub_field('about_text_2');
      endwhile;
  endif;

  if( have_rows('contact_section') ):
      while ( have_rows('contact_section') ) : the_row();
      $contactText = get_sub_field('contact_text');
      $address = get_sub_field('address');
      $services = get_sub_field('services');

      if( have_rows('services') ):
          while ( have_rows('services') ) : the_row();
          $serviceName = get_sub_field('name');
          $serviceUrl = get_sub_field('url');
          endwhile;
      endif;

      endwhile;
  endif;

  $images = get_field('gallery_section');
  $footerBanner = get_field('footer_image');
  $MenuPDF = get_field('menu_pdf');

?>

<div id="loader">
  <div class="load">
    <img src="wp-content/themes/masseriaTheme/images/cock.svg">
  </div>
<!--   <object id="loader-logo" data="<?php echo $splashLogo['url'] ?>" type="image/svg+xml">
  Your browser doesn't support SVG
  </object> -->
</div>

<div class="main">
  <div class="container">

      <?php 
        
      $splashImage = get_field('splash_image');
      $rand = array_rand($splashImage, 1);
        
      if( $splashImage ): ?>
      <section id="home" style="background-image:url(<?php echo $splashImage[$rand]['url']; ?>);">
        <img class= "logo" src="<?php echo $splashLogo['url'] ?>" alt="">
        <div class="circle"></div>
      </section>
      <?php endif; ?>

      <section id="home-text">
        <div class="inner-wrapper">
          <p><?php echo $splashText ?></p>
        </div>
      </section>

      <!-- <section id="about-banner" style="background-image: url(<?php echo $aboutImage['url'] ?>);"></section> -->

      <section id="carbone" style="background-image: url(<?php echo $carboneBG['url'] ?>);">
        <div class="carbone-gallery">
          <div class="carbone-image carbone-image-1" style="background-image: url(<?php echo $carboneImage1['url'] ?>);"></div>
          <div class="carbone-image carbone-image-2" style="background-image: url(<?php echo $carboneImage2['url'] ?>);"></div>
        </div>
        <div class="inner-wrapper">
          <div class="carbone-text">
            <div class="text text-1">
              <p><?php echo $carboneText1 ?></p>
            </div>
            <div class="text text-2">
             <p><?php echo $carboneText2 ?></p>
            </div>
          </div>
        </div>

      </section>

      <section id="carbone-banner" style="background-image: url(<?php echo $carboneImage['url'] ?>);"></section>

      <section id="about" class="theme-dark"> 
        <div class="inner-wrapper">
          <div class="text">
            <p><?php echo $aboutText1 ?></p>
            <p><?php echo $aboutText2 ?></p>
          </div>
        </div>
      </section>

      <section id="gallery" class="theme-dark">
        <div id="customCursor"></div>
        <?php if( $images ): ?>
            <ul class="slider">
                <?php foreach( $images as $image ): ?>
                    <li>
                        <!-- <a href="<?php echo $image['url']; ?>" target="_blank"> -->
                             <img class="images" src="<?php echo $image['sizes']['large']; ?>" alt="<?php echo $image['alt']; ?>" />
                        <!-- </a> -->
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>
      </section>

      <section id="menu" class="theme-dark">
        <div class="menu-nav">
          <div class="menu-header">
            <h2>Menu</h2>
            <div class="menu-button">
              <div class="menu-pdf">
                <a href="<?php echo $MenuPDF['url'] ?>" target="_blank">Download Menu</a>
              </div>
            </div>
          </div>

          <ul>
            <li id="food" class="active-tab">Food</li>
            <li id="create">Create Your Own</li>
            <li id="drink">Drink</li>
          </ul>
        </div>
        <div class="inner-wrapper">
          <?php if( have_rows('menu_repeater') ): ?>
              <?php while ( have_rows('menu_repeater') ) : the_row(); ?>
                  <div class="menu-section <?php the_sub_field('menu_section') ?>">
                     <h2><?php the_sub_field('menu_section') ?> <span class="menu-size"><?php the_sub_field('menu_size') ?></span></h2>
                      <div class="menu-items">
                     <?php if(get_sub_field('menu_details')): ?>
                      <?php while(has_sub_field('menu_details')): ?>
                          <div class="menu-item">
                            <div class="menu-box">
                              <p class="name"><?php the_sub_field('menu_item') ?></p>
                              <p class="price"><?php the_sub_field('menu_price') ?></p>
                            </div>
                            <p class="description"><?php the_sub_field('menu_description')?></p>
                          </div> 
                      <?php endwhile; ?>
                    <?php endif; ?>
                      </div>
                  </div>
              <?php endwhile; ?>
          <?php endif; ?>
        </div>
      </section>

      <section id="contact" class="theme-dark">
        <div class="inner-wrapper">
          <h2><?php echo $contactText ?></h2>

          <div class="inner-content">
            <div class="location-info">
              <div class="location">
                <h3>Location</h3>
                <a href="https://goo.gl/maps/HGaRLAN5cw62" target="_blank"><p><?php echo $address ?></p></a>
              </div>
              <div class="contact-us">
                <h3>Contact Us</h3>
                <?php if(get_field('contact_section')): ?>
                    <?php while(has_sub_field('contact_section')): ?>
                    
                      <?php if(get_sub_field('contact')): ?>
                        <?php while(has_sub_field('contact')): ?>
                          <a href="tel:4162639999"><p><?php the_sub_field('number') ?></p></a>
                          <p><a href="mailto:info@masseria.ca"></a><?php the_sub_field('email') ?></p>
                        <?php endwhile; ?>
                      <?php endif; ?>
                      
                    <?php endwhile; ?>
                <?php endif; ?>
              </div>
            </div>
            
            <div class="social-info">
              <div class="find-us">
                <h3>Find Us On</h3>
                <?php if(get_field('contact_section')): ?>
                    <?php while(has_sub_field('contact_section')): ?>

                      <ul>
                        <?php if(get_sub_field('services')): ?>
                          <?php while(has_sub_field('services')): ?>
                            <a href="<?php the_sub_field('url') ?>" target="_blank"><li><?php the_sub_field('name') ?></li></a>
                          <?php endwhile; ?>
                        <?php endif; ?>
                      </ul>

                    <?php endwhile; ?>
                <?php endif; ?>

              </div>
              <div class="social">
                <h3>Social</h3>
                <?php if(get_field('contact_section')): ?>
                    <?php while(has_sub_field('contact_section')): ?>
                      
                      <ul>
                        <?php if(get_sub_field('social')): ?>
                          <?php while(has_sub_field('social')): ?>
                            <a href="<?php the_sub_field('url') ?>" target="_blank"><li><?php the_sub_field('name') ?></li></a>
                          <?php endwhile; ?>
                        <?php endif; ?>
                      </ul>

                    <?php endwhile; ?>
                <?php endif; ?>
              </div>
            </div>
          </div>
        </div>        
      </section>



      <section id="hours" class="theme-dark">
        <div class="inner-wrapper">
          <h3>Hours</h3>
          <div class="inner-container">
            <ul>
              <?php
              if( have_rows('hours_section') ):
                  while ( have_rows('hours_section') ) : the_row();
                  $day = get_sub_field('day');

                  echo '<li>'. $day . '</li>'; 

                  // debug_to_console( $day );
                  endwhile;
              endif;
              ?>
            </ul>

            <ul>
              <?php 
              if( have_rows('hours_section') ):
                  while ( have_rows('hours_section') ) : the_row();
                  $hour = get_sub_field('hours');

                  echo '<li>'. $hour . '</li>'; 

                  // debug_to_console( $day );
                  endwhile;
              endif;
              ?>
            </ul>
          </div>
          <div class="subscribe">
            <?php es_subbox( $namefield = "NO", $desc = "", $group = "" ); ?>
          </div>
        </div>
      </section>

      <section id="footer" style="background-image: url(<?php echo $footerBanner['url'] ?>);">

<!--         <div class="bg">
          <img src="<?php echo $footerBanner['url'] ?>" alt="">
        </div> -->
        
      </section>

  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>