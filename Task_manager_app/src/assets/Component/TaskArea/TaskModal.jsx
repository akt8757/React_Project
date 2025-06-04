import React, { useState } from "react";

export default function TaskModal({
  handleModalClose,
  handleTaskValue,
  editTask,
}) {
  const [taskVal, setTaskVal] = useState(
    editTask || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorit: true,
    }
  );

  const handleGetValu = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "tags") {
      value = value.split(" , ");
    }
    setTaskVal({
      ...taskVal,
      [name]: value,
    });
  };

  //   Mode add dat / edite data
  const [isAdd, setrIsAdd] = useState(Object.is(editTask, null));

  return (
    <>
      <div className=" bg-black opacity-70 h-full w-full z-10 absolute top-0 left-0"></div>
      <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/4">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? "Add Task" : "Edite Task"}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              onChange={handleGetValu}
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={taskVal.title}
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={handleGetValu}
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={taskVal.description}
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                onChange={handleGetValu}
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={taskVal.tags.join("")}
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                onChange={handleGetValu}
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                type="text"
                value={taskVal.priority}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-between lg:mt-20">
          <button
            onClick={handleModalClose}
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Close
          </button>
          <button
            onClick={() => handleTaskValue(taskVal, isAdd)}
            type="button"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
