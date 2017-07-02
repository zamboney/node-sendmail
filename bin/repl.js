var program = require('commander');
var sendmail = require('../index.js')
program
    .option('-f, --from', 'from mail address')
    .option('-t, --to', 'to mail address')
    .option('-s, --subject', 'mail subject')
    .option('-h, --html', 'content of the mail')
    .parse(process.argv);


sendmail({
    from: program.from,
    to: program.to,
    subject: program.subject,
    html: program.html,
}, function (err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});