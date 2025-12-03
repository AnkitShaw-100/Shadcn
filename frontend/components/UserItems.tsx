"use client";

export default function UserItem() {
  return (
    <>
      <div className=" flex items-center justify-between gap-2 border rounded-xl p-2 ">
        {/* Icon */}
        <div className="avatar rounded-full min-h-8 min-w-8 bg-emerald-500 text-white font-bold flex items-center justify-center">
          <p>AS</p>
        </div>
        {/* Details */}
        <div className="grow">
          <p className="text-[16px] font-bold">Ankit Shaw</p>
          <p className="text-[12px] text-neutral-500">
            ankitshawTest@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}
