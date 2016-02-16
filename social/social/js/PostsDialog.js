/**
 * Created by I055921 on 4/3/14.
 */
var POST_DIALOG = function () {


     this.postsJSON =  {
        "Blog1": {
            "icon": "SCN.jpg",
            "SCNBlogDate": "Mar 26, 2014 4:16:44 PM",
            "SCNBlogLink": "http:\/\/scn.sap.com\/community\/distinguished-engineers\/blog\/2014\/03\/26\/kevin-small-sap-hana-distinguished-engineer-and-brit",
            "SCNBlogLikes": 3,
            "SCNBlogContent": "This week is the inaugural SAP HANA 2014 Conference in Orlando, and we obviously need to add a HANA Distinguished Engineer to celebrate. What better irony, than to bring in a British HDE? My US laptop has covered this blog with red lines over the Anglicisms, which is pretty ironic given I am also BRitish.",
            "SCNBlogTitle": "Kevin Small, SAP HANA Distinguished Engineer, and Brit",
            "SCNBlogReplies": 6
        },
        "Tweet3": {
            "icon": "twitter.jpg",
            "TwitterPostDate": "March 31, 2014 3:51 AM",
            "TwitterPostContent": "3.49am, wide awake and rewriting my #sapdcode keynote; wondering how I can reproduce 10% of @vsikka's awesomeness.",
            "TwitterPostRetweets": 1,
            "TwitterPostFavourites": 3,
            "TwitterPostLink": "https:\/\/twitter.com\/applebyj\/status\/450435071477288961"
        },
        "Tweet2": {
            "icon": "twitter.jpg",
            "TwitterPostDate": "March 31, 2014 09:45 AM",
            "TwitterPostContent": "Abdul Razack up at #sapdcode speaking on End User Experience",
            "TwitterPostRetweets": 5,
            "TwitterPostFavourites": 2,
            "TwitterPostLink": "https:\/\/twitter.com\/applebyj\/status\/450524359711817728"
        },
        "SapJam5": {
            "icon": "sapjam.jpg",
            "SCNBlogDate": "April 2, 2014 10:26 AM ",
            "SCNBlogLink": "https://jam4.sapjam.com/auth/login",
            "SCNBlogLikes": 20,
            "SCNBlogContent": "I've been involved in a few SAP HANA projects where performance has been initially disappointing, and I have been asked to come and show the customer HANA speed. As I've said before, you can take the best technology in the world, create a bad design, and it will work badly. Yes, even SAP HANA can be slow",
            "SCNBlogTitle": "Best Practices for SAP HANA Data Loads",
            "SCNBlogReplies": 16
        },
        "Discussion3": {
            "icon": "SCN.jpg",
            "SCNDiscussionTitle": "Problem post-tagging content",
            "SCNDiscussionLikes": 0,
            "SCNDiscussionContent": "Hey, So in the HDE Space: http:\/\/scn.sap.com\/community\/distinguished-engineers We have a Content tagged with HDE section. I forgot to tag some content HDE, then tagged it after I create it, but it still doesn't appear in the tagged section.",
            "SCNDiscussionDate": "February 4, 2014 9:15 AM",
            "SCNDiscussionReplies": 2,
            "SCNDiscussionLink": "http:\/\/scn.sap.com\/thread\/3495379"
        },
        "Blog4": {
            "icon": "SCN.jpg",
            "SCNBlogDate": "April 1, 2014 4:35 PM",
            "SCNBlogLink": "http:\/\/scn.sap.com\/community\/hana-in-memory\/blog\/2014\/03\/14\/how-much-does-a-sap-hana-appliance-really-cost-part-2-ibm-ivy-bridge",
            "SCNBlogLikes": 12,
            "SCNBlogTitle": "The last blog I wrote, How much does a SAP HANA appliance really cost?, seemed to pique people's interest. However, there were two really big questions that came for me out of it: what about the world's best selling HANA appliance, the IBM X5, and what about the new SAP Certified Appliance Hardware for SAP HANA Ivy Bridge appliances based on the IBM X6?",
            "SCNBlogReplies": 11
        },
        "Blog3": {
            "icon": "SCN.jpg",
            "SCNBlogDate": "April 1, 2014 4:42 PM",
            "SCNBlogLink": "http:\/\/scn.sap.com\/community\/hana-in-memory\/blog\/2013\/11\/25\/comparing-sap-hana-and-sybase-iq--real-world-performance-tests",
            "SCNBlogLikes": 7,
            "SCNBlogContent": "When SAP talks about HANA, they quite often talk about the 1000x improvements in performance that you can get. A customer asked me last week why SAP HANA would provide any improvement over their implementation of Sybase IQ, if they pinned all the IQ tables in memory. They conjectured that IQ should be just as fast as HANA, right?",
            "SCNBlogTitle": "Comparing SAP HANA and Sybase IQ - real world performance tests",
            "SCNBlogReplies": 21
        },
        "Blog2": {
            "icon": "SCN.jpg",
            "SCNBlogDate": "April 2, 2014 10:26 AM ",
            "SCNBlogLink": "http:\/\/scn.sap.com\/community\/hana-in-memory\/blog\/2013\/04\/08\/best-practices-for-sap-hana-data-loads",
            "SCNBlogLikes": 20,
            "SCNBlogContent": "I've been involved in a few SAP HANA projects where performance has been initially disappointing, and I have been asked to come and show the customer HANA speed. As I've said before, you can take the best technology in the world, create a bad design, and it will work badly. Yes, even SAP HANA can be slow",
            "SCNBlogTitle": "Best Practices for SAP HANA Data Loads",
            "SCNBlogReplies": 16
        },
         "Blog11": {
             "icon": "SCN.jpg",
             "SCNBlogDate": "Mar 26, 2014 4:16:44 PM",
             "SCNBlogLink": "http:\/\/scn.sap.com\/community\/distinguished-engineers\/blog\/2014\/03\/26\/kevin-small-sap-hana-distinguished-engineer-and-brit",
             "SCNBlogLikes": 3,
             "SCNBlogContent": "This week is the inaugural SAP HANA 2014 Conference in Orlando, and we obviously need to add a HANA Distinguished Engineer to celebrate. What better irony, than to bring in a British HDE? My US laptop has covered this blog with red lines over the Anglicisms, which is pretty ironic given I am also BRitish.",
             "SCNBlogTitle": "Kevin Small, SAP HANA Distinguished Engineer, and Brit",
             "SCNBlogReplies": 6
         },
         "Tweet4": {
             "icon": "twitter.jpg",
             "TwitterPostDate": "March 31, 2014 3:51 AM",
             "TwitterPostContent": "3.49am, wide awake and rewriting my #sapdcode keynote; wondering how I can reproduce 10% of @vsikka's awesomeness.",
             "TwitterPostRetweets": 1,
             "TwitterPostFavourites": 3,
             "TwitterPostLink": "https:\/\/twitter.com\/applebyj\/status\/450435071477288961"
         },
         "Tweet5": {
             "icon": "twitter.jpg",
             "TwitterPostDate": "March 31, 2014 09:45 AM",
             "TwitterPostContent": "Abdul Razack up at #sapdcode speaking on End User Experience",
             "TwitterPostRetweets": 5,
             "TwitterPostFavourites": 2,
             "TwitterPostLink": "https:\/\/twitter.com\/applebyj\/status\/450524359711817728"
         },
         "SapJam3": {
             "icon": "sapjam.jpg",
             "SCNBlogDate": "April 2, 2014 10:26 AM ",
             "SCNBlogLink": "https://jam4.sapjam.com/auth/login",
             "SCNBlogLikes": 20,
             "SCNBlogContent": "I've been involved in a few SAP HANA projects where performance has been initially disappointing, and I have been asked to come and show the customer HANA speed. As I've said before, you can take the best technology in the world, create a bad design, and it will work badly. Yes, even SAP HANA can be slow",
             "SCNBlogTitle": "Best Practices for SAP HANA Data Loads",
             "SCNBlogReplies": 16
         },
         "Discussion5": {
             "icon": "SCN.jpg",
             "SCNDiscussionTitle": "Problem post-tagging content",
             "SCNDiscussionLikes": 0,
             "SCNDiscussionContent": "Hey, So in the HDE Space: http:\/\/scn.sap.com\/community\/distinguished-engineers We have a Content tagged with HDE section. I forgot to tag some content HDE, then tagged it after I create it, but it still doesn't appear in the tagged section.",
             "SCNDiscussionDate": "February 4, 2014 9:15 AM",
             "SCNDiscussionReplies": 2,
             "SCNDiscussionLink": "http:\/\/scn.sap.com\/thread\/3495379"
         },
         "Blog6": {
             "icon": "SCN.jpg",
             "SCNBlogDate": "April 1, 2014 4:35 PM",
             "SCNBlogLink": "http:\/\/scn.sap.com\/community\/hana-in-memory\/blog\/2014\/03\/14\/how-much-does-a-sap-hana-appliance-really-cost-part-2-ibm-ivy-bridge",
             "SCNBlogLikes": 12,
             "SCNBlogTitle": "The last blog I wrote, How much does a SAP HANA appliance really cost?, seemed to pique people's interest. However, there were two really big questions that came for me out of it: what about the world's best selling HANA appliance, the IBM X5, and what about the new SAP Certified Appliance Hardware for SAP HANA Ivy Bridge appliances based on the IBM X6?",
             "SCNBlogReplies": 11
         },
         "Blog32": {
             "icon": "SCN.jpg",
             "SCNBlogDate": "April 1, 2014 4:42 PM",
             "SCNBlogLink": "http:\/\/scn.sap.com\/community\/hana-in-memory\/blog\/2013\/11\/25\/comparing-sap-hana-and-sybase-iq--real-world-performance-tests",
             "SCNBlogLikes": 7,
             "SCNBlogContent": "When SAP talks about HANA, they quite often talk about the 1000x improvements in performance that you can get. A customer asked me last week why SAP HANA would provide any improvement over their implementation of Sybase IQ, if they pinned all the IQ tables in memory. They conjectured that IQ should be just as fast as HANA, right?",
             "SCNBlogTitle": "Comparing SAP HANA and Sybase IQ - real world performance tests",
             "SCNBlogReplies": 21
         },
         "Blog2": {
             "icon": "SCN.jpg",
             "SCNBlogDate": "April 2, 2014 10:26 AM ",
             "SCNBlogLink": "http:\/\/scn.sap.com\/community\/hana-in-memory\/blog\/2013\/04\/08\/best-practices-for-sap-hana-data-loads",
             "SCNBlogLikes": 20,
             "SCNBlogContent": "I've been involved in a few SAP HANA projects where performance has been initially disappointing, and I have been asked to come and show the customer HANA speed. As I've said before, you can take the best technology in the world, create a bad design, and it will work badly. Yes, even SAP HANA can be slow",
             "SCNBlogTitle": "Best Practices for SAP HANA Data Loads",
             "SCNBlogReplies": 16
         },
         "Blog7": {
             "icon": "SCN.jpg",
             "SCNBlogDate": "Mar 26, 2014 4:16:44 PM",
             "SCNBlogLink": "http:\/\/scn.sap.com\/community\/distinguished-engineers\/blog\/2014\/03\/26\/kevin-small-sap-hana-distinguished-engineer-and-brit",
             "SCNBlogLikes": 3,
             "SCNBlogContent": "This week is the inaugural SAP HANA 2014 Conference in Orlando, and we obviously need to add a HANA Distinguished Engineer to celebrate. What better irony, than to bring in a British HDE? My US laptop has covered this blog with red lines over the Anglicisms, which is pretty ironic given I am also BRitish.",
             "SCNBlogTitle": "Kevin Small, SAP HANA Distinguished Engineer, and Brit",
             "SCNBlogReplies": 6
         },
         "Tweet4": {
             "icon": "twitter.jpg",
             "TwitterPostDate": "March 31, 2014 3:51 AM",
             "TwitterPostContent": "3.49am, wide awake and rewriting my #sapdcode keynote; wondering how I can reproduce 10% of @vsikka's awesomeness.",
             "TwitterPostRetweets": 1,
             "TwitterPostFavourites": 3,
             "TwitterPostLink": "https:\/\/twitter.com\/applebyj\/status\/450435071477288961"
         },
         "Tweet6": {
             "icon": "twitter.jpg",
             "TwitterPostDate": "March 31, 2014 09:45 AM",
             "TwitterPostContent": "Abdul Razack up at #sapdcode speaking on End User Experience",
             "TwitterPostRetweets": 5,
             "TwitterPostFavourites": 2,
             "TwitterPostLink": "https:\/\/twitter.com\/applebyj\/status\/450524359711817728"
         },
         "SapJam4": {
             "icon": "sapjam.jpg",
             "SCNBlogDate": "April 2, 2014 10:26 AM ",
             "SCNBlogLink": "https://jam4.sapjam.com/auth/login",
             "SCNBlogLikes": 20,
             "SCNBlogContent": "I've been involved in a few SAP HANA projects where performance has been initially disappointing, and I have been asked to come and show the customer HANA speed. As I've said before, you can take the best technology in the world, create a bad design, and it will work badly. Yes, even SAP HANA can be slow",
             "SCNBlogTitle": "Best Practices for SAP HANA Data Loads",
             "SCNBlogReplies": 16
         },
         "Discussion6": {
             "icon": "SCN.jpg",
             "SCNDiscussionTitle": "Problem post-tagging content",
             "SCNDiscussionLikes": 0,
             "SCNDiscussionContent": "Hey, So in the HDE Space: http:\/\/scn.sap.com\/community\/distinguished-engineers We have a Content tagged with HDE section. I forgot to tag some content HDE, then tagged it after I create it, but it still doesn't appear in the tagged section.",
             "SCNDiscussionDate": "February 4, 2014 9:15 AM",
             "SCNDiscussionReplies": 2,
             "SCNDiscussionLink": "http:\/\/scn.sap.com\/thread\/3495379"
         },
         "Blog8": {
             "icon": "SCN.jpg",
             "SCNBlogDate": "April 1, 2014 4:35 PM",
             "SCNBlogLink": "http:\/\/scn.sap.com\/community\/hana-in-memory\/blog\/2014\/03\/14\/how-much-does-a-sap-hana-appliance-really-cost-part-2-ibm-ivy-bridge",
             "SCNBlogLikes": 12,
             "SCNBlogTitle": "The last blog I wrote, How much does a SAP HANA appliance really cost?, seemed to pique people's interest. However, there were two really big questions that came for me out of it: what about the world's best selling HANA appliance, the IBM X5, and what about the new SAP Certified Appliance Hardware for SAP HANA Ivy Bridge appliances based on the IBM X6?",
             "SCNBlogReplies": 11
         },
         "Blog322": {
             "icon": "SCN.jpg",
             "SCNBlogDate": "April 1, 2014 4:42 PM",
             "SCNBlogLink": "http:\/\/scn.sap.com\/community\/hana-in-memory\/blog\/2013\/11\/25\/comparing-sap-hana-and-sybase-iq--real-world-performance-tests",
             "SCNBlogLikes": 7,
             "SCNBlogContent": "When SAP talks about HANA, they quite often talk about the 1000x improvements in performance that you can get. A customer asked me last week why SAP HANA would provide any improvement over their implementation of Sybase IQ, if they pinned all the IQ tables in memory. They conjectured that IQ should be just as fast as HANA, right?",
             "SCNBlogTitle": "Comparing SAP HANA and Sybase IQ - real world performance tests",
             "SCNBlogReplies": 21
         },
         "Blog2": {
             "icon": "SCN.jpg",
             "SCNBlogDate": "April 2, 2014 10:26 AM ",
             "SCNBlogLink": "http:\/\/scn.sap.com\/community\/hana-in-memory\/blog\/2013\/04\/08\/best-practices-for-sap-hana-data-loads",
             "SCNBlogLikes": 20,
             "SCNBlogContent": "I've been involved in a few SAP HANA projects where performance has been initially disappointing, and I have been asked to come and show the customer HANA speed. As I've said before, you can take the best technology in the world, create a bad design, and it will work badly. Yes, even SAP HANA can be slow",
             "SCNBlogTitle": "Best Practices for SAP HANA Data Loads",
             "SCNBlogReplies": 16
         }
    }


  /*  var postJSON;
    readData(function(data){
        this.postsJSON = data;
    });*/
    openPostsPopup();

};

