var states = [
    { name: 'Alabama', capital: 'Montgomery' },
    // ~~~~~~~~~~~~~~~~~~~~~
    { name: 'Alaska', capital: 'Juneau' },
    // ~~~~~~~~~~~~~~~~~
    { name: 'Arizona', capital: 'Phoenix' },
    // ~~~~~~~~~~~~~~~~~~ Object literal may only specify known
];
for (var _i = 0, states_1 = states; _i < states_1.length; _i++) {
    var state = states_1[_i];
    console.log(state.capital);
}
