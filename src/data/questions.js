const questions = [{
    title: 'What type of insurance do you want?',
    type: 'choice',
    choices: [{
        title: 'Professional Liability',
        body: 'Erros & Omissions (E&O insurance)',
        icon: 'Suitcase'
    }, {
        title: 'General Liability',
        body: 'Help mitigate against loss (CGL insurance)',
        icon: 'Cloud'
    }, {
        title: 'Business Owner’s Policy',
        body: 'The complete package (BOP)',
        icon: 'Box'
    }, {
        title: 'Cyber',
        body: 'Internet-based risks (CLIC)',
        icon: 'Wifi'
    }],
}, {
    title: 'What’s the name of your business?',
    type: 'text',
    placeholder: 'Name'
}, {
    title: 'When did your business begin?',
    type: 'text',
    placeholder: '12/11/1991'
}]

export default questions