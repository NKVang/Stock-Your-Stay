function useBase() {
  var Airtable = require("airtable");
  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey:
      "patGjoveBZiG3MkMs.22e16196a7bd7e3a6166ff94f54854d9414d6d0cfc2604728494e927b412965b",
  });
  var base = Airtable.base("appse7RODEXtYVRA6");
  return base;
}

module.exports = { useBase };
