var mySupportedFeatures = [];
function writeLog(log) {
    console.log(`${document.body.innerText}<br>${log}`);
    document.body.querySelector("#log").append(`<br>${log}`);
}
window.extAsyncInit = function () {
    MessengerExtensions.getSupportedFeatures(function success(supportedFeatures) {
        mySupportedFeatures = supportedFeatures.supported_features
        writeLog("supportedFeaturesSuccess:"+JSON.stringify(supportedFeatures));
    }, function error(error) {
        writeLog("supportedFeaturesError:" + JSON.stringify(error));
    });
};


document.getElementById("useProfileButton").addEventListener("click", ()=>{
    console.log(mySupportedFeatures, "mySupportedFeatures")
    if(mySupportedFeatures.include("context") && mySupportedFeatures.length === 1) {
        MessengerExtensions.getContext("418557695509853", (getContextSuccess)=>{
            writeLog("getContextSuccess_user_profile" + JSON.stringify(getContextSuccess))
        }, (getContextError)=>{
            writeLog("getContextError_user_profile" + JSON.stringify(getContextError))
        });
    } else {
        MessengerExtensions.askPermission((permission)=>{
            writeLog("askPermissionSuccess:" + JSON.stringify(permission));
            MessengerExtensions.getContext("418557695509853", (getContextSuccess)=>{
                writeLog("getContextSuccess_user_profile" + JSON.stringify(getContextSuccess))
            }, (getContextError)=>{
                writeLog("getContextError_user_profile" + JSON.stringify(getContextError))
            });
        }, (permissionError, errorMessage)=>{
            writeLog("askPermissionError:" + JSON.stringify(permissionError) + JSON.stringify(errorMessage));
        }, "user_profile");
    }
})


document.getElementById("useMessengerButton").addEventListener("click", ()=>{
    if(mySupportedFeatures.include("context") && mySupportedFeatures.length === 1) {
        MessengerExtensions.getContext("418557695509853", (getContextSuccess)=>{
            writeLog("getContextSuccess_user_profile" + JSON.stringify(getContextSuccess))
        }, (getContextError)=>{
            writeLog("getContextError_user_profile" + JSON.stringify(getContextError))
        });
    } else {
        MessengerExtensions.askPermission((permission)=>{
            writeLog("askPermissionSuccess:" + JSON.stringify(permission));
            MessengerExtensions.getContext("418557695509853", (getContextSuccess)=>{
                writeLog("getContextSuccess_user_messaging" + JSON.stringify(getContextSuccess))
            }, (getContextError)=>{
                writeLog("getContextError_user_messaging" + JSON.stringify(getContextError))
            });
        }, (permissionError, errorMessage)=>{
            writeLog("askPermissionError:" + JSON.stringify(permissionError) + JSON.stringify(errorMessage));
        }, "user_messaging");
    }
})


document.getElementById("useGrantedButton").addEventListener("click", ()=>{
    MessengerExtensions.getGrantedPermissions(function (permissions_response) {
        writeLog("getGrantedPermissionsSuccess:" + JSON.stringify(permissions_response));
      }, function(error) {
        writeLog("getGrantedPermissionsError:" + JSON.stringify(error));
      });
})
