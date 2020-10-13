enum SupportedFeatures {
    "context" = "context",
    "sharing_broadcast" = "sharing_broadcast",
    "sharing_direct" = "sharing_direct",
    "sharing_open_graph" = "sharing_open_graph",
    "sharing_media_template" = "sharing_media_template",
}

window.extAsyncInit = function() {
    MessengerExtensions.askPermission(function success(supportedFeatures: {"supported_features":[SupportedFeatures]}) {
        document.write(JSON.stringify(supportedFeatures), "supportedFeatures")
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
        document.write("error21:" + JSON.stringify(error))
    })
}