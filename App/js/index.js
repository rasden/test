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
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkMQ")
                .setDirtyMark(false)
                .setLeft("8.333333333333334em")
                .setTop("18.333333333333332em")
                .setWidth("12em")
                .setCaption("MQ")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkOPQ")
                .setDirtyMark(false)
                .setLeft("8.333333333333334em")
                .setTop("21.666666666666668em")
                .setWidth("12em")
                .setCaption("OPQ")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"checkUCR")
                .setDirtyMark(false)
                .setLeft("8.333333333333334em")
                .setTop("25.833333333333332em")
                .setWidth("12em")
                .setCaption("UCR")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput3")
                .setDirtyMark(false)
                .setLeft("43.333333333333336em")
                .setTop("12.5em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Date Picker")
                .setType("date")
            );
            
            append(
                xui.create("xui.UI.DatePicker")
                .setHost(host,"xui_ui_datepicker1")
                .setDirtyMark(false)
                .setLeft("40em")
                .setTop("15.833333333333334em")
                .setValue(new Date(2019,6,18,0,0,0,0))
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"InputName")
                .setRequired(true)
                .setDirtyMark(false)
                .setLeft("2.5em")
                .setTop("3.3333333333333335em")
                .setWidth("58.833333333333336em")
                .setHeight("2.5em")
                .setLabelSize("10em")
                .setLabelCaption("Meno a priezvisko")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"comboCompany")
                .setDirtyMark(false)
                .setLeft("5em")
                .setTop("7.5em")
                .setWidth("30.5em")
                .setLabelSize("8em")
                .setLabelCaption("Spoločnosť")
                .setType("listbox")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"comboUser")
                .setDirtyMark(false)
                .setLeft("5em")
                .setTop("10.833333333333334em")
                .setWidth("30.5em")
                .setLabelSize("8em")
                .setLabelCaption("Drop List Input")
                .setType("listbox")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
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