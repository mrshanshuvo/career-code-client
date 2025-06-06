import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const jobsPromise = fetch("http://localhost:5000/jobs").then((res) =>
    res.json()
  );

  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-40">
            <ClipLoader size={40} color="#3B82F6" />
          </div>
        }
      >
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
