import express from 'express';
import cors from 'cors';
import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    database: 'LYGWEB'
});

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/summary', (req, res) => {
    const data = connection.query(`SELECT concat("",TrnDate,"") AS tgl,ls.StyleCode,COUNT(DISTINCT ls.SizeSort) AS totalSize,
        SUM(QtyOutput) AS totalOutput
        FROM lygstylesize ls 
        JOIN lygsewingoutput lso ON ls.StyleCode=lso.StyleCode AND ls.SizeName=lso.SizeName
        GROUP BY ls.StyleCode, lso.TrnDate
        ORDER BY TrnDate,ls.StyleCode;`, (err, result) => {
        if (err) return res.send(err)
        return res.send(result)
    })
});

app.post('/api/summary', (req, res) => {
    const { StyleCode, date } = req.body
    connection.query(`SELECT OperatorName,ls.StyleCode,SUM(QtyOutput) AS totalOutput,DestinationCode, DestinationName
        FROM lygstylesize ls 
        LEFT JOIN lygsewingoutput lso ON ls.StyleCode=lso.StyleCode AND ls.SizeName=lso.SizeName
        JOIN lygdestination USING(DestinationCode)
        WHERE ls.StyleCode=? AND TrnDate=?
        GROUP BY OperatorName,DestinationCode
        ORDER BY OperatorName DESC;`, [StyleCode, date],
        (err, results) => {
            const data = []
            if (err) return res.send(err)
            for (const item of results) {
                connection.query(`SELECT ls.SizeName, 
                IFNULL((SELECT QtyOutput FROM lygsewingoutput WHERE StyleCode=? AND TrnDate=?
                AND OperatorName=? AND SizeName=ls.SizeName AND DestinationCode=?),0) AS totalOutput
                FROMlygstylesize ls 
                WHERE StyleCode=? 
                GROUP BY ls.SizeName
                ORDER BY 0+SizeName ASC`, [StyleCode, date, item.OperatorName, item.DestinationCode, item.StyleCode],
                    (_err, result) => {
                        if (_err) return res.send(_err)
                        data.push(result)
                    })
            }
            return res.send({
                data: results,
                dataSizeName: data
            })
        })
});

app.listen(8080, () => console.log('running server'));