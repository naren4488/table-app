import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const [sortedData, setSortedData] = useState([...data]);
  // console.log("sorted data", sortedData);

  // useEffect(() => {
  //   setSortedData([...data]);
  // }, []);

  const sortByDate = () => {
    // console.log("sort by date is running");
    let res = data.sort((a, b) => {
      if (new Date(b.date) === new Date(a.date)) {
        return b.views - a.views;
      }
      return new Date(b.date) - new Date(a.date);
    });
    // console.log("result by sort by dates", res);
    setSortedData([...res]);
  };

  const sortByViews = () => {
    // console.log("sort by views is running");
    let res = data.sort((a, b) => {
      if (a.views === b.views) {
        return new Date(b.date) - new Date(a.date);
      } else return b.views - a.views;
    });
    // console.log("result from sort by views", res);
    setSortedData([...res]);
  };

  return (
    <>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
