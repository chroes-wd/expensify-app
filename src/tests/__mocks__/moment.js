// import moment from 'moment';   doesnt work. we have to use:

const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};