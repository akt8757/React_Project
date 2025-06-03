import React, { useState } from "react";
import SearchBox from "./SearchBox";
import TaskAction from "./TaskAction";
import TaskData from "./TaskData";
import TaskModal from "./TaskModal";

export default function TaskBox() {
  const initialTask = [
    {
      id: crypto.randomUUID(),
      title: "Intregation API",
      description:
        "I have to must be finish tasker app today, cause i am doing its last 7 dayes",
      tags: ["java", "react", "pythone"],
      priority: "high",
      isFavorit: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Intregation API",
      description:
        "I have to must be finish tasker app today, cause i am doing its last 7 dayes",
      tags: ["java", "react", "pythone"],
      priority: "high",
      isFavorit: true,
    },
  ];

  const [task, setTask] = useState(initialTask);
  const [isModal, setIsModal] = useState(false);

  const handleTaskValue = (taskVal) => {
    setTask([...task, taskVal]);
    console.log(taskVal);
    setIsModal(false);
  };

  const handleSingleDelite = (data) => {
    const newFilteredAry = task.filter(
      (filteredData) => filteredData.id != data
    );
    setTask(newFilteredAry);
  };
  return (
    <>
      <section className="mb-20 mr-20 ml-20" id="tasks">
        {isModal ? (
          <TaskModal
            setIsModal={setIsModal}
            handleTaskValue={handleTaskValue}
          />
        ) : null}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchBox />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction setIsModal={setIsModal} />
            <TaskData taskItem={task} handleSingleDelite={handleSingleDelite} />
          </div>
        </div>
      </section>
    </>
  );
}
