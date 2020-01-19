import Components from "./Components.js";

const Template = ({ grid, data }) => {
  return grid.rows.map((row, index) => {
    return (
      <div className="row" key={`row-${index}`}>
        {row.column.map((col, index) => {
          if (col.component) {
            return (
              <div className={`col-${col.width}`} key={`col-${index}`}>
                <Components component={col.component} data={data} text={col.text} />
              </div>
            );
          } else {
            if (col.rows) {
              return (
                <div className={`col-${col.width}`} key={`col-${index}`}>
                  <Template grid={col} data={data} />
                </div>
              );
            }
          }
        })}
      </div>
    );
  });
};

export default Template;