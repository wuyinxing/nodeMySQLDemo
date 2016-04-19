/**
 * Created by wyx on 2016/4/18.
 */

exports.add = function(db,req,res){

    db.query(
        'SELECT max(id) id FROM test1',
        function(err,rows){
            if(err) throw  err;

            var maxId = rows[0]['id'] +1 ;
            db.query(
                'INSERT INTO test1 (ID,NAME,TEXT,DATE) VALUES (? ,? , ? , ?)' ,
                [maxId ,'星哥', "{'a':1,'b':2,'c':2}", '2016-12-12'],
                function(err){
                    if(err) throw err;
                    res.end('add sucess');
                }
            );
        }
    );
}


exports.update = function (db, req, res) {
    db.query(
        'UPDATE test1 SET NAME = \'海贼王\' WHERE id IN (SELECT * FROM (SELECT MAX(id) FROM test1) t1) ',
        function(err){
            if(err) throw err;
            res.end('update sucess');
        }
    );

}

exports.delete = function(db,req,res){
    db.query(
        'DELETE FROM test1 WHERE id = ?',
        [5],
        function(err){
            if(err) throw err;
            res.end('delete sucess');
        }
    );
}

exports.show = function(db,res){
    db.query(
        'SELECT * FROM test1 WHERE id = ?',
        [2],
        function (err ,rows) {
            if(err) throw err;
            res.end(rows[0]['name']);
        }
    )
}