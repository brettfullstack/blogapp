import React from "react";

const DashboradComment = ({ data }) => {
  return (
    <div className="2xl:max-w-screen-2xl 2xl:mx-auto mx-5 sm:mx-10 bg-slate-300 mt-[5rem] p-5 rounded-lg shadow-xl">
      <p className="text-3xl text-center uppercase varela">user panel</p>
      <div className="overflow-auto rounded-lg">
        <table className="w-full mt-10">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              {["Avatar", "Email", "Username", "CreatedAt", "PostId", "ID"].map(
                (item, idx) => (
                  <th
                    className={`${
                      idx === 0 ? "w-1" : "w-[10rem]"
                    } p-3 text-sm font-semibold  text-left`}
                    key={idx}
                  >
                    {item}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 ">
            {data.map((item, idx) => (
              <tr className="bg-white" key={idx}>
                <td className=" p-3 text-sm text-gray-700">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://images.pexels.com/photos/13672084/pexels-photo-13672084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="profile_pic"
                  />
                </td>
                <td>{item.comment}</td>
                <td className="w-[5rem]">{item.username}</td>
                <td>{new Date(item.createdAt).toDateString()}</td>
                <td>{item.postId}</td>
                <td>{item._id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboradComment;
