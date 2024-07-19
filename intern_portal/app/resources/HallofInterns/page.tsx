import React from "react";
import InternTable from "./components/InternTable";

const page = () => {
  return (
    <div>
      <>
        <main className={`pt-16 flex flex-col items-center`}>
          <div className="mt-4">
            <div>
              <p className="text-8xl text-center py-6">Hall of Interns</p>
              <InternTable />
            </div>
          </div>
        </main>
      </>
    </div>
  );
};

export default page;
