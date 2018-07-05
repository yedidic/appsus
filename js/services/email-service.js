console.log('email service');

import utilsService from './utils-service.js';

const EMAILS_KEY = 'emails'
const DATE_FORMAT = 'lll';

function getTempEmails() {
    let tempEmails = [
        {
            id: '1fg3sD',
            subject: 'Ani Adam mamash Tov',
            from: { name: 'Adam Anak Mamash', email: 'adam@anak.mamsh' },
            sent: moment('2010-10-20').format(DATE_FORMAT),
            to: { name: 'Jacky Chan', email: 'jacky@mami.mamsh' },
            msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente num /n quam alias culpa neque nihil expedita vero quo similique id ipsam, maiores consequatur dolorem porro qui est quam quod? Et, vero.',
            isRead: false
        },
        {
            id: '2fg3sD',
            subject: 'Baba Mamash Ohev Mama',
            from: { name: 'Baba Avitan', email: 'baba@avitan.king' },
            sent: moment('2015-02-20').format(DATE_FORMAT),
            to: { name: 'Mama Abukhaliph', email: 'mama@abukhaliph.net' },
            msg: 'Ba babababababab babababb  bababababab bababababab babababbab /n ababababab babababab babababababqa babbabababababababa abababababababababa',
            isRead: true
        },
        {
            id: '3fg3sD',
            subject: 'Ckhhhh Ckhhh Ckhhhh',
            from: { name: 'Chaim Moshe', email: 'chaim@moshe.com' },
            sent: moment('2018-05-03').format(DATE_FORMAT),
            to: { name: 'Jacky Chan', email: 'jacky@mami.mamsh' },
            msg: 'cccccdcccccd cccccd cccccd cccccd cccccd cccccd /n cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccdccc',
            isRead: false
        }
    ];
    // utilsService.saveToStorage(EMAIL_KEY, tempEmails)
    return tempEmails;
}
// let emails = utilsService.loadFromStorage(EMAILS_KEY);
// if(!emails) emails = getTempEmails();
let emails = getTempEmails();

function query() {
    // emails = utilsService.loadFromStorage(EMAILS_KEY)
    return Promise.resolve(emails);
}

export default {
    query,
}