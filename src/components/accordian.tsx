import React, { useState } from "react";
import data from "../Data/data";
import { text } from "stream/consumers";

function Accordian() {
  const [selected, setSelected] = useState<string>("");
  const [enableMultiSelection, setEnableMutliSelection] =
    useState<boolean>(false);
  const [multiple, setMultiple] = useState<string[]>([]);

  function handleSingleClick(id: string): void {
    //console.log(id);
    setSelected(id);
  }

  function handleMultiSelection(id: string): void {
    let local = [...multiple];
    const currIndex = multiple.indexOf(id);
    if (currIndex === -1) {
      local.push(id);
    } else {
      local.splice(currIndex, 1);
    }
    setMultiple(local);
  }

  return (
    <div className="container mb-2">
      <div>
        <div className="row">
          <h3 className="fs-1 text-center">1. Japan Tour Info</h3>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <button
              className="btn btn-primary float-start"
              onClick={() => {
                setEnableMutliSelection(!enableMultiSelection);
              }}
            >
              Enable Multi-Selection
            </button>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row m-4">
          <div className="col-3"></div>
          <div className="col-6">
            {data.map((item) => {
              return (
                <div
                  className="p-2 mb-2 border"
                  key={item.id}
                  onClick={
                    enableMultiSelection
                      ? () => {
                          handleMultiSelection(item.id);
                        }
                      : () => {
                          handleSingleClick(item.id);
                        }
                  }
                >
                  {item.question}
                  <button className="ml-r darkBtn"> + </button>
                  <div>
                    {selected === item.id ||
                    multiple.indexOf(item.id) !== -1 ? (
                      <div className="fontSmall bg-info p-2 mt-1">
                        {item.answer}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
