import React from "react";
import Resume from "./Resume";
import resumedetails from "@/lib/resumedetails.json";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="mt-4">
      <Resume resume={resumedetails} />
    </div>
  );
};

export default page;
