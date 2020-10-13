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
        if(supportedFeatures.supported_features.includes(SupportedFeatures.context)) {
            MessengerExtensions.getContext("418557695509853", (getContextSuccess)=>{
                console.log("getContextSuccess" + JSON.stringify(getContextSuccess))
            }, (getContextError)=>{
                console.log("getContextError" + JSON.stringify(getContextError))
            });
        }
    }, (permissionError)=>{
        writeLog("askPermissionError:" + JSON.stringify(permissionError));
    }, "user_profile");
})
