import React from "react";
import Post from "./Post";

const GuestBook = () => {
  return (
    <div className="w-[90%] flex flex-col space-y-4 items-center py-8">
      <h1>신랑신부에게 축하메시지를 남겨주세요</h1>
      <form
        type="submit"
        className="flex flex-col space-y-4 bg-neutral-300 p-4 w-full items-center"
      >
        <div className="w-full flex justify-between">
          <input className="w-[48%] p-1" type="text" placeholder="이름" />
          <input className="w-[48%] p-1" type="text" placeholder="비밀번호" />
        </div>
        <input
          className="w-full pt-1 pb-20 px-1"
          type="text"
          placeholder="축하메시지를 적어주세요 :)"
        />
        <button className="bg-white w-[60%] p-1" type="submit">
          축하 메시지 남기기
        </button>
      </form>
    </div>
  );
};

export default GuestBook;
