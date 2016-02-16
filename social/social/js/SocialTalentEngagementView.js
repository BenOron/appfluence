/**
 * Created by I075528 on 4/2/14.
 */
var NAMESPACE = function () {
    chartViewNew();
    openPopup();
    headerView();
    lineChart();

    $('#container1').click(function(){
        POST_DIALOG();
    });

    $('#headerSettings').click(function(){
        FILTER_DIALOG();
    });

}();




openPopup:function openPopup(){
    $('.close').click(function(){
        $('.popup').hide();
        return false;
    });

    $('.x').click(function(){
        $('.popup').hide();
        return false;
    });

    $('.openPopup').click(function(){
        $('.popup').show();
        return false;
    });
}


headerView:function headerView(){
    var oButton9 = new sap.ui.commons.Button({
        text : "",
        icon : "sap-icon://settings",
        id:'headerSettings1'
        /*press : function() {alert('Alert from ' + oButton9.getText());}*/
    }).placeAt("headerSettings");
}

getJson:function getJson() {
    this.socialMediaJSON = [];
    var that=this;
    $.getJSON("social/db/socialMedia.json", function (data,that) {
        /* $.each(data.socialdata, function (i, f) {
         });*/
        debugger;
        that.socialMediaJSON.push(data);
    });
    return this.socialMediaJSON;
}

chartView:function chartView() {
    //   var aData = getJson();
    width = $(".tiles").width()-81;
    height =  $(".tiles").height() -23;

    var  key = 0;
    $.getJSON("social/db/socialMedia.json", function (aData) {
        $.each(aData, function (i, f) {
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({businessData: f});
            var oDataset = new sap.viz.ui5.data.FlattenedDataset({
                dimensions: [
                    {
                        axis: 1,
                        name: 'SocialMedia',
                        value: "{SocialMedia}"
                    }
                ],
                measures: [
                    {
                        name: 'monthAmount',
                        value: '{monthAmount}'

                    }
                ],
                data: {
                    path: "/businessData"
                }
            });
            var oCChart = new sap.viz.ui5.Column({
                width: width + "px",
                height: height +"px",
                style:{
                    float:"right"
                },
                title: {
                    visible: false,
                    text: 'Customer Ranking by revenue'
                },
                legend:{
                    visible: false
                },


                plotArea: {
                    animation: {
                        dataLoading: false,
                        dataUpdating: true
                    }
                },


                yAxis : {
                     label:{
                        visible : false
                    }
                },
                dataLabel : {
                    visible : true
                },

                plotArea: {
                    colorPalette: ["GREY", "RED", "Green"]
                },
                dataset: oDataset
            });
            oCChart.destroyLegendGroup();
            oCChart.setModel(oModel);
            console.log("chartPosts" + key);
            oCChart.placeAt("chartPosts" + key++);

        });
    });

}




chartViewNew:function chartViewNew(){
    width = $(".tiles").width();
    height =  $(".tiles").height() -23;
    var  key = 0;
    $.getJSON("social/db/socialMedia.json", function (aData) {
        $.each(aData, function (i, f) {
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({businessData: f});
             var oDataset = new sap.viz.ui5.data.FlattenedDataset({
                 dimensions: [
                     {
                         axis: 1,
                         name: 'SocialMedia',
                         value: "{SocialMedia}"
                     }

                 ],
                 measures: [
                     {
                         name: 'SCN',
                         value: '{monthAmount}'
                     }


                 ],

                 data: {
                     path: "/businessData"
                 },


                 plotArea : {
                     colorPalette : []
                 }
    });

    // create a Bar chart
    var css = '.v-datashape{ fill: 1,1}';
    var oBarChart = new sap.viz.ui5.Bar({
        width: width + "px",
        height: height +"px",

        style:{
            float:"right"
        },
        title: {
            visible: false,
            text: 'Customer Ranking by revenue'
        },
        legend:{
            visible: false
        },


        plotArea: {
            animation: {
                dataLoading: false,
                dataUpdating: true
            }
        },
        yAxis : {
            label:{
                visible : true
            }
        },

        xAxis : {
            label:{
                visible : false
            }
        },
        dataLabel : {
            visible : true
        },


        plotArea: {
            colorPalette :  ['#FC8851','#19CFDF','#FFD600'],
            drawingEffect : sap.viz.ui5.types.VerticalBar_drawingEffect.normal

        },
        css : css,

        dataset: oDataset
    });

    // attach the model to the chart and display it
            oBarChart.destroyLegendGroup();
            oBarChart.setCss("width:20px");
            oBarChart.setModel(oModel);
            console.log("chartPosts" + key);
            oBarChart.setModel(oModel);
            oBarChart.placeAt("chartPosts" + key++);
        });
    });
}


