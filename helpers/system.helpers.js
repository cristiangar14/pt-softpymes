const systemHelper = {
    clone: ( value ) => {
        return Object.keys(value).map(key => {
            value[key].users = value[key].users.map(user => ({ ...user }));
            value[key] = { ...value[key] };
            return value[key]
        })
    },
    cleanConsole: (index, value) => {
        const result = systemHelper.clone(value);
        console.log(`%c ---- EXAMPLE TEST ${index} --- values before edit: `, 'background: #222; color: #bada55', result);
    }
};


module.exports = systemHelper;
