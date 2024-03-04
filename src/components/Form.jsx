import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <div>
          <label>Name</label>
          <input
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
            type="text"
            value={name.firstName}
          />
        </div>
        <div>
          <label>Sirname</label>
          <input
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
            type="text"
            value={name.lastName}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
