/*
 * jquery.jui.tabs v0.1
 * Creates tabs from HTML list and div elements
 * https://github.com/antonradev/jquery.jui.checkboxes
 *
 * Usage:
 *
 *$("#myJUITabs").juitabs();
 *HTML structure:
 <div class="jui-tabs-container" id="myJUITabs">
    <ul>
        <li class="active"><a>Tab 1</a></li>
        <li><a>Tab 2</a></li>
        <li><a>Tab 3</a></li>
    </ul>
    <div class="jui-tabs">
        <div class="jui-tab active">
            Content of the tab
            Content of the tab
        </div>
        <div class="jui-tab">
            Content of the tab
            Content of the tab
        </div>
        <div class="jui-tab">
            Content of the tab
            Content of the tab
        </div>
    </div>
 </div>
 * Please notice that your visible by default tab needs class 'active' (for both "li" and "div" tags)
 *
 * https://github.com/antonradev/jquery.jui.tabs
 * http://jui.uxpd.net/tabs.html
 *
 * Copyright (c) 2014 Anton Radev anton.radev@gmail.com http://www.antonradev.com
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */



(function($) {

    $.fn.juitabs = function() {

        if (this.length) {

            $(this).find('li').click(function() {
                $(this).parents().find('.jui-tab').hide();
                $(this).parent().next().children().hide().eq($(this).index()).show();
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            });

        }
        else {
            console.log("There is no selector in the Markup code");
            return;
        }
    };


}(jQuery));





