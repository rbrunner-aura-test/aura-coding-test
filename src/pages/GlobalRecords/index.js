// Globals
import React from "react";

// Components
import { Record } from "components/Record";

// Misc
import { data } from "components/Record/data";

// Component
function GlobalRecords() {
  return (
    <div className="aura-page aura-global_records">
      <h1>Top Records of 2020</h1>

      <div className="aura-page-content">
        {data.map((record) => {
          return <Record key={record.id} data={record} />;
        })}
      </div>
    </div>
  );
}

export { GlobalRecords };
