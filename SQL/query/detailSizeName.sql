SELECT ls.SizeName, 
IFNULL((SELECT QtyOutput FROM lygsewingoutput WHERE StyleCode=? AND TrnDate=?
AND OperatorName=? AND SizeName=ls.SizeName AND DestinationCode=?),0) AS totalOutput
FROM lygstylesize ls 
WHERE StyleCode=? 
GROUP BY ls.SizeName
ORDER BY 0+SizeName ASC