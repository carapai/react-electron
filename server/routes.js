var express = require('express');
var router = express.Router();
var _ = require('lodash');

// var db = require('./database');
var request = require('request'),
    username = "admin",
    password = "district",
    url = "http://" + username + ":" + password + "@localhost:8080/dhis/api/programs";

const sample = [{
        "id": 33973,
        "first_name": "karapai",
        "surname": "charles",
        "gender": "M",
        "age_in_months": 0,
        "months": 0,
        "years": 3,
        "registration_number": "017/5000/2018",
        "study_number": "",
        "department": "Apac",
        "lab_id": "MUCHS-MICROB-201802646",
        "telephone": "",
        "status": 2,
        "sample_collection_date": "6/25/2018 9:45",
        "date_created": "6/25/2018 10:39",
        "date_last_modified": "6/25/2018 10:39",
        "is_valid": 1,
        "is_culture": 1,
        "organism": "Group B Salmonella",
        "result": "R",
        "antibiotic": "Ampicillin"
    },
    {
        "id": 33973,
        "first_name": "karapai",
        "surname": "charles",
        "gender": "M",
        "age_in_months": 0,
        "months": 0,
        "years": 3,
        "registration_number": "017/5000/2018",
        "study_number": "",
        "department": "Apac",
        "lab_id": "MUCHS-MICROB-201802646",
        "telephone": "",
        "status": 2,
        "sample_collection_date": "6/25/2018 9:45",
        "date_created": "6/25/2018 10:39",
        "date_last_modified": "6/25/2018 10:39",
        "is_valid": 1,
        "is_culture": 1,
        "organism": "Group B Salmonella",
        "result": "S",
        "antibiotic": "Ceftriaxone"
    },
    {
        "id": 33973,
        "first_name": "karapai",
        "surname": "charles",
        "gender": "M",
        "age_in_months": 0,
        "months": 0,
        "years": 3,
        "registration_number": "017/5000/2018",
        "study_number": "",
        "department": "Apac",
        "lab_id": "MUCHS-MICROB-201802646",
        "telephone": "",
        "status": 2,
        "sample_collection_date": "6/25/2018 9:45",
        "date_created": "6/25/2018 10:39",
        "date_last_modified": "6/25/2018 10:39",
        "is_valid": 1,
        "is_culture": 1,
        "organism": "Group B Salmonella",
        "result": "S",
        "antibiotic": "Chloramphenicol"
    },
    {
        "id": 33973,
        "first_name": "karapai",
        "surname": "charles",
        "gender": "M",
        "age_in_months": 0,
        "months": 0,
        "years": 3,
        "registration_number": "017/5000/2018",
        "study_number": "",
        "department": "Apac",
        "lab_id": "MUCHS-MICROB-201802646",
        "telephone": "",
        "status": 2,
        "sample_collection_date": "6/25/2018 9:45",
        "date_created": "6/25/2018 10:39",
        "date_last_modified": "6/25/2018 10:39",
        "is_valid": 1,
        "is_culture": 1,
        "organism": "Group B Salmonella",
        "result": "I",
        "antibiotic": "Ciprofloxacin"
    },
    {
        "id": 33973,
        "first_name": "karapai",
        "surname": "charles",
        "gender": "M",
        "age_in_months": 0,
        "months": 0,
        "years": 3,
        "registration_number": "017/5000/2018",
        "study_number": "",
        "department": "Apac",
        "lab_id": "MUCHS-MICROB-201802646",
        "telephone": "",
        "status": 2,
        "sample_collection_date": "6/25/2018 9:45",
        "date_created": "6/25/2018 10:39",
        "date_last_modified": "6/25/2018 10:39",
        "is_valid": 1,
        "is_culture": 1,
        "organism": "Group B Salmonella",
        "result": "R",
        "antibiotic": "Co-trimoxazole"
    },
    {
        "id": 33973,
        "first_name": "karapai",
        "surname": "charles",
        "gender": "M",
        "age_in_months": 0,
        "months": 0,
        "years": 3,
        "registration_number": "017/5000/2018",
        "study_number": "",
        "department": "Apac",
        "lab_id": "MUCHS-MICROB-201802646",
        "telephone": "",
        "status": 2,
        "sample_collection_date": "6/25/2018 9:45",
        "date_created": "6/25/2018 10:39",
        "date_last_modified": "6/25/2018 10:39",
        "is_valid": 1,
        "is_culture": 1,
        "organism": "Group B Salmonella",
        "result": "S",
        "antibiotic": "Nalidixic acid"
    }
]


