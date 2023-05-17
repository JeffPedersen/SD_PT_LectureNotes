// This will be a table component, child of Presidents, parent to PresidentsRow
import PresidentsRow from "./PresidentsRow"

export default function PresidentsTable(props) {
  return (
    <>
        <h2>{props.title}</h2>
        <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birth Year</th>
                        <th>Alive</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.presidents.map((president, i) => {
                            return (
                                <PresidentsRow 
                                    key={i}
                                    first={president.first}
                                    last={president.last}
                                    year={president.year}
                                    passed={president.passed}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
    </>
  )
}
