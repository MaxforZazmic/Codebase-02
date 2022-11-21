import React, {useState} from "react";
import "./App.css";
import GoalList from "./Components/GoalList/GoalList";
import NewGoal from "./Components/NewGoal/NewGoal";

const APP = () => {
const [courseGoals, setCourseGoals] = useState([
  {id: "cg1", text: "React refresh"},
  {id: "cg2", text: "Node refresh"},
  {id: "cg3", text: "Building MERN app"}
]);

const addNewGoalHandler = (newGoal) => {

setCourseGoals ((prevCourseGoals) => {
return prevCourseGoals.concat(newGoal);
});
};


  return (        
  <div className="course-goals">
<h2>Course Goals</h2>
<NewGoal onAddGoal={addNewGoalHandler}/>
<GoalList goals={courseGoals} />
  </div>
  )
};

export default APP;
