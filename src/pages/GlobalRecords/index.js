// Globals
import React, { createContext, useState, useEffect, useContext } from "react";

// Components
import { Record } from "components/Record";

// Misc
import { data } from "components/Record/data";
import { mockFetch } from "util/mockFetch";

const RecordContext = createContext({
  records: []
});

function useRecords() {
  const contextValue = useContext(RecordContext);
  if (!contextValue) {
    throw new Error("can't use record context in this scope");
  } else {
    return contextValue;
  }
}

// Component
function GlobalRecords() {
  const [records, setRecords] = useState([]);
  const [couldntRetrieve, setCouldntRetrieve] = useState(false);
  useEffect(() => {
    (async () => {
      mockFetch()()
      .then(retrievedRecords => {
        console.log("here");
        setRecords(retrievedRecords);
      })
      .catch(error =>{
        setCouldntRetrieve(true);
        console.error(error);
      });
    })();
  }, []);
  return (
    <RecordContext.Provider value={{ records }}>
      <div className="aura-page aura-global_records">
        {couldntRetrieve ? <ErrorMessage/> : <RecordList/>}
      </div>
    </RecordContext.Provider>
  );
}

function ErrorMessage() {
  return (
    <h1>Sorry, a problem occurred</h1>
  );
}

function RecordList() {
  const records = useRecords();
  return (
    <>
      <h1>Top Records of 2020</h1>
      <div className="aura-page-content">
        {records.records.map((record) => {
          return <Record key={record.id} data={record} />;
        })}
      </div>
    </>
  )
}

export { GlobalRecords };
