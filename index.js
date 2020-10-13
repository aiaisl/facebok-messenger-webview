var SupportedFeatures;
function writeLog(log) {
    console.log(`${document.body.innerText}<br>${log}`);
    document.body.querySelector("#log").append(`<br>${log}`);
}
(function (SupportedFeatures) {
    SupportedFeatures["context"] = "context";
    SupportedFeatures["sharing_broadcast"] = "sharing_broadcast";
    SupportedFeatures["sharing_direct"] = "sharing_direct";
    SupportedFeatures["sharing_open_graph"] = "sharing_open_graph";
    SupportedFeatures["sharing_media_template"] = "sharing_media_template";
})(SupportedFeatures || (SupportedFeatures = {}));
window.extAsyncInit = function () {
    MessengerExtensions.getSupportedFeatures(function success(supportedFeatures) {
        writeLog("supportedFeaturesSuccess:"+JSON.stringify(supportedFeatures));
    }, function error(error) {
        writeLog("supportedFeaturesError:" + JSON.stringify(error));
    });
};


document.getElementById("useProfileButton").addEventListener("click", ()=>{
    MessengerExtensions.askPermission((permission)=>{
        writeLog("askPermissionSuccess:" + JSON.stringify(permission));
        MessengerExtensions.getContext("418557695509853", (getContextSuccess)=>{
            writeLog("getContextSuccess_user_profile" + JSON.stringify(getContextSuccess))
        }, (getContextError)=>{
            writeLog("getContextError_user_profile" + JSON.stringify(getContextError))
        });
    }, (permissionError)=>{
        writeLog("askPermissionError:" + JSON.stringify(permissionError));
    }, "user_profile");
})


document.getElementById("useMessengerButton").addEventListener("click", ()=>{
    MessengerExtensions.askPermission((permission)=>{
        writeLog("askPermissionSuccess:" + JSON.stringify(permission));
        MessengerExtensions.getContext("418557695509853", (getContextSuccess)=>{
            writeLog("getContextSuccess_user_messaging" + JSON.stringify(getContextSuccess))
        }, (getContextError)=>{
            writeLog("getContextError_user_messaging" + JSON.stringify(getContextError))
        });
    }, (permissionError)=>{
        writeLog("askPermissionError:" + JSON.stringify(permissionError));
    }, "user_messaging");
})
