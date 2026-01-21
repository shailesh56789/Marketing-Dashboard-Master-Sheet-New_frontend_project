export default function TaskCard({ dss }) {
  return (
    <tr
      style={{
        backgroundColor:
          dss.enquiryStatusLast === "Not taken"
            ? "#fff3cd"
            : "#d1e7dd"
      }}
    >
      <td>{dss.id}</td>
      <td>{dss.marketingName}</td>
      <td>{dss.marketingMobileNo}</td>
      <td>{dss.marketingEmail}</td>
      <td>{dss.enquiryStatusLast}</td>
      <td>{dss.leadQualified}</td>
      <td>{dss.enquiryAssignedUserName}</td>
      <td>
        {dss.followUpCallDate
          ? dss.followUpCallDate
          : "Not Scheduled"}
      </td>
    </tr>
  );
}
