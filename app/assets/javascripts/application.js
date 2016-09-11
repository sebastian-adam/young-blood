// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
// = require bootstrap-sprockets
// = require lazy_load_iframe
// = require jquery.sticky
// = require sticky_nav
// = require owl.carousel
// = require video_carousel

// FRONTEND
$(document).ready(function() {

  $("#landing_page").show().delay(800).slideUp(1000).delay(400);
  $("#young_blood_header").delay(1600).fadeIn(800);
  $("#region_container").delay(2200).fadeIn().slideDown(1000);
});
