<?php
/*
Template Name: Front Page
*/
?>

<?php get_header(); ?>
<div id="application" class="application scroll-h">
    <div id="page-scroller" class="horizontal-flow-container">



        <section id="home" class="column"> <a id="home-link"></a>
            <header class="rounded-wrapper">
                Home
            </header>
            <div class="column-wrapper">
                <div class="column-item">
                	<div class="column-border">
	                     <?php while ( have_posts() ) : the_post(); // home loop ?>
    	                <div class="blog-post">
    	                	
                       	    <?php if ( has_post_thumbnail() ) {the_post_thumbnail(array('auto','auto'));} ?>
                        	
                        	<div class="post-meta">
                        		<h5 class="blog-title"><?php the_title(); ?></h5>
								<?php the_content(); ?>
								<div style="text-align:right"><a href="/" id="readmore"><h5>view menu...</h5></a></div>
							</div>
    	                </div>
    	                <?php endwhile; ?>
    				</div>
                </div>
                <div class="backblock" style="background:#fff;height:100px"></div> 
            </div>          
        </section>
        <?php
            // Let's get the latest Work posts with a loop
            $work_query = new WP_Query(array(
                'category_name' => 'work',
                'posts_per_page' => 5)
            ); 
        ?>
        <section id="work" class="column"> <a id="work-link"></a>
            <header class="rounded-wrapper">
                Work
            </header>
            <div class="column-wrapper">
                <?php if ($work_query->have_posts()) { ?>
                <?php while ($work_query->have_posts()) : $work_query->the_post(); ?>
                <div class="column-item">
                	<div class="column-border">
		                <div class="blog-post">
		                   	<a class="overlay-link" href="#<?php the_id(); ?>">
                       		<?php if ( has_post_thumbnail() ) { the_post_thumbnail(array('auto','auto'));	} ?>
                        	</a>
                        	<div class="post-meta">
                        		<a class="overlay-link" href="#<?php the_id(); ?>"><h5 class="blog-title"><?php the_title(); ?></h5></a>
								<?php the_excerpt(); ?>
								<a class="overlay-link" href="#<?php the_id(); ?>">read more...</a>
							</div>
		                </div>
                    </div>
                </div>
                <?php endwhile; // Loop ends ?>
                <?php } ?>  
                <div class="column-border column-item"><h5><a class="overlay-link" href="#775">View my C.V. for more information about what I do</a></h5></div>
                <div class="backblock" style="background:#fff;height:100px"></div>               
            </div>
        </section>
        <?php
            // Let's get the latest blog posts with a loop
            $blog_query = new WP_Query(array(
                'category_name' => 'blog',
                'posts_per_page' => 5)
            ); 
        ?>
        <section id="blog" class="column"> <a id="blog-link"></a>
            <header class="rounded-wrapper">
                Blog
            </header>
            <div class="column-wrapper">
                <?php if ($blog_query->have_posts()) { ?>
                <?php while ($blog_query->have_posts()) : $blog_query->the_post(array(400,'auto')); ?>
                <div class="column-item">
                	<div class="column-border">
                    	<div class="blog-post">
                    		<a class="overlay-link" href="#<?php the_id(); ?>">
                    		<?php if ( has_post_thumbnail() ) { the_post_thumbnail(array('auto','auto'));	} ?>
                    		</a>
                    		<div class="post-meta">
                    			<a class="overlay-link" href="#<?php the_id(); ?>"><h5 class="blog-title"><?php the_title(); ?></h5></a>
								<?php the_excerpt(); ?>
								<a class="overlay-link" href="#<?php the_id(); ?>">read more...</a>
                    		</div>
                    	</div>
                	</div>
       			</div>
            <?php endwhile; // Loop ends ?>
            <?php } ?> 
            	<div class="column-border column-item"><h5>View more post on <a target='_pop' href='http://zzjames.wordpress.com/'>my other blog</a></h5></div>
                <div class="backblock" style="background:#fff;height:100px"></div> 
            </div>
        </section>
        <?php
            // Let's get the contact page with a loop
            $contact_query = new WP_Query(array(
                'category_name' => 'contact',
                'posts_per_page' => 1)
            ); 
        ?>
        <section id="contact" class="column"> <a id="contact-link"></a>
            <header class="rounded-wrapper">
                Contact
            </header>
            <div class="column-wrapper">
                <div class="column-item">
                	<div class="column-border">
                		<?php if ($contact_query->have_posts()) { ?>
	                    <?php while ( $contact_query->have_posts() ) : $contact_query->the_post(); // contact loop ?>
    	                <div class="blog-post">
    	                	
                       	    <?php if ( has_post_thumbnail() ) {the_post_thumbnail(array('auto','auto'));} ?>
                        	
                        	<div class="post-meta">
								<?php the_content(); ?>
							</div>
    	                </div>
    	                <?php endwhile; ?>
    	                <?php } ?>  
    				</div>
                </div>
            </div>
        </section>
<!--
        <section id="search" class="column"> <a id="search-link"></a>
            <header class="rounded-wrapper">
                Search
            </header>
            <div class="column-wrapper">
                <div class="column-item column-border">
                    <div class="blog-post">
                    	<br />
						Sorry seach is not available yet, coming soon!<br />
						<br />
                    </div>
                </div>
            </div>
        </section>
-->
        <?php
            // Let's get the latest git posts with a loop
            $git_query = new WP_Query(array(
                'category_name' => 'git',
                'posts_per_page' => 5)
            ); 
        ?>
        <section id="git" class="column"> <a id="git-link"></a>
            <header class="rounded-wrapper">
                Git
            </header>
            <div class="column-wrapper">
                <?php if ($git_query->have_posts()) { ?>
                <?php while ($git_query->have_posts()) : $git_query->the_post(); ?>
                <div class="column-item">
                	<div class="column-border">
		                <div class="blog-post">
		                   	
                       		<?php if ( has_post_thumbnail() ) { the_post_thumbnail(array('auto','auto'));	} ?>
                        	
                        	<div class="post-meta">
                        		<h5 class="blog-title"><?php the_title(); ?></h5>
								<?php the_excerpt(); ?>
								
							</div>
		                </div>
                    </div>
                </div>
                <?php endwhile; // Loop ends ?>
                <?php } ?> 
                <div class="column-border column-item"><h5>No more posts</h5></div> 
                <div class="backblock" style="background:#fff;height:100px"></div> 
            </div>
        </section>


	</div><!-- close #page-scroller -->
</div><!-- close .application -->


<?php get_footer(); ?>
