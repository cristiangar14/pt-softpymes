let companies;
const firstName = [
    'joe',
    'jane',
    'seb',
    'alina',
    'fabien',
    undefined,
    'anna',
    'annah',
    'Fathma',
    'Mohamed',
    'Walid',
    'Josiane',
    undefined
];

const lastName = [
    undefined,
    'Dupond',
    'Durand',
    'Kassir',
    undefined,
    'Hussein',
    'Wartani',
    'Thoumsi',
    'Angello',
    undefined
];

const companyNames = [
    'apple',
    'microsoft',
    'Louis-vuitton',
    'Nike',
    'Channel',
    'Dior',
    'Slack',
    'Uber'
];

const dataHelper = {

    createRandomNumber: (min, max) => {
        return Math.floor(min + Math.random() * (max - min))
    },

    createCompany: ( name, index ) => {
        const users = dataHelper.createUser(dataHelper.createRandomNumber(10, 50));
        return {
            name,
            users,
            isOpen: !!dataHelper.createRandomNumber(0, 2),
            usersLength: users.length,
            id: index
        }
    },

    createAll: () => {
        if (!companies) {
            companies = companyNames.map(dataHelper.createCompany)
        }
        return companies
    },

    getValue: (array) => {
        return array[dataHelper.createRandomNumber(0, array.length + 2)]
    },

    createUser (end) {
        const tab = [];

        for (let i = 0; i < end; i++) {
            tab.push({
                firstName: dataHelper.getValue(firstName),
                lastName: dataHelper.getValue(lastName),
                age: dataHelper.createRandomNumber(10, 120),
                car: !!dataHelper.createRandomNumber(0, 2),
                id: tab.length
            })
        }
        return tab
    }
};

module.exports = dataHelper;
