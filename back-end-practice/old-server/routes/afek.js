const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log(`entry identified on route:'/afek'`);
    next();
});

router
    .route('/:version')
    .get((req, res, next) => {
        const version = req.params.version;
        const knowledge = {
            mainLanguage: 'Undefined',
            exersicesLevel: 'Begginer',
            studyInstitute: 'School',
        };

        switch (version) {
            case '1':
                res.json(knowledge);
                break;
            case '2':
                knowledge.mainLanguage = 'Java-Script';
                knowledge.exersicesLevel = 'Medium';
                knowledge.studyInstitute = 'Just Like That - course';
                res.json(knowledge);
                break;
            default:
                res.send("afek's version is not supported ");
        }
    })
    .post((req, res, next) => {
        const version = req.params.version;
        res.send('post request for afek' + version);
    });

module.exports = router;
