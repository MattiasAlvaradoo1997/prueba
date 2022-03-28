import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Tasks from "../pages/Tasks";
import TaskNew from "../pages/TaskNew";
import NotFound from "../pages/NotFound"

const App = () => (
        <Router>
            <Routes>
                <Route exact path="/task" element={<Tasks />} />
                <Route exact path="/task/new" element={<TaskNew />} />
                <Route path = '*' element={<NotFound/>}/>
            </Routes>
        </Router>
)

export default App