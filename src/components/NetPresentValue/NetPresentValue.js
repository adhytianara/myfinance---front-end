import "./style.css"
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function InternalRateReturn() {
  // register berfungsi untuk mendaftarkan form ke hook
  const { register, handleSubmit, errors, formState, reset } = useForm();

  const [npv, setNvp] = useState(0)

  function fetchInternalRateReturn(opts) {
    fetch(
      "https://839v19j4il.execute-api.us-east-1.amazonaws.com/production/my-haskell-lambda",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-api-key": "KYI4RhklZf5BZvassa6Fz1rl0fmXJ7H235arS7do"
        },
        body: JSON.stringify({body: JSON.stringify(opts)}),
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setNvp(data['body'])
        console.log(data['body']);
      });
  }

  const onSubmit = async (data) => {
    console.log(data);
    data["income_1"] = parseFloat(data["income_1"]);
    data["income_2"] = parseFloat(data["income_2"]);
    data["income_3"] = parseFloat(data["income_3"]);
    data["income_4"] = parseFloat(data["income_4"]);
    data["income_5"] = parseFloat(data["income_5"]);
    data["outcome_1"] = parseFloat(data["outcome_1"]);
    data["outcome_2"] = parseFloat(data["outcome_2"]);
    data["outcome_3"] = parseFloat(data["outcome_3"]);
    data["outcome_4"] = parseFloat(data["outcome_4"]);
    data["outcome_5"] = parseFloat(data["outcome_5"]);
    data["project_interest"] = parseFloat(data["project_interest"]);
    data["project_cost"] = parseFloat(data["project_cost"]);
    
    console.log(JSON.stringify({ body: JSON.stringify(data) }));
    fetchInternalRateReturn(data);

  };

  return (
    <div>
      <h1> Is your Business Good or Not? </h1>
      <form>
        <label> Income year 1 * </label>
        <input type="number" name="income_1" ref={register()} />
        <label> Income year 2 * </label>
        <input type="number" name="income_2" ref={register()} />
        <label> Income year 3 * </label>
        <input type="number" name="income_3" ref={register()} />
        <label> Income year 4 * </label>
        <input type="number" name="income_4" ref={register()} />
        <label> Income year 5 * </label>
        <input type="number" name="income_5" ref={register()} />
        <label> Outcome year 1 *</label>
        <input type="number" name="outcome_1" ref={register()} />
        <label> Outcome year 2 *</label>
        <input type="number" name="outcome_2" ref={register()} />
        <label> Outcome year 3 *</label>
        <input type="number" name="outcome_3" ref={register()} />
        <label> Outcome year 4 *</label>
        <input type="number" name="outcome_4" ref={register()} />
        <label> Outcome year 5 *</label>
        <input type="number" name="outcome_5" ref={register()} />
        <label> Project Interest *</label>
        <input type="number" name="project_interest" ref={register()} />
        <label> Project Cost *</label>
        <input type="number" name="project_cost" ref={register()} />

        <button className="submit-button" type="button" onClick={handleSubmit(onSubmit)}>
          Check my Business
        </button>
        <h1>{npv}</h1>
      </form>
    </div>
  );
}

export default InternalRateReturn;
