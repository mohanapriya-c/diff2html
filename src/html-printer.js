/*
 *
 * HtmlPrinter (html-printer.js)
 * Author: rtfpessoa
 *
 */

(function() {
  var LineByLinePrinter = require('./line-by-line-printer.js').LineByLinePrinter;
  var SideBySidePrinter = require('./side-by-side-printer.js').SideBySidePrinter;
  var FileListPrinter = require('./file-list-printer.js').FileListPrinter;

  function HtmlPrinter() {
  }

  HtmlPrinter.prototype.generateLineByLineJsonHtml = function(diffFiles, config) {
    var lineByLinePrinter = new LineByLinePrinter(config);
    return lineByLinePrinter.generateLineByLineJsonHtml(diffFiles);
  };

  HtmlPrinter.prototype.generateSideBySideJsonHtml = function(diffFiles, config) {
    var sideBySidePrinter = new SideBySidePrinter(config);
    return sideBySidePrinter.generateSideBySideJsonHtml(diffFiles);
  };

  HtmlPrinter.prototype.generateFileListSummary = function(diffJson, config) {
    var fileListPrinter = new FileListPrinter(config);
    return fileListPrinter.generateFileList(diffJson);
  };
  
  /*
   * ZC-IMPL
   * Generates context line html based on the view in config
   */
  HtmlPrinter.prototype.getContextLinesHtml = function(diffJson, config) {
    if(config.outputFormat === "side-by-side") {
        var sideBySidePrinter = new SideBySidePrinter(config);
        return sideBySidePrinter.getContextLinesHtml(diffJson);
    } else {
        var lineByLinePrinter = new LineByLinePrinter(config);
        return lineByLinePrinter.getContextLinesHtml(diffJson);
    }
  };

  module.exports.HtmlPrinter = new HtmlPrinter();
})();
