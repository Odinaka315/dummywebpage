import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const JobDetails = () => {
  const jobDetails = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="job-details">
      <p>
        <b>Job Details:</b> {jobDetails.title}
      </p>
      <p>
        <b>Job location:</b> {jobDetails.location}
      </p>
      <p>
        <b>Job Salary:</b> {jobDetails.salary}
      </p>
      <p>
        <b>Job type:</b> {jobDetails.type}
      </p>
      <p>
        <b>Job Description:</b> {jobDetails.description}
      </p>

      <button>Apply Now</button>
      <button onClick={() => navigate(-1)}>Back to job page</button>
    </div>
  );
};

export default JobDetails;

export const JobDetailsLoader = async ({ params }) => {
  const { id } = params;

  const response = await axios.get("http://localhost:5000/jobs/" + id);

  // Axios automatically parses JSON, so we just return the .data property
  return response.data;
};
