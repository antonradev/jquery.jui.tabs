jquery.jui.tabs
===============

JUI Tabs is very small and simple but effective jQuery plugin that provides tabbed content for the modern web pages.

Usage:

 $("#myJUITabs").juitabs();
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
