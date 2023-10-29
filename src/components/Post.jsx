import React, { useState } from "react";

const Post = () => {
  return (
    <div className="w-[90%] flex flex-col bg-white p-4 space-y-3">
      <div className="flex justify-between">
        <span>이름</span>
        <span>Date</span>
      </div>
      <p className="bg-neutral-200 p-4">Text</p>
      <div className="self-end">
        <button className="bg-neutral-200 py-1 px-3">삭제</button>
      </div>
    </div>
  );
};

export default Post;
