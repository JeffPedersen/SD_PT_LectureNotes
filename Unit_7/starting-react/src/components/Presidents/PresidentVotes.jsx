import DisplayTotals from "./DisplayTotals";

function PresidentVotes() {
    const votes = [
        { name: "Abe Lincoln", count: 139033},
        { name: "Stephen Douglas", count: 115509},
    ];
    return(
        <>
            { votes.map((record, index) =>(
                <DisplayTotals 
                id={index}
                name={record.name}
                count={record.count}
                />
            ))}
        </>
    )
}

export default PresidentVotes;