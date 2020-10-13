var SupportedFeatures;
(function (SupportedFeatures) {
    SupportedFeatures["context"] = "context";
    SupportedFeatures["sharing_broadcast"] = "sharing_broadcast";
    SupportedFeatures["sharing_direct"] = "sharing_direct";
    SupportedFeatures["sharing_open_graph"] = "sharing_open_graph";
    SupportedFeatures["sharing_media_template"] = "sharing_media_template";
})(SupportedFeatures || (SupportedFeatures = {}));
window.extAsyncInit = function () {
    MessengerExtensions.askPermission(function success(supportedFeatures) {
        document.write(JSON.stringify(supportedFeatures), "supportedFeatures");
        // if(supportedFeatures.supported_features.includes(SupportedFeatures.context)) {
        // MessengerExtensions.getContext("418557695509853", (result)=>{
        //     console.log(result, "context")
        // }, ()=>{
        // });
        // MessengerExtensions.askPermission((result)=>{
        //     console.log(result, "askPermission")
        // }, (result)=>{
        //     console.log(result, "askPermission Error")
        // }, ["user_profile", "user_messaging"])
        // }
    }, function error(error) {
        document.write("supportedFeaturesError:" + JSON.stringify(error));
    });
};
