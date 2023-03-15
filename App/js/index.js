// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button3")
                .setLeft("3.8095238095238093em")
                .setTop("3.0476190476190474em")
                .setWidth("11.352380952380953em")
                .setCaption("Run FPS Unlocker")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setLeft("21.333333333333332em")
                .setTop("14.476190476190476em")
                .setWidth("23.00952380952381em")
                .setHeight("7.314285714285714em")
                .setCaption("Roblox FPS Unlocker Extreme V1.2 Non-Freeware [Free Trial]")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "12"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image5")
                .setLeft("27.428571428571427em")
                .setTop("16em")
                .setWidth("11.733333333333333em")
                .setHeight("8.685714285714285em")
                .setSrc("{xui.ini.img_pic}")
            );
            
            append(
                xui.create("xui.UI.ProgressBar")
                .setHost(host,"xui_ui_progressbar2")
                .setLeft("1.5238095238095237em")
                .setTop("29.714285714285715em")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label8")
                .setLeft("7.619047619047619em")
                .setTop("28.19047619047619em")
                .setWidth("11.58095238095238em")
                .setHeight("3.5047619047619047em")
                .setCaption("Installing Mod to game")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setRequired(true)
                .setLeft("40.38095238095238em")
                .setTop("28.19047619047619em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Username")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input8")
                .setRequired(true)
                .setLeft("40.38095238095238em")
                .setTop("29.714285714285715em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Password")
                .setType("password")
                .setValue("pwd")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input9")
                .setRequired(true)
                .setLeft("40.38095238095238em")
                .setTop("26.666666666666668em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Gmail")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label9")
                .setLeft("44.95238095238095em")
                .setTop("24.38095238095238em")
                .setWidth("13.866666666666667em")
                .setHeight("2.742857142857143em")
                .setCaption("Login to your GitHub account")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button7")
                .setLeft("48.76190476190476em")
                .setTop("32em")
                .setWidth("9.066666666666666em")
                .setCaption("Login")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "xui_ui_button7",
                        "args" : [ ],
                        "method" : "hide",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput73")
                .setLeft("0.7619047619047619em")
                .setTop("16em")
                .setWidth("19.504761904761907em")
                .setLabelSize("8em")
                .setLabelCaption("Activation File")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label10")
                .setLeft("12.952380952380953em")
                .setTop("17.523809523809526em")
                .setWidth("6.247619047619048em")
                .setHeight("3.5047619047619047em")
                .setCaption("File name : ActivationCode.rfue")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label11")
                .setLeft("39.61904761904762em")
                .setTop("1.5238095238095237em")
                .setWidth("19.961904761904762em")
                .setHeight("11.123809523809523em")
                .setCaption("Roblox FPS Unlocker Extreme is not a freeware program you need to buy to can still use application and access FPS Booster Ultra. This version is trial version 1 month. please buy a program or Activation Code")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button4")
                .setLocked(true)
                .setLeft("3.8095238095238093em")
                .setTop("6.095238095238095em")
                .setWidth("11.352380952380953em")
                .setHeight("2.057142857142857em")
                .setCaption("Run FPS Booster")
                .setDesc("Please buy a program to acces this option")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});