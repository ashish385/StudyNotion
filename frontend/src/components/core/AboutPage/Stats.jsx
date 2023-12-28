import React from 'react'

const stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const Stats = () => {
  return (
    <div>
      <div className="w-11/12 flex flex-col md:flex-row justify-between items-center px-20 py-16">
        {stats.map((item, index) => (
          <div key={index} className="text-center px-4 py-2">
                <h1 className="text-3xl text-richblack-25 font-bold">{item.count }</h1>
                <p className=" text-richblack-600 font-semibold">{item.label }</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats
