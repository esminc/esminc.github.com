(function(){$(function(){return $(".js-show-content-trigger").click(function(){var n;return n=$(this).parents(".js-show-content"),$(n).find(".js-show-content-target").addClass("is-shown"),$(this).addClass("is-hidden")}),$(".js-show-content-hide-trigger").click(function(){var n;return n=$(this).parents(".js-show-content"),$(n).find(".js-show-content-target").removeClass("is-shown"),$(n).find(".js-show-content-trigger").removeClass("is-hidden")})})}).call(this);