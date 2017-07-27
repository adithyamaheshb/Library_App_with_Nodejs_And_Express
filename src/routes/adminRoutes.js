var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var books = [{
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    },
    {
        title: 'Introduction to C Programming',
        genre: 'Education',
        author: 'Yashwanth Kanethkar',
        read: false
    },
    {
        title: 'CyberWar and Cyberterrorism',
        genre: 'Education',
        author: 'P.W.Singer',
        read: false
    }
];
var router = function(nav) {
    adminRouter.route('/addBooks')
        .get(function(req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function(err, results) {
                    res.send(results);
                    db.close();
                });
            });
            //res.send('inserting books');
        });
    return adminRouter;
};
module.exports = router;
