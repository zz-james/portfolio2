<?php get_header(); ?>

<div>

	<?php if (have_posts()) : ?>

	 <?php while (have_posts()) : the_post(); ?>

     <div <?php post_class() ?> id="post-<?php the_ID(); ?>">
      <h2>
       <a
         href="<?php the_permalink() ?>"
         rel="bookmark"
         title="Permalink to <?php the_title_attribute(); ?>">
         <?php the_title(); ?>
       </a>
      </h2>

      <div class="entry">
       <?php the_content('more..'); ?>
      </div>
     </div>

     <?php endwhile; ?>

</div>

	<?php else : ?>

		<h2 class="center">Not Found</h2>
		<?php get_search_form(); ?>

	<?php endif; ?>

<?php get_footer(); ?>
