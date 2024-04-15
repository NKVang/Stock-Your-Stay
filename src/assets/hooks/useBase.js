function useBase() {
  var Airtable = require("airtable");
  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey:
      "pat7nAdyMbJsts4Si.0194be0acb66c1d3599e6acc7d53512517479c64b2103e689f537ad0fd206af9",
  });
  var base = Airtable.base("appkDFqF9y4Iu8Emq");
  return base;
}

module.exports = { useBase };
