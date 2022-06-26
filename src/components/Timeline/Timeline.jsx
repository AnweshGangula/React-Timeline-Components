import './timeline.css';
import { useEffect } from 'react';


export const Timeline = (props) => {

  function TimelineElements(props) {
    const entry = props.entry
    return (
      <div className="timelineItem" style={{ "right": "0px" }}>
        <div className="flagContents">
          <p className={entry.category}><b>{entry.title}</b></p>
          <p>{entry.name}</p>
          <p>{entry.duration}</p>
        </div>
        <div className="flagPole-offset">
          <div className={`flagPole ${entry.type}`}></div>
        </div>
      </div>
    )
  }

  let timeline = props.timelineData.map((entry, index) =>
    <TimelineElements key={index} entry={entry} />
  )

  useEffect(() => {
    let move = 0;
    var offset = 0;
    const animate_timeline =  () => {
      let timelineElements = document.getElementById("timeline-elements").childNodes;
      timelineElements = [...timelineElements]
      // timelineElements = timelineElements.reverse()
      if (move === 0) {
        timelineElements.forEach(
          function (currentValue, currentIndex, listObj) {
            currentValue.style.right = offset + "px";
            offset += 20;
          });
        offset = 0;
        move = 1;
      } else {
        timelineElements.forEach(
          function (currentValue, currentIndex, listObj) {
            currentValue.style.right = "0px";
          });
        move = 0;
      }
    };

    const timelineDiv = document.getElementById("parent-timeline");
    timelineDiv.onmouseenter = animate_timeline;
    timelineDiv.onmouseleave = animate_timeline;
    // timelineDiv.onmouseup = animate_timeline;

  });
  return (
      <div id="parent-timeline" className="themeLight">
        <div id="timeline-bar">
          <p>🞀 Past</p>
          <p>Present 🞂</p>
        </div>
        <div id="timeline-elements">
          {timeline}
        </div>
      </div>
  );
}
