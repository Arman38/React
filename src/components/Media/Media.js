import React, { useState } from "react";
import classes from "./media.module.scss";

function Media() {
  const slideInfo =[
    {
      text:
        "1111 Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed diam nonumy  eirmod empor invidunt ut labore et dolore magna liquyam ",
      id: 1,
    },
    {
      text:
        "2222 Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed diam nonumy  eirmod empor invidunt ut labore et dolore magna liquyam ",
      id: 2,
    },
    {
      text:
        "3333 Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed diam nonumy  eirmod empor invidunt ut labore et dolore magna liquyam ",
      id: 3,
    },
    {
      text:
        "4444 Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed diam nonumy  eirmod empor invidunt ut labore et dolore magna liquyam ",
      id: 4,
    }
  ]
  const [activeId, setActiveId] = useState(1);

  return (
    <div className={classes.Media}>
      <div className={`container`}>
        <div className={`${classes.MediaContainer} `}>
          <h3>Media Says</h3>
          <section className={classes.Slide}>
            {slideInfo.map(
              ({ text, id }) => id === activeId && <div key={id}>{text}</div>
            )}
          </section>
          <div className={classes.SlideChangers}>
            {slideInfo.map(({ text, id }) => {
              return (
                  <div
                    key={text + id}
                    onClick={() => setActiveId(id)}
                  >
                    <div  className={`${classes.SlideChanger} ${  id === activeId && classes.ActiveSlide }`}   ></div>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;