lineChart: function lineChart(){

    var oModel = new sap.ui.model.json.JSONModel({
        data:[

            { Month : "Q1",team: 4.12,user:4.99},
            { Month : "Q2",team: 3.95,user:4.15},
            { Month : "Q3",team: 3.88,user:3.92},
            { Month : "Q4",team: 4.35,user:5.22}

        ]
    });


    var oDataset = new sap.viz.ui5.data.FlattenedDataset({
        dimensions : [
            {
                axis : 1,
                value : "{Month}"
            }
        ],

        measures : [
            // measure 1
            {
                name : 'user', // 'name' is used as label in the Legend
                value : '{user}' // 'value' defines the binding for the displayed value
            },
            {
                name: 'team',
                value: '{team}'
            }
        ],

        // 'data' is used to bind the whole data collection that is to be displayed in the chart
        data : {
            path : "/data"
        }
    });
    var css = '.v-lines{ stroke: 1,1}';
    var oLineChart = new sap.viz.ui5.Line("myline", {
        width : "470px",
        height : "200px",
        showTableValue:false,
        showRangeSelector: false,
        title : {
            visible : false,
            text : 'Current and Expected Revenue'
        },
        legend: {
            visible: false,
            title: {
                visible: false,
                text: "Revenue"
            }
        },
        yAxis: {
            showLabel:true,showGrid:true
        },
        xAxis: {show :false,
            showLabel:false,showGrid:false
        },
        plotArea: {
            colorPalette: ['#FC8851','#408588']
        },
        css : css,

        dataset : oDataset
    });
    oLineChart .setModel(oModel);
    var headlineColorDiv = new sap.ui.commons.layout.VerticalLayout();
    var cl = new sap.ui.commons.layout.VerticalLayout();
    cl.addContent(oLineChart);
    var text = new sap.ui.commons.Label({text:""});
    var oLayout2 = new sap.ui.commons.layout.HorizontalLayout();
    oLayout2.addContent(headlineColorDiv).addContent(text).addContent(oLineChart);

    oLayout2.placeAt("userChart");
}




var oToggleButton4 = new sap.ui.commons.ToggleButton({
    text : "",
    tooltip: "MyView",
    styled: false,
    id:"MyView1",
    pressed:true,
    press : function() {alert('Alert from ' + oToggleButton4.getText() + ' with pressed state : ' + oToggleButton4.getPressed());}
}).addStyleClass("myButton").placeAt("myView");



var oToggleButton6= new sap.ui.commons.ToggleButton({
    text : "",
    tooltip: "TeamView",
    styled: false,
    id:"TeamView1",
    press : function() {alert('Alert from ' + oToggleButton6.getText() + ' with pressed state : ' + oToggleButton6.getPressed());}
}).addStyleClass("myButton").placeAt("worldView");

var oToggleButton5= new sap.ui.commons.ToggleButton({
    text : "",
    tooltip: "worldView",
    styled: false,
    id:"worldView1",
    press : function() {alert('Alert from ' + oToggleButton5.getText() + ' with pressed state : ' + oToggleButton5.getPressed());}
}).addStyleClass("myButton").placeAt("worldView");

/*<--------------------->*/

var oToggleButton7 = new sap.ui.commons.ToggleButton({
    text : "Week",
    tooltip: "Week",
    styled: false,
    id:"Week1",
    pressed:false,
    press : function() {alert('Alert from ' + oToggleButton4.getText() + ' with pressed state : ' + oToggleButton4.getPressed());}
}).addStyleClass("myButton").placeAt("worldView");




var oToggleButton8= new sap.ui.commons.ToggleButton({
    text : "Month",
    tooltip: "Month",
    styled: false,
    id:"month1",
    pressed:true,
    press : function() {alert('Alert from ' + oToggleButton6.getText() + ' with pressed state : ' + oToggleButton6.getPressed());}
}).addStyleClass("myButton").placeAt("worldView");

var oToggleButton9= new sap.ui.commons.ToggleButton({
    text : "3 Months",
    tooltip: "3 month",
    styled: false,
    id:"month_3",
    press : function() {alert('Alert from ' + oToggleButton5.getText() + ' with pressed state : ' + oToggleButton5.getPressed());}
}).addStyleClass("myButton").placeAt("worldView");


var oToggleButton10 = new sap.ui.commons.ToggleButton({
    text : "6 Months",
    tooltip: "6 month",
    styled: false,
    id:"month_6",
    pressed:false,
    press : function() {alert('Alert from ' + oToggleButton4.getText() + ' with pressed state : ' + oToggleButton4.getPressed());}
}).addStyleClass("myButton").placeAt("worldView");




var oToggleButton11= new sap.ui.commons.ToggleButton({
    text : "Year",
    tooltip: "Year",
    styled: false,
    id:"Year",
    press : function() {alert('Alert from ' + oToggleButton6.getText() + ' with pressed state : ' + oToggleButton6.getPressed());}
}).addStyleClass("myButton").placeAt("worldView");


