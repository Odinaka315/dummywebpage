import React from "react";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobsData = useLoaderData();

  return (
    <div className="jobs">
      {jobsData.map((job) => {
        return (
          <Link to={job.id.toString()} key={job.id}>
            <h4>{job.title}</h4>
            <p>{job.location}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Jobs;

export const JobLoader = async () => {
  const response = await axios.get("http://localhost:5000/jobs");

  // Axios automatically parses JSON, so we just return the .data property
  return response.data;
};
