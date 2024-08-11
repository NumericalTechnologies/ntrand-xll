import React from "react";
import Spreadsheet, { createFormulaParser } from "react-spreadsheet";

function customCreateFormulaParser(data) {
  return {
    parse: (formula) => "=" + formula,
    evaluate: (formula) => "=" + formula,
  };
}

const DataGridMdx = ({ data }) => {
  return (
    <Spreadsheet
      data={data.cells}
      createFormulaParser={customCreateFormulaParser}
    />
  );
};

export default DataGridMdx;
