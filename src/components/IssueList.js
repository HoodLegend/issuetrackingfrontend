import "simple-datatables/src/css/style.css";

const NewIssues = ({issues}) => {
    return (
      <div>
            <table className="table table-borderless datatable">
              <thead>
                <tr>
                  <th scope="col">issue No</th>
                  <th scope="col">name</th>
                  <th scope="col">description</th>
                  <th scope="col">department</th>
                  <th scope="col">priority</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
              {issues.map((issue) => (
                <tr key={issue.id}>
                  <th scope="row">
                    <p>{issue.id}</p>
                  </th>
                  <td>{issue.issuename}</td>
                  <td>{issue.description}</td>
                  <td>{issue.department}</td>
                  <td>{issue.priority}</td>
                  <td>
                    <span className="badge bg-secondary"> {issue.status}</span>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
    );
}
 
export default NewIssues;