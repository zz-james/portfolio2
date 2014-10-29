<?php

	// Adding theme support for post thumbnails
	add_theme_support( 'post-thumbnails' );

	// Adding feed links to header
	add_theme_support( 'automatic-feed-links' );
	
	// fuckin line breaks shiz
	remove_filter( 'the_content', 'wpautop' );

?>