function readData(callback){

    var jqxhr = $.getJSON( "db/posts.json", function(data) {
        console.log( "success" );
    })
        .done(function(data) {
            callback(data);
        })
        .fail(function() {
            alert( "error" );
        })

}

function openPostsPopup() {

    var oDialog1 = new sap.ui.commons.Dialog({
        height:"500px",
        width:"1000px",
        closed: function(oEvent){
            this.destroy();
        }


    });
    oDialog1.setTitle("Posts");



    var oIconListBox1 = new sap.m.List({
        //displayIcons:true,
        items : makeIconItems(),
        width:"100%",
        height:"100%"
    });


    if(oDialog1){

    }

    var oLabe1l = new sap.ui.commons.Label("postNumber",{text:"125"});
    var oLabel2 = new sap.ui.commons.Label("postText",{text:"Posts"});


    var oLayout = new sap.ui.layout.VerticalLayout("Layout1", {
        content: [oLabe1l, oLabel2]
    });

    var hLayout = new sap.ui.layout.HorizontalLayout({
        content: [oLayout,oIconListBox1]
    });



    oDialog1.addContent(hLayout);

    oDialog1.open();

}

function makeIconItems() {


    var postsList=[];
    for (key in this.postsJSON) {
        var image = this.postsJSON[key].icon;
        var textItem = this.postsJSON[key].SCNBlogTitle || this.postsJSON[key].TwitterPostContent || this.postsJSON[key].SCNDiscussionTitle;

        var oImage = new sap.ui.commons.Image();
        oImage.setSrc('images/'+image);


        //***********************VerticalLayout
        var oDesc =  new sap.m.Label({text: textItem})
        var oLink = new sap.ui.commons.Link({
            text: this.postsJSON[key].SCNBlogLink || this.postsJSON[key].TwitterPostLink || this.postsJSON[key].SCNDiscussionLink,
            press: function() {window.open(linkItem,'SO','width=800,height=480');}});

        var oDate =  new sap.m.Label({text: this.postsJSON[key].SCNBlogDate|| this.postsJSON[key].TwitterPostDate || this.postsJSON[key].SCNDiscussionDate || this.postsJSON[key].SCNBlogDate})

        //***********************************************

        if (image==="twitter.jpg"){

            var numberLikes = new sap.ui.commons.Label({text:this.postsJSON[key].TwitterPostFavourites + "  Favourites" + this.postsJSON[key].TwitterPostRetweets + "  Retweets"});

        }else{
            var numberLikes = new sap.ui.commons.Label({text:(this.postsJSON[key].SCNBlogLikes || this.postsJSON[key].SCNDiscussionLikes)+ "  Likes " + (this.postsJSON[key].SCNBlogReplies || this.postsJSON[key].SCNDiscussionReplies) + "  Comments"});

        }

        var oImage1 = new sap.ui.commons.Image({
            press:function(e){

                    $("#__item1").addClass("show");
            }

        });
        oImage1.setSrc('images/show.jpg');
        oImage1.addStyleClass("hide");


        var oLayout = new sap.ui.layout.HorizontalLayout({
            content: [numberLikes]
        });

        //*************************************************


        var oVerticalLayout = new sap.ui.layout.VerticalLayout( {
            width:"500px",
            content: [oDesc, oLink, oDate, oLayout,oImage,oImage1]
        });
        //********************************************

        var oLike =  new sap.m.Label({text: "Like"})
        var oComment =  new sap.m.Label({text: "Like"})

        var listItem = new sap.m.CustomListItem({content:[
            oImage,oVerticalLayout
        ]})




        var linkItem = this.postsJSON[key].SCNBlogLink || this.postsJSON[key].TwitterPostLink || this.postsJSON[key].SCNDiscussionLink;

        postsList.push(listItem);

    }
    return postsList;

}




