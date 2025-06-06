import React from 'react';
import { useLoaderData } from 'react-router';
import { GoLocation } from 'react-icons/go';
import { MdWork, MdCategory, MdAttachMoney, MdEvent, MdOutlineAssignmentTurnedIn } from 'react-icons/md';


const JobDetails = () => {
  const job = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg space-y-8">
      {/* Job Header */}
      <div className="flex items-center gap-6">
        <img
          src={job.company_logo}
          alt={job.company}
          className="h-16 w-16 rounded-full border border-gray-200 object-contain"
        />
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">{job.title}</h1>
          <p className="text-base text-gray-500 mt-1">{job.company}</p>
        </div>
      </div>

      {/* Location & Basic Info */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-gray-700 text-sm">
        <p className="flex items-center gap-2">
          <GoLocation className="text-blue-600 text-lg" /> {job.location}
        </p>
        <p className="flex items-center gap-2">
          <MdWork className="text-green-600 text-lg" />
          <span><strong>Job Type:</strong> {job.jobType}</span>
        </p>
        <p className="flex items-center gap-2">
          <MdCategory className="text-purple-600 text-lg" />
          <span><strong>Category:</strong> {job.category}</span>
        </p>
        <p className="flex items-center gap-2">
          <MdAttachMoney className="text-yellow-600 text-lg" />
          <span>
            <strong>Salary:</strong> {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
          </span>
        </p>
        <p className="flex items-center gap-2">
          <MdEvent className="text-red-600 text-lg" />
          <span><strong>Application Deadline:</strong> {job.applicationDeadline}</span>
        </p>
        <p className="flex items-center gap-2">
          <MdOutlineAssignmentTurnedIn className="text-indigo-600 text-lg" />
          <span><strong>Status:</strong> {job.status}</span>
        </p>
      </div>

      {/* Description */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
          Job Description
        </h2>
        <p className="text-gray-600 leading-relaxed">{job.description}</p>
      </section>

      {/* Responsibilities */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
          Responsibilities
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {job.responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Requirements */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
          Requirements
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {job.requirements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* HR Contact */}
      <div className="text-gray-700 text-sm italic">
        <p>
          <span className="font-semibold">Contact HR:</span> {job.hr_name} (
          <a href={`mailto:${job.hr_email}`} className="text-blue-600 underline hover:text-blue-800">
            {job.hr_email}
          </a>
          )
        </p>
      </div>

      {/* Apply Button */}
      <div className="flex justify-center">
        <button className="btn btn-outline btn-primary btn-lg transition-transform hover:scale-105">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
