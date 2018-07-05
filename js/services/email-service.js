console.log('email service');

function tempMails() {
    return [
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
    ]


}