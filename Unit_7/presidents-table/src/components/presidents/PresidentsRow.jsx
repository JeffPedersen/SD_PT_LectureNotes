// This will be child to PresidentsTable and imported to itw

export default function PresidentsRow({first, last, year, passed}) {
  let date = new Date().getFullYear();

  return (
    <>
      <tr>
            <td>{first}</td>
            <td>{last}</td>
            <td>{year}</td>
            <td>{passed === undefined ? "Yes" : "No"}</td>
            <td>{
                passed === undefined ? 
                    date - year :
                    passed - year
            }</td>
        </tr>
    
    </>
  )
}
