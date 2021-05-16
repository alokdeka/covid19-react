import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    // console.log(actualData.statewise);
    setData(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="table-responsive shadow rounded">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr className="table-dark">
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Death</th>
                <th>Active</th>
                <th>Last update</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElem, i) => {
                return (
                  <tr key={i}>
                    <td>{curElem.state}</td>
                    <td>{curElem.confirmed}</td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.active}</td>
                    <td>{curElem.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
