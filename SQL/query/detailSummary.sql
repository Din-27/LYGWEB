SELECT concat("",TrnDate,"") AS tgl,ls.StyleCode,COUNT(DISTINCT ls.SizeSort) AS totalSize,
SUM(QtyOutput) AS totalOutput
FROM lygstylesize ls 
JOIN lygsewingoutput lso ON ls.StyleCode=lso.StyleCode AND ls.SizeName=lso.SizeName
GROUP BY ls.StyleCode, lso.TrnDate
ORDER BY TrnDate,ls.StyleCode;