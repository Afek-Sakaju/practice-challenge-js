const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log(`good evening`);
    next();
});

router
    .route('/:version')
    .get((req, res, next) => {
        const version = req.params.version;
        const dataLearned = {
            array: true,
            primitiveVariables: true,
            object: false,
            stack: false,
            queue: false,
            linkedList: false,
            binaryTree: false,
            map: false,
            set: false,
        };
        const knowledge = {
            mainLanguage: undefined,
            exersicesLevel: 'begginer',
            studyInstitute: 'school',
        };
        switch (version) {
            case '1':
                res.json(dataLearned, '\n', knowledge);
                break;
            case '2':
                for (const [key, value] of Object.entries(dataLearned)) {
                    value = true;
                }
                for (const [key, value] of Object.entries(knowledge)) {
                    value = true;
                }
                res.json(`get request for afek v${version}.\n
                dataLearned by current students version:${dataLearned}.\n
                more knowledge about him:${knowledge}`);
                break;
            default:
                res.send("the version is'nt supported ");
        }
    })
    .post((req, res, next) => {
        const version = req.params.version;
        res.send('get request for afek' + version);
    });

module.exports = router;
