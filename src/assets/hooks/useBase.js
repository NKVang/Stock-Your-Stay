export function useBase() {
    var Airtable = require('airtable');
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: 'patUCgndOXmk9qHsO.fa832656604b420c1ac46d62d1419134c59b9b048db4ccf7cecd7ac56e5c9525'
    });
    var base = Airtable.base('appRWYLyPrYJ68yEu');
    return base;
}