var SupportedFeatures;
function writeLog(log) {
    console.log(`${document.body.innerText}<br>${log}`);
    document.write(`${document.body.innerText}<br>${log}`);
}
(function (SupportedFeatures) {
    SupportedFeatures["context"] = "context";
    SupportedFeatures["sharing_broadcast"] = "sharing_broadcast";
    SupportedFeatures["sharing_direct"] = "sharing_direct";
    SupportedFeatures["sharing_open_graph"] = "sharing_open_graph";
    SupportedFeatures["sharing_media_template"] = "sharing_media_template";
})(SupportedFeatures || (SupportedFeatures = {}));
window.extAsyncInit = function () {
    MessengerExtensions.askPermission(function success(supportedFeatures) {
        writeLog("supportedFeaturesSuccess:"+JSON.stringify(supportedFeatures));
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
        }, ["user_profile", "user_messaging"]);
    }, function error(error) {
        writeLog("supportedFeaturesError:" + JSON.stringify(error));
    });
};
