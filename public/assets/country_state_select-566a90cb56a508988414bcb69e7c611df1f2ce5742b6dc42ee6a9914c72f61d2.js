function CountryStateSelect(t){function n(){l(),o(),c(),$("#"+v).change(function(){return p($(this).val())})}function e(){$("#"+y).change(function(){return f($("#"+y).val(),$("#"+v).val())})}function o(){r()&&s()&&$("#"+y).chosen(t.chosen_options)}function c(){r()&&a()&&$("#"+g).chosen(t.chosen_options)}function s(){return!$("#"+y).is("[type=text]")}function a(){return!$("#"+g).is("[type=text]")}function l(){r()&&$("#"+v).chosen(t.chosen_options)}function u(){r()&&($("#"+t.state_id+"_chosen").remove(),$("#"+t.city_id+"_chosen").remove())}function h(){r()&&$("#"+t.city_id+"_chosen").remove()}function r(){return t.hasOwnProperty("chosen_ui")&&t.chosen_ui}function p(t){u(),f("",""),$.ajax({url:"/find_states",type:"post",dataType:"json",cache:!1,data:{country_id:t},success:function(t){_(t)}})}function f(t,n){h(),$.ajax({url:"/find_cities",type:"post",dataType:"json",cache:!1,data:{country_id:n,state_id:t},success:function(t){m(t)}})}function _(t){if(0===t.length)html='<input id="'+y+'" name="'+x+'" class="'+j+'" type="text"  type="text" value="" >';else{for(html='<select id="'+y+'" name="'+x+'" class="'+j+'" >',html+="<option>"+d("state")+"</option>",i=0;i<t.length;i++)html+="<option value="+t[i][0]+">"+t[i][1]+"</option>";html+="</select>"}$("#"+y).replaceWith(html),t.length>0&&o(),void 0!==S&&e()}function d(n){return"city"===n?t.city_place_holder:t.state_place_holder}function m(t){if(0===t.length)html='<input id="'+g+'" name="'+S+'" class="'+T+'" type="text"  type="text" value="" >';else{for(html='<select id="'+g+'" name="'+S+'" class="'+T+'" >',html+="<option>"+d("city")+"</option>",i=0;i<t.length;i++)html+="<option>"+t[i]+"</option>";html+="</select>"}$("#"+g).replaceWith(html),t.length>0&&c()}var y=t.state_id,v=t.country_id,g=t.city_id,x=$("#"+y).attr("name"),j=$("#"+y).attr("class"),S=$("#"+g).attr("name"),T=$("#"+g).attr("class");return n()}