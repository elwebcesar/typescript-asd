import './skeleton.scss'

export default function SkeletonTable(props) {

  let thTotal = "";
  let tdTotal = "";
  let rowsTotal = "";

  for (let i = 0; i < props.headers; i++) {
    thTotal += '<th><span></span></th>';
    tdTotal += '<td><span></span></td>';
  }

  for (let i = 0; i < props.rows; i++) {
    rowsTotal += `<tr>${tdTotal}</tr>`;
  }

  return (
    <div className="skeleton">
      <table>
        <thead>
          <tr dangerouslySetInnerHTML={{__html: thTotal}}></tr>
        </thead>
        <tbody dangerouslySetInnerHTML={{__html: rowsTotal}}></tbody>
      </table>
    </div>
  )
}
