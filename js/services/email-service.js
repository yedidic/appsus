console.log('email service');

import utilsService from './utils-service.js';

const EMAIL_KEY = 'email'


function getTempEmails() {
    let tempEmails =  [
        {
            subject: 'Ani Adam mamash Tov',
            from: { name: 'Adam Anak Mamash', mail: 'adam@anak.mamsh' },
            sent: moment('2010-10-20').format('MMMM Do YYYY, h:mm:ss a'),
            to: { name: 'Jacky Chan', mail: 'jacky@mami.mamsh' },
            msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente num /n quam alias culpa neque nihil expedita vero quo similique id ipsam, maiores consequatur dolorem porro qui est quam quod? Et, vero.',
            isRead: false
        },
        {
            subject: 'Baba Mamash Ohev Mama',
            from: { name: 'Baba Avitan', mail: 'baba@avitan.king' },
            sent: moment('2015-02-20').format('MMMM Do YYYY, h:mm:ss a'),
            to: { name: 'Mama Abukhaliph', mail: 'mama@abukhaliph.net' },
            msg: 'Ba babababababab babababb  bababababab bababababab babababbab /n ababababab babababab babababababqa babbabababababababa abababababababababa',
            isRead: true
        },
        {
            subject: 'Ckhhhh Ckhhh Ckhhhh',
            from: { name: 'Chaim Moshe', mail: 'chaim@moshe.com' },
            sent: moment('2018-05-03').format('MMMM Do YYYY, h:mm:ss a'),
            to: { name: 'Jacky Chan', mail: 'jacky@mami.mamsh' },
            msg: 'cccccdcccccd cccccd cccccd cccccd cccccd cccccd /n cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccd cccccdccc',
            isRead: false
        }
    ];
    // utilsService.saveToStorage(EMAIL_KEY, tempEmails)
    return tempEmails;
}
let emails = getTempEmails();

function query(){
    // emails = utilsService.loadFromStorage(EMAIL_KEY)
    return Promise.resolve(emails);
}

export default{
    query,
}