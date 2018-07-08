// console.log('email service');

//TODO: add delete button at the email-preview(which not a prob because it's the son of email-app)

import utilsService from './utils-service.js';

const EMAILS_KEY = 'emails'
const DATE_FORMAT = 'ddd, MMM D, YYYY HH:mm';
// const DATE_FORMAT = 'lll';

function getTempEmails() {
    let tempEmails = [
        {
            id: '1fg3sD',
            subject: 'Thank you: Information required to stay at Tushita',
            from: { name: 'Tushita Registration', address: 'register@tushita.info' },
            sent: '2018-05-20',
            to: { name: 'Didi Cohen', address: 'yedidic@gmail.com' },
            msg: `Dear Didi

            Yes that would be ok.  However mail is slow in India so I hope it arrives while you are here.
            
            Kind regards
            Jana
            PS if you have more questions, please email this account.`,
            isRead: false
        },
        {
            id: '2fg3sD',
            subject: 'ÖBB Ticket – 15:55 – Wien Hbf > Bad Aussee Bahnhof‏',
            from: { name: 'ÖBB Tickets', address: 'tickets@oebb.at' },
            sent: '2013-02-20',
            to: { name: 'Mama Abukhaliph', address: 'mama@abukhaliph.net' },
            msg: `	
            Buchungscode: 	0092 9427 7998 8404
            Buchungsdatum: 	22. Mai 2017
            Transaktionsnummer: 	536000000009023660
            Sehr geehrte Kundin,
            Sehr geehrter Kunde,
            wir schicken Ihnen hiermit den Link zu Ihren PDF-Tickets.
            Bitte drucken Sie Ihre Tickets vor Antritt der Reise im A4-Format aus.
            Tickets herunterladen und ausdrucken
            Bitte beachten Sie, dass wir PDF-Tickets nicht mehr ändern oder stornieren können. Auch ein Umwandeln in ein Handy-Ticket oder zur Abholung am Bahnhof ist nicht mehr möglich.
            Ihre PDF-Tickets
            Wien Hbf  >  Bad Aussee Bahnhof
            Eine Fahrt für Mama Abukhaliph
            gilt am 25. Mai 2017 um 15:55	Details >
            Weitere Fragen?
            Bei Fragen erreichen Sie uns rund um die Uhr unter der Telefonnummer 05-1717-23. Oder Sie schreiben uns an kundenservice@oebb.at, und wir werden uns umgehend um Ihre Anliegen kümmern.	
            Wir wünschen Ihnen eine gute Fahrt, 
            Ihre ÖBB
            `,
            isRead: true
        },
        {
            id: '3fg3sD',
            subject: 'Re: Applying for TTC',
            from: { name: 'Iyengar Yoga Centre', address: 'info@hiyogacentre.com' },
            sent: '2010-05-03',
            to: { name: 'Jacky Chan', address: 'jacky@mami.mamash' },
            msg: `
            Hello Jacky,
            
            Thank you for your replies.
            
            Yes. We have next TTC in March 2019 from 20th March until 29 April 2019.
            
            You will find more details about the TTC Here.
            
            Hope this message finds you well.
            
            Best regards,
            
            Jaydev
            `,
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
        // if (!currEmail) reject('could\'nt find the Habub');
        resolve(currEmail);
    });
}

function changeEmailReadStatus(id, isRead = true) {
    return new Promise((resolve, reject) => {
        getById(id)
            .then((email) => {
                if (!email) return;
                email.isRead = isRead;
                utilsService.saveToStorage(EMAILS_KEY, emails);
                return resolve(email);
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
function deleteEmail(emailId) {
    let idx = emails.findIndex(email => email.id === emailId)
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