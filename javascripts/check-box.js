(function(){$(function(){var e,a,s;return $(":checked").parents("label").addClass("is-checked"),$("input").click(function(e){var a,s,c;return c=e.target.type,a=$(this).prop("checked"),s=$(this).attr("name"),"checkbox"===c?(a===!0?$(this).parents("label").addClass("is-checked"):$(this).parents("label").removeClass("is-checked"),!0):"radio"===c?(a===!0&&($(this).parents("ul").each(function(){return $(this).find("label").removeClass("is-checked")}),$('input[name=" + name + "]').parents("ul label").removeClass("is-checked"),$(this).parents("label").addClass("is-checked")),!0):void 0}),$(this).find(":checked").closest("label").addClass("is-checked"),e=$(":radio").parent(),e.addClass("is-clickable"),e.click(function(){return $(this).find(":radio").attr("is-checked",!0)}),s=$(":radio").parents("label"),a=$(":checkbox").parents("label"),s.addClass("radio-label"),a.addClass("checkbox-label")})}).call(this);