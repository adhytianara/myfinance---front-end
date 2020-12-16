import React from "react";
import { useForm } from "react-hook-form";

function later(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}

function InternalRateReturn() {
  // register berfungsi untuk mendaftarkan form ke hook
  const { register, handleSubmit, errors, formState, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1> Is your Business Good or Not? </h1>
      <form>
        <label> Income year 1 * </label>
        <input type="number" name="income1" ref={register()} />

        <label> Income year 2 *</label>
        <input type="number" name="income2" ref={register()} />

        <label> Income year 3 *</label>
        <input type="number" name="income3" ref={register()} />

        <label> Income year 4 *</label>
        <input type="number" name="income4" ref={register()} />

        <label> Income year 5 *</label>
        <input type="number" name="income5" ref={register()} />

        <label> Outcome year 1 *</label>
        <input type="number" name="outcome1" ref={register()} />

        <label> Outcome year 2 *</label>
        <input type="number" name="outcome2" ref={register()} />

        <label> Outcome year 3 *</label>
        <input type="number" name="outcome3" ref={register()} />

        <label> Outcome year 4 *</label>
        <input type="number" name="outcome4" ref={register()} />
        
        <label> Outcome year 5 *</label>
        <input type="number" name="outcome5" ref={register()} />

        <label> Interest *</label>
        <input type="number" name="interest" ref={register()} />

        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
        >
          Check my Business
        </button>
      </form>
    </div>
  );
}

export default InternalRateReturn;
