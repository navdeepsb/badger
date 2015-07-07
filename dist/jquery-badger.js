
/*
 * BadgerJS
 * --------
 * @ver 1.0.0
 * @desc A notification library for webpages
 * @dependencies jQuery
 * @author Navi
 */
window.Badger = function() {
  var badgerIcons, dismissBadger, getCurrConfig, getDefaults, initialize, showBadger;
  badgerIcons = {
    "success": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEwMHB4IiBoZWlnaHQ9IjEwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTUxLjQzOCwwQzIzLjgzNC0wLjc5NCwwLjgxNCwyMC45MzksMC4wMjEsNDguNTQyQzAuMDA3LDQ5LjAyOCwwLDQ5LjUxNCwwLDUwYzAsMjcuNjE0LDIyLjM4Niw1MCw1MCw1MHM1MC0yMi4zODYsNTAtNTBDMTAwLjAxMiwyMi45MzgsNzguNDg4LDAuNzc4LDUxLjQzOCwweiBNNzIuMjgxLDI1LjI1bDkuOTA2LDkuOTA2TDUyLjQ2OSw2NC44NDRsLTkuOTA2LDkuOTA2bC05Ljg3NS05LjkwNkwxNy44MTIsNTBsOS45MDYtOS45MDZsMTQuODQ0LDE0Ljg0NEw3Mi4yODEsMjUuMjV6Ii8+PC9zdmc+",
    "warn": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDE2IDE2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNiAxNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTgsMEMzLjU4MiwwLDAsMy41ODIsMCw4czMuNTgyLDgsOCw4czgtMy41ODIsOC04UzEyLjQxOCwwLDgsMHogTTgsMTIuOTg0Yy0wLjU1MiwwLTEtMC40NDgtMS0xYzAtMC41NTMsMC40NDgtMSwxLTFzMSwwLjQ0NywxLDFDOSwxMi41MzYsOC41NTIsMTIuOTg0LDgsMTIuOTg0eiBNOSw5YzAsMC41NTItMC40NDgsMS0xLDFTNyw5LjU1Miw3LDlWNGMwLTAuNTUyLDAuNDQ4LTEsMS0xczEsMC40NDgsMSwxVjl6Ii8+PC9zdmc+",
    "error": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjcuOTY1cHgiIGhlaWdodD0iMjcuOTY2cHgiIHZpZXdCb3g9IjAgMCAyNy45NjUgMjcuOTY2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNy45NjUgMjcuOTY2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgaWQ9ImMxNDJfeCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEzLjk4LDBDNi4yNTksMCwwLDYuMjYxLDAsMTMuOTgzYzAsNy43MjEsNi4yNTksMTMuOTgyLDEzLjk4LDEzLjk4MmM3LjcyNSwwLDEzLjk4NS02LjI2MiwxMy45ODUtMTMuOTgyQzI3Ljk2NSw2LjI2MSwyMS43MDUsMCwxMy45OCwweiBNMTkuOTkyLDE3Ljc2OWwtMi4yMjcsMi4yMjRjMCwwLTMuNTIzLTMuNzgtMy43ODYtMy43OGMtMC4yNTksMC0zLjc4MywzLjc4LTMuNzgzLDMuNzhsLTIuMjI4LTIuMjI0YzAsMCwzLjc4NC0zLjQ3MiwzLjc4NC0zLjc4MWMwLTAuMzE0LTMuNzg0LTMuNzg3LTMuNzg0LTMuNzg3bDIuMjI4LTIuMjI5YzAsMCwzLjU1MywzLjc4MiwzLjc4MywzLjc4MmMwLjIzMiwwLDMuNzg2LTMuNzgyLDMuNzg2LTMuNzgybDIuMjI3LDIuMjI5YzAsMC0zLjc4NSwzLjUyMy0zLjc4NSwzLjc4N0MxNi4yMDcsMTQuMjM5LDE5Ljk5MiwxNy43NjksMTkuOTkyLDE3Ljc2OXoiLz48L2c+PC9zdmc+",
    "fallback": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNTYsNDg4LjgzOWMtNjIuMTkzLDAtMTIwLjY2NC0yNC4yMTktMTY0LjY0Mi02OC4xOTdDNDcuMzgsMzc2LjY2NCwyMy4xNjEsMzE4LjE5MywyMy4xNjEsMjU2UzQ3LjM4LDEzNS4zMzYsOTEuMzU4LDkxLjM1OEMxMzUuMzM2LDQ3LjM4LDE5My44MDcsMjMuMTYxLDI1NiwyMy4xNjFTMzc2LjY2NCw0Ny4zOCw0MjAuNjQyLDkxLjM1OEM0NjQuNjIsMTM1LjMzNiw0ODguODM5LDE5My44MDcsNDg4LjgzOSwyNTZzLTI0LjIxOSwxMjAuNjY0LTY4LjE5NywxNjQuNjQyQzM3Ni42NjQsNDY0LjYyLDMxOC4xOTMsNDg4LjgzOSwyNTYsNDg4LjgzOXoiLz48L2c+PC9zdmc+"
  };
  initialize = function(userConfig) {
    this.userConfig = userConfig;
    this.currConfig = this.userConfig ? getCurrConfig(this.userConfig, getDefaults()) : getDefaults();
    this.container = $(".bdgr-container");
    if (this.container.length === 0) {
      this.container = $("<div class='bdgr-container' />").css({
        "width": this.currConfig.width + "px",
        "position": "fixed",
        "top": "20px",
        "left": "50%",
        "margin-left": (-1 * this.currConfig.width / 2) + "px",
        "z-index": "99999"
      }).appendTo(document.body);
    }
    $(document).on("click", ".bdgr-content", dismissBadger);
  };
  showBadger = function(msg) {
    var $badgerContent, $badgerWrapper, arg1, arg2, badgerType, bdgrTheme, runTimeConfig;
    arg1 = arguments[1];
    arg2 = arguments[2];
    badgerType = typeof arg1 === "string" ? arg1 : "success";
    if (typeof arg1 === "object") {
      runTimeConfig = getCurrConfig(arg1, getCurrConfig(this.userConfig, getDefaults()));
    } else if (typeof arg2 === "object") {
      runTimeConfig = getCurrConfig(arg2, getCurrConfig(this.userConfig, getDefaults()));
    } else {
      runTimeConfig = this.currConfig;
    }
    bdgrTheme = {
      "width": "100%",
      "color": runTimeConfig.theme[badgerType] && runTimeConfig.theme[badgerType].color || runTimeConfig.theme.fallback.color,
      "background": runTimeConfig.theme[badgerType] && runTimeConfig.theme[badgerType].background || runTimeConfig.theme.fallback.background,
      "border": "3px solid transparent",
      "border-color": runTimeConfig.theme[badgerType] && runTimeConfig.theme[badgerType].borderColor || runTimeConfig.theme.fallback.borderColor,
      "border-radius": (function() {
        var rad;
        rad = (runTimeConfig.borderRadius || 0).toString();
        if (rad.indexOf("%") === rad.length - 1) {
          return rad;
        } else {
          return rad + "px";
        }
      })(),
      "margin-bottom": "10px",
      "box-shadow": "0 6px 12px rgba(0,0,0,0.23),0 10px 40px rgba(0,0,0,0.19)",
      "cursor": "pointer",
      "box-sizing": "border-box"
    };
    $badgerWrapper = $("<div style='position: relative' />").prependTo(this.container);
    $badgerContent = $("<div class='bdgr-content' />").css(bdgrTheme).append("<div class='bdgr-msg' style='padding:10px;box-sizing:border-box;line-height:1.7;text-align:center;font-size:" + runTimeConfig.fontSize + "'>" + msg + "</div>").appendTo($badgerWrapper);
    if (runTimeConfig.showIcon) {
      $badgerContent.prepend("<div style='padding:10px 5px;display:table-cell;vertical-align:middle;box-sizing:border-box;width:10%;text-align:center'><img src='" + (badgerIcons[badgerType] || badgerIcons.fallback) + "' alt='" + badgerType + "' width='30' style='margin:0 5px;max-width:none'></div>").find(".bdgr-msg").css({
        "padding": "10px 10px 10px 5px",
        "display": "table-cell",
        "vertical-align": "middle",
        "text-align": "left"
      });
    }
    if (!runTimeConfig.persist) {
      setTimeout(function() {
        $badgerWrapper.css({
          "height": $badgerContent.outerHeight(true) + "px"
        });
        return $badgerContent.css({
          "position": "absolute",
          "top": "0",
          "left": "0"
        }).animate({
          "left": "-300%"
        }, 200, function() {
          return $badgerWrapper.remove();
        });
      }, runTimeConfig.stayTime * 1000);
    }
  };
  dismissBadger = function() {
    var $this;
    $this = $(this);
    $this.parent().css({
      "height": $this.outerHeight(true) + "px"
    });
    $this.css({
      "position": "absolute",
      "top": "0",
      "left": "0"
    }).animate({
      "left": "-300%"
    }, 200, function() {
      return $this.parent().remove();
    });
  };
  getCurrConfig = function(userConfig, baseConfig) {
    return $.extend(true, baseConfig, userConfig);
  };
  getDefaults = function() {
    return {
      stayTime: 3,
      width: 300,
      persist: false,
      showIcon: true,
      fontSize: "1em",
      borderRadius: "0",
      theme: {
        success: {
          color: "#ffffff",
          background: "#60bf16",
          borderColor: "#55a813"
        },
        warn: {
          color: "#ffffff",
          background: "#fe7d00",
          borderColor: "#e57000"
        },
        error: {
          color: "#ffffff",
          background: "#e31b30",
          borderColor: "#cc182b"
        },
        fallback: {
          color: "#ffffff",
          background: "#333333",
          borderColor: "#262626"
        }
      }
    };
  };
  return {
    init: initialize,
    show: showBadger
  };
};
