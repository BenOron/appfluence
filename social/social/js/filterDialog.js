/**
 * Created by I055921 on 4/3/14.
 */
var FILTER_DIALOG = function () {

    openFilterPopup();

};

function openFilterPopup() {

    var oDialog1 = new sap.ui.commons.Dialog({
        height:"487px",
        width:"545px"
    });
    oDialog1.setTitle("Content Management");


    var oImage = new sap.ui.commons.Image();
    oImage.setSrc('social/images/filter.png');


    oDialog1.addContent(oImage);

    oDialog1.open();

}




