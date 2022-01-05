import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="">
      <div className="h-auto p-[50px] flex items-center justify-center">
        <div className="h-[86vh] w-[400px] flex items-center justify-center rounded-[10px] bg-[#7900FF] drop-shadow-xl">
          <div>
            <form
              className="grid gap-4 grid-rows-3 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="font-semibold text-4xl text-center items-center text-white">
                <h1>Student Registration </h1>
              </div>
              <input
                className="p-4 rounded-[6px] outline-blue-400"
                type="name"
                placeholder="Name"
                {...register("name", { required: true })}
              />

              <div className="flex items-center justify-center">
                <div className="inline-flex">
                  <div className="pr-2">
                    <input
                      className=" rounded-[6px] w-[100px] h-[50px] px-1 text-center outline-blue-400"
                      type="number"
                      placeholder="Date"
                      {...register("date", { required: true, maxLength: 2 })}
                    />
                  </div>
                  <div className="px-2">
                    <input
                      className=" rounded-[6px] w-[100px] h-[50px] px-1 text-center outline-blue-400"
                      type="number"
                      placeholder="Month"
                      {...register("month", { required: true, maxLength: 2 })}
                    />
                  </div>
                  <div className="pl-2">
                    <input
                      className=" rounded-[6px] w-[100px] h-[50px] px-1 text-center outline-blue-400"
                      type="number"
                      placeholder="Year"
                      {...register("year", { required: true, maxLength: 20 })}
                    />
                  </div>
                </div>
              </div>

              <input
                className="p-4 rounded-[6px] outline-blue-400"
                type="number"
                placeholder="NIS"
                {...register("nis", { required: true, maxLength: 0 })}
              />
              <textarea
                className="p-4 rounded-[6px] h-[20vh] outline-blue-400"
                placeholder="Catatan"
                {...register("description", { required: true, maxLength: 0 })}
              />
              <div className="flex items-center justify-center gap-4">
                <button
                  className="bg-red-500 text-white rounded-[6px] px-7 py-2 drop-shadow-lg"
                  type="button"
                  onClick={() => reset()}
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="bg-sky-500 text-white w-[100%] rounded-[6px] px-5 py-2 drop-shadow-lg hover:opacity-[0.9] hover:duration-150"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
