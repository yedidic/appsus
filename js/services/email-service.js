// console.log('email service');

import utilsService from './utils-service.js';

const EMAILS_KEY = 'emails'
const DATE_FORMAT = 'ddd, MMM D, YYYY HH:mm';
// const DATE_FORMAT = 'lll';

function getTempEmails() {
    let tempEmails = [
        {
            id: '1fg3sD',
            subject: 'Ani Adam mamash Tov',
            from: { name: 'Adam Anak Mamash', address: 'adam@anak.mamsh' },
            sent: moment('2018-10-20').format(DATE_FORMAT),
            to: { name: 'Jacky Chan', address: 'jacky@mami.mamsh' },
            msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente num /n quam alias culpa neque nihil expedita vero quo similique id ipsam, maiores consequatur dolorem porro qui est quam quod? Et, vero.',
            isRead: false
        },
        {
            id: '2fg3sD',
            subject: 'Baba Mamash Ohev Mama',
            from: { name: 'Baba Avitan', address: 'baba@avitan.king' },
            sent: moment('2013-02-20').format(DATE_FORMAT),
            to: { name: 'Mama Abukhaliph', address: 'mama@abukhaliph.net' },
            msg: 'Ba babababababab babababb  bababababab bababababab babababbab /n ababababab babababab babababababqa babbabababababababa abababababababababa',
            isRead: true
        },
        {
            id: '3fg3sD',
            subject: 'Ckhhhh Ckhhh Ckhhhh',
            from: { name: 'Chaim Moshe', address: 'chaim@moshe.com' },
            sent: moment('2010-05-03').format(DATE_FORMAT),
            to: { name: 'Jacky Chan', address: 'jacky@mami.mamsh' },
            msg: 'cccccdcccccd cccccd cccccd cccccd cccccd cccccd /n cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccdccc',
            isRead: false
        }
    ];
    utilsService.saveToStorage(EMAILS_KEY, tempEmails)
    return tempEmails;
}
let emails = utilsService.loadFromStorage(EMAILS_KEY);
if (!emails) getTempEmails();


function query() {
    emails = utilsService.loadFromStorage(EMAILS_KEY)
    return Promise.resolve(emails);
}

function getById(id) {
    let currEmail = emails.find(email => email.id === id)
    return new Promise((resolve, reject) => {
        if (!currEmail) reject('could\'nt find the Habub');
        resolve(currEmail, emails[0]);
    });
}

function changeEmailReadStatus(id, isRead = true) {
    return new Promise((resolve, reject) => {
        getById(id)
            .then((email) => {
                email.isRead = isRead;
                utilsService.saveToStorage(EMAILS_KEY, emails);
                resolve(email);
            })

    })

}
function setNewEmail(email) {
    return new Promise((resolve, reject) => {
        // emails = utilsService.loadFromStorage(EMAILS_KEY)
        email.id = utilsService.makeid();
        emails.unshift(email);
        utilsService.saveToStorage(EMAILS_KEY, emails);
        resolve();
    })
}
function deleteEmail(idx) {
    return new Promise((resolve, reject) => {
        // emails = utilsService.loadFromStorage(EMAILS_KEY);
        emails.splice(idx, 1);
        utilsService.saveToStorage(EMAILS_KEY, emails);
        resolve(emails);
    })
}
export default {
    DATE_FORMAT,
    query,
    changeEmailReadStatus,
    getById,
    setNewEmail,
    deleteEmail
}