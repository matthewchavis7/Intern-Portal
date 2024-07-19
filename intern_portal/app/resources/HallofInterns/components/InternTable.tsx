"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const InternTable = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    fetch("/table.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("WOMP WOMP");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTables(data);
      });
  }, []);
  return (
    <div className={`${font.className}`}>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>College</th>
                <th>Internship</th>
                <th>Where Now</th>
                <th>intern currently? </th>
                <th>Email</th>
              </tr>
            </thead>
            {tables.map((table) => (
              <tbody key={table.ID}>
                <tr className="bg-base-200">
                  <th>{table.Name}</th>
                  <td>{table.Date}</td>
                  <td>{table.College}</td>
                  <td>{table.Internship}</td>
                  <td>{table.WhereNow}</td>
                  <td>{table.current}</td>
                  <td>{table.Email}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default InternTable;
