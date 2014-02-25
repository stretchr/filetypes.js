/*



  Usage:

    Stretchr.Filetypes.descriptionFor("txt")
    //= "Text file"

    Stretchr.Filetypes.descriptionFor("text/plain");
    //= "Text file"

    Stretchr.Filetypes.mimeFor("txt")
    //= "text/plain"

*/

(function(global){

  global.Stretchr = global.Stretchr || {};
  global.Stretchr._filetypes = [

    /*
      Here are the file types.

        ext = array of extensions that match
        mime = mime type if known (otherwise application/type will be assumned)
        desc = (optional) description if "TYPE file" isn't enough

    */

    // text
    {"ext": ["txt"], "mime":["text/plain"], "desc": "Text file"},

    // code
    {"ext": ["xml"], "mime":["text/xml"]},

    // video
    {"ext": ["mov"],  "mime":["video/quicktime"],   "desc": "QuickTime Video file"},
    {"ext": ["mp4"],  "mime":["video/mp4"],         "desc": "MPEG-4 Video file"},
    {"ext": ["m3u8"], "mime":["video/MP2T"],        "desc": "iPhone Segment Video file"},
    {"ext": ["ts"],   "mime":["video/quicktime"],   "desc": "QuickTime Video file"},
    {"ext": ["3gp"],  "mime":["video/3gpp"],        "desc": "3GP Mobile Video file"},
    {"ext": ["avi"],  "mime":["video/x-msvideo"],   "desc": "A/V Interleave Video file"},
    {"ext": ["wmv"],  "mime":["video/x-ms-wmv"],    "desc": "Windows Media"}

  ];
  global.Stretchr.Filetypes = {
    // find finds all matches for the specified extension or mime type.
    find: function(s) {
      s = s.toLowerCase();
      var matches = [];
      for (var i in global.Stretchr._filetypes) {
        var item = global.Stretchr._filetypes[i];
        if (item.ext.join(",").indexOf(s) > -1 || item.mime.join(",").indexOf(s) > -1) {
          matches.push(item);
        }
      }
      return matches;
    },

    descriptionFor: function(s) {
      var match = this.find(s)[0];
      if (match) {
        if (match.desc) {
          return match.desc;
        } else {
          return match.ext[0].toUpperCase() + " file";
        }
      }
      return "Unknown file";
    },

    mimeFor: function(s) {
      var match = this.find(s)[0];
      if (match) {
        if (match.mime && match.mime[0]) {
          return match.mime[0];
        }
      }
      return "application/x-" + s;
    }

  };

})(window);
