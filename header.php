<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta content="width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<title>James Cat Portfolio</title>
<link rel="profile" href="http://gmpg.org/xfn/11" />

<link rel="stylesheet" type="text/css" media="all" href="http://localhost:8888/wordpress/src/wp-content/themes/portfolio/css/normalize.css" />
<link rel="stylesheet" type="text/css" media="all" href="http://localhost:8888/wordpress/src/wp-content/themes/portfolio/css/style.css" />

<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<style>

    *, *:before, *:after {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color:#6b5651;
    }

    nav {
        position: absolute;
        margin: -200px 0 0 0;
        width: 100%;
        max-width: 501px;
        padding-right: 12px;
        z-index: 1;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    .nav-open {
        margin: 0 0 0 0;
    }

    nav a {
        color: #000;
    }

    nav a:active {
        color: #F00;
        transition: ease-out;
    }

    .application {
        min-width:320px;
        position:absolute;
        top:0;
        left:0;
        bottom:0px;
        right:0;
    }

    #page-scroller {
        clear: both;
    }

    /* --------------------- scroll bar stuff ---------------------- */
    .scroll-v {
        overflow-y:auto;
        -webkit-overflow-scrolling: touch;
    }

    .scroll-h {
        overflow-y:hidden;
        overflow-x:auto;
        -webkit-overflow-scrolling: touch;
    }

    /* --------------------- flow stuff ---------------------- */
    .horizontal-flow-container {
        overflow:visible;
        white-space:nowrap;
        height:99%;
    }

    /* --------------------- column stuff ------------------------ */
    .column {
        height:100%;
        width:100%;
        overflow-y:hidden;
        overflow-x:hidden;
        display:inline-block;
        white-space:normal;
        max-width: 500px;
        margin-left: -5px;
        vertical-align:top;
    }

    .column-wrapper {
        height: 90%;
        margin: 0 3px 0 10px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        padding-left: 0.9375em;
        padding-right: 0.9375em;
        background-color: #FFFFFF;

        border: 6px solid #fff;

        border-top: 0;
        box-shadow:
            -2px 0px 0 0 #0091cb inset, /* top right */
             2px 0px 0 0 #0091cb inset; /* top left */
    }

    .column-wrapper .column-item {
        width: 100%;
        padding-left:  0.2em;
        padding-right: 0.2em;
        margin-bottom: 50px;
        text-align: center;
    }
    
    .column-item .post-meta {
    	padding: 10px;	
	}

    .column-wrapper .blog-post {
        background-color: #F8F8F8;
    }

    .column-wrapper .column-border {
        border: 1px solid #DDDDDD;
    }

    header {
        font-size: 45px;
        padding-left: 5px;
        margin-top: 10px;
        /*display: none;*/
        color: #000;
    }

    .rounded-wrapper {
        background-color: #FFFFFF;
        border-radius: 25px 25px 0 0;
        margin: 10px 3px 0 10px;
        padding: 21px 1px 10px 12px;
        /* internal stripe */
        border: 6px solid #fff;
        border-bottom: 0;
        box-shadow:
            -2px 2px 0 0 #0091cb inset, /* bottom right */
             2px 2px 0 0 #0091cb inset; /* top left */
    }
    
    .column-item img {
    	width: 100%;
    	height: auto;
    }

</style>
<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<nav id="nav">
    <div class="panel background-orange">
        <a href="#home" id="button-home" class="panel-button-link">
            <div class="panel-button background-green">
                <span class="icon icon-home"></span>
            </div>
        </a>
        <a href="#work" id="button-work" class="panel-button-link">
            <div class="panel-button">
                <span class="panel-button-label">Work</span>
            </div>
        </a>
        <a href="#blog" id="button-blog" class="panel-button-link">
            <div class="panel-button">
                <span class="panel-button-label">Blog</span>
            </div>
        </a>
        <a href="#contact" id="button-contact" class="panel-button-link">
            <div class="panel-button background-blue">
                <span class="icon icon-phone"></span>
            </div>
        </a>
        <a href="#search" id="button-search" class="panel-button-link">
            <div class="panel-button">
                <span class="icon icon-search"></span>
            </div>
        </a>
        <a href="#git" id="button-git" class="panel-button-link">
            <div class="panel-button background-red">
                <span class="icon icon-github"></span>
            </div>
        </a>
    </div>

    <div id="nav-tab" class="panel-tab background-orange">
        <span class="icon-menu"></span>
    </div>
</nav>
