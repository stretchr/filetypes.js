describe("Filetypes.js", function(){

  it("should get the matches", function(){

    var matches = Stretchr.Filetypes.find("txt");
    expect(matches).not.toBeNull();
    expect(matches.length).toBe(1);
    expect(matches[0].mime, "text/plain");

    var matches = Stretchr.Filetypes.find("xml");
    expect(matches).not.toBeNull();
    expect(matches.length).toBe(3);
    expect(matches[0].mime, "text/xml");

    var matches = Stretchr.Filetypes.find("text/plain");
    expect(matches).not.toBeNull();
    expect(matches.length).toBe(1);
    expect(matches[0].mime, "text/plain");

    var matches = Stretchr.Filetypes.find("application/xml");
    expect(matches).not.toBeNull();
    expect(matches.length).toBe(1);
    expect(matches[0].mime, "application/xml");

  });

  it("should give you a description", function(){

    // unknown
    expect(Stretchr.Filetypes.descriptionFor("text/bollocks")).toBe("TEXT/BOLLOCKS File")

    // known
    expect(Stretchr.Filetypes.descriptionFor("text/plain")).toBe("Text File")

    // default
    expect(Stretchr.Filetypes.descriptionFor("application/xml")).toBe("XML - Extensible Markup Language")

  });

  it("should give you a mime type", function(){

    // known
    expect(Stretchr.Filetypes.mimeFor("txt")).toBe("text/plain");

    // default
    expect(Stretchr.Filetypes.mimeFor("monkey")).toBe("application/x-monkey");

  });

});