const query = 'SELECT pr.id,pr.first_name,pr.surname,pr.gender,pr.age_in_months,pr.months,pr.years,pr.registration_number,pr.study_number,pr.lab_id,pr.telephone,pr.status,pr.sample_collection_date,pr.date_created,pr.date_last_modified,pr.is_valid,st.is_culture,o.name  AS organism,car.result,car.date_created,car.date_last_modified, a.name as antibiotic FROM patient_request pr LEFT JOIN lab_test_execution lte ON (pr.id = lte.patient_request_id) LEFT JOIN specimen_test st ON (lte.specimen_test_id = st.id) LEFT JOIN specimen s ON (s.id = st.specimen_id) LEFT JOIN culture_test ct ON (ct.lab_test_execution_id = lte.id) LEFT JOIN organism o ON (o.id = ct.organism_id) LEFT JOIN culture_antibiotic_result car ON (car.culture_test_id = ct.id) LEFT JOIN antibiotic a ON (a.id = car.antibiotic_id)'

// Home page route.
router.get('/', function (req, res) {
    res.send('Wiki home page');
})
// About page route.
router.get('/about', function (req, res) {
    res.send('About this wiki');
});

router.get('/programs', function (req, res) {
    request({
        url: url
    }, function (error, response, body) {
        res.send(body);
    });

})


router.get('/columns', function (req, res, next) {
    var organisms = ['registration_number', 'department', 'organism1', 'organism2', 'organism3', 'organism4'];
    for (var i = 1; i <= 19; i++) {
        organisms.push('organism1' + 'antibiotic' + i);
        organisms.push('organism1' + 'antibiotic' + i + 'result' + i);

        organisms.push('organism2' + 'antibiotic' + i);
        organisms.push('organism2' + 'antibiotic' + i + 'result' + i);

        organisms.push('organism3' + 'antibiotic' + i);
        organisms.push('organism3' + 'antibiotic' + i + 'result' + i);

        organisms.push('organism4' + 'antibiotic' + i);
        organisms.push('organism4' + 'antibiotic' + i + 'result' + i);

    }
    res.send(JSON.stringify({
        'result': organisms
    }));
});

router.get('/data', function (req, res, next) {
    var result = [];

    var results = _.groupBy(sample, 'registration_number');
    var patientData = {};
    _.forOwn(results, function (v, k) {
        var i = 1;
        var data = _.groupBy(v, 'organism');
        patientData['registration_number'] = v[0]['registration_number'];
        patientData['department'] = v[0]['department'];

        _.forOwn(data, function (v, k) {
            patientData['organism' + i] = k;
            var j = 1;
            _.forEach(v, function (r) {
                patientData['organism' + i + 'antibiotic' + j] = r['antibiotic'];
                patientData['organism' + i + 'antibiotic' + j + 'result' + j] = r['result'];
                j = j + 1;
            });
            i = i + 1
        });
        result.push(patientData);
    });
    res.send(JSON.stringify(result));
    // db.query(query, function (error, results, fields) {
    //     if (error) throw error;
    //     results = _.groupBy(results, 'id');
    //     var patientData = {};
    //     _.forOwn(results, function (v, k) {
    //         var i = 1;
    //         var data = _.groupBy(v, 'organism');
    //         patientData['id'] = v[0]['id'];
    //         _.forOwn(data, function (v, k) {
    //             patientData['organism' + i] = k;
    //             patientData['organism' + i + 'antibiotic' + i] = v[0]['antibiotic'];
    //             patientData['organism' + i + 'antibiotic' + i + 'result' + i] = v[0]['result'];
    //             i = i + 1
    //         });
    //         result.push(patientData);
    //     });
    //     res.send(JSON.stringify(result));
    // });
});

module.exports = router;