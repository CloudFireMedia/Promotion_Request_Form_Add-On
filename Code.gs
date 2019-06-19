var SCRIPT_NAME = "Promotion_Request_Form_AddOn"
var SCRIPT_VERSION = "v1.8"

// Add-on installation

function onInstall(e) {
  PRF.clearConfig()
  onOpen(e)
} 

// Menu

function onOpen(e) {

  console.log(SCRIPT_VERSION)

  var menu = FormApp.getUi().createAddonMenu()
  
  if (PRF.initialised(e)) {
    menu.addItem('Show settings', 'showCache')  
  } else {
    menu.addItem('Start', 'initialize')
  }
  
  menu.addToUi()    
}

function showCache()  {PRF.showCache()}
function initialize() {PRF.onInstall()}

// Triggers

function onFormSubmit(e) {PRF.onFormSubmit(e)}
function updateForm(e)   {PRF.updateForm(e)}

// Testing

function dumpConfig()  {PRF.test_dumpConfig()}
function clearConfig() {PRF.test_clearConfig()}
function test()        {PRF.test()}