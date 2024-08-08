import express from 'express';
import cors from 'cors';
import mysql from 'mysql'

const PORT = 8080
const app = express();
app.use(cors());
app.use(express.json());
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    database: 'LYGWEB'
});

const queryRaw = (query, value) => {
    return new Promise((resolve, reject) => {
        connection.query(query, value, (error, elements) => {
            if (error) return reject(error)
            return resolve(elements);
        });
    });
};

const GetSizeNameProperties = async ({ master, StyleCode, date }) => {
    const data = []
    const qSizeName = `SELECT ls.SizeName, 
    IFNULL((SELECT QtyOutput FROM lygsewingoutput WHERE StyleCode=? AND TrnDate=?
    AND OperatorName=? AND SizeName=ls.SizeName AND DestinationCode=?),0) AS totalOutput
    FROM lygstylesize ls 
    WHERE StyleCode=? 
    GROUP BY ls.SizeName
    ORDER BY 0+SizeName ASC`
    for (const item of master) {
        const dataSize = await queryRaw(qSizeName,
            [
                StyleCode,
                date,
                item.OperatorName,
                item.DestinationCode,
                item.StyleCode
            ]
        )
        data.push({
            Operator: item.OperatorName,
            detailSize: dataSize,
            totalQty: dataSize.reduce((x, y) => x + y.totalOutput, 0),
            Destination: `${item.DestinationCode} (${item.DestinationName})`,
        })
    }
    return data
}

app.get('/api/summary', async (req, res) => {
    try {
        const q = `SELECT concat("",TrnDate,"") AS tgl,ls.StyleCode,COUNT(DISTINCT ls.SizeSort) AS totalSize,
        SUM(QtyOutput) AS totalOutput
        FROM lygstylesize ls 
        JOIN lygsewingoutput lso ON ls.StyleCode=lso.StyleCode AND ls.SizeName=lso.SizeName
        GROUP BY ls.StyleCode, lso.TrnDate
        ORDER BY TrnDate,ls.StyleCode;`
        const data = await queryRaw(q)
        return res.send(data)
    } catch (error) {
        console.log(error);
        return res.send(error)
    }
});

app.post('/api/detail-transaction', async (req, res) => {
    try {
        const { StyleCode, date } = req.body
        const qMaster = `SELECT OperatorName,ls.StyleCode,SUM(QtyOutput) AS totalOutput,DestinationCode, 
        DestinationName
        FROM lygstylesize ls 
        LEFT JOIN lygsewingoutput lso ON ls.StyleCode=lso.StyleCode AND ls.SizeName=lso.SizeName
        JOIN lygdestination USING(DestinationCode)
        WHERE ls.StyleCode=? AND TrnDate=?
        GROUP BY OperatorName,DestinationCode
        ORDER BY OperatorName DESC;`

        const master = await queryRaw(qMaster, [StyleCode, date])
        return res.send(await GetSizeNameProperties({
            master: master,
            StyleCode,
            date
        }));
    } catch (error) {
        console.log(error);
        return res.send(error)
    }
});

app.listen(PORT, () => console.log('running server on PORT : ' + PORT));