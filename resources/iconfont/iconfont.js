;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconarrowback01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M254.073114 540.370141l460.773292 408.258241c15.115256 14.635325 39.632649 14.635325 54.760185 0 15.120372-14.624069 15.120372-38.33919 0-52.975539L336.606853 512l432.998715-383.662053c15.120372-14.625092 15.120372-38.341237 0-52.970422-15.126512-14.630209-39.643905-14.630209-54.760185 0L254.073114 483.632929c-8.067746 7.80578-11.506055 18.154475-10.965749 28.367071C242.56706 522.218736 246.004345 532.567431 254.073114 540.370141L254.073114 540.370141zM254.073114 540.370141"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconarrowmore01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M787.617803 512.017396 331.597769 960.443475l-95.217618-93.735871 362.587062-354.690208L237.357408 156.333558l94.241384-92.777033L787.617803 512.017396z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti204" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1015.168 972.48l-179.584-178.496c79.104-87.424 122.368-199.232 122.368-317.952C957.952 213.568 743.104 0 478.976 0S0 213.568 0 476.096s214.848 476.096 478.976 476.096c65.344 0 128.768-12.864 188.48-38.272 15.296-6.464 22.4-24.192 15.936-39.488-6.528-15.36-24.192-22.464-39.488-15.936-52.16 22.208-107.648 33.472-164.864 33.472-230.848 0-418.688-186.56-418.688-415.872s187.84-415.872 418.688-415.872 418.688 186.56 418.688 415.872c0 112.576-44.544 217.984-125.44 296.832-5.76 5.632-9.024 13.376-9.088 21.376s3.2 15.808 8.896 21.504l200.64 199.424C978.624 1021.12 986.304 1024 993.984 1024c7.744 0 15.488-2.944 21.312-8.896C1027.008 1003.328 1026.944 984.192 1015.168 972.48z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qt0062x" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.229714 0 0 229.229714 0 512 0 794.770286 229.229714 1024 512 1024 794.770286 1024 1024 794.770286 1024 512 1024 229.229714 794.770286 0 512 0L512 0ZM770.267429 692.809143 692.772571 770.304 511.963429 589.494857 331.154286 770.304 253.659429 692.809143 434.468571 512 253.659429 331.190857 331.154286 253.696 511.963429 434.505143 692.772571 253.696 770.267429 331.190857 589.458286 512 770.267429 692.809143 770.267429 692.809143Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangqing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 1024C229.888 1024 0 794.112 0 512S229.888 0 512 0s512 229.888 512 512-229.888 512-512 512z m0-972.8c-253.952 0-460.8 206.848-460.8 460.8s206.848 460.8 460.8 460.8 460.8-206.848 460.8-460.8-206.848-460.8-460.8-460.8z"  ></path>' +
    '' +
    '<path d="M506.368 814.08c-20.992 11.776-38.4 17.92-51.712 17.92-11.776 0-20.992-3.584-28.16-10.752-6.656-7.168-10.24-17.408-10.24-30.208 0-40.96 25.088-141.312 75.776-301.056 2.56-7.68 3.584-14.336 3.584-19.968 0-6.656-3.072-9.728-9.216-9.728-6.656 0-14.336 2.56-23.04 7.68-8.704 5.12-27.648 22.016-57.344 50.176L384 501.248c33.792-36.352 64-61.952 91.648-77.312 27.648-15.36 51.2-23.04 70.656-23.04 10.752 0 18.944 2.048 24.576 6.656 5.632 4.608 8.704 10.752 8.704 18.944 0 9.728-10.752 50.176-32.768 121.344-35.328 116.736-53.248 186.88-53.248 210.944 0 4.608 1.024 8.704 3.584 11.776 2.56 3.072 5.12 4.608 7.68 4.608 10.752 0 38.4-20.48 82.432-60.928l19.456 18.944c-45.568 41.984-78.848 69.12-100.352 80.896zM624.64 266.24c-10.24 11.264-21.504 16.384-34.304 16.384-10.24 0-18.432-3.584-25.088-10.24-6.656-6.656-10.24-15.872-10.24-27.136 0-14.848 4.608-27.136 14.848-37.888 9.728-10.24 21.504-15.36 34.816-15.36 10.24 0 18.944 3.584 25.6 10.24 6.656 6.656 10.24 15.36 10.24 26.112-0.512 13.824-5.632 26.624-15.872 37.888z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)