interface State{
    name:string;
    capital:string;
}

const states: State[] = [
    {name: 'Alabama', capital: 'Montgomery'},
    // ~~~~~~~~~~~~~~~~~~~~~
    {name: 'Alaska', capital: 'Juneau'},
    // ~~~~~~~~~~~~~~~~~
    {name: 'Arizona', capital: 'Phoenix'},
    // ~~~~~~~~~~~~~~~~~~ Object literal may only specify known
];
for (const state of states) {
    console.log(state.capital);
}