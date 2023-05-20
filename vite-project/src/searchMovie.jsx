import React from "react";

export default function SearchMovie() {
  function handleSubmit() {}

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="query">
          Movie Name:
        </label>
        <input
          className="input"
          type="text"
          placeholder="i.e. Jurassic Park"
          name="query"
        />
        <button className="button" type="submit">
          search
        </button>
      </form>
    </div>
  );
}